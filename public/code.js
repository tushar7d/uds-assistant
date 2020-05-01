'use strict';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

let allnodes = figma.currentPage;
let tsm = [];
let tcm = [];
let dc = [];
let pc = [];
let fsm = [];
let FindErrors = (nodes) => __awaiter(void 0, void 0, void 0, function* () {
    if ("children" in nodes) {
        for (const child of nodes.children) {
            if (child.type === "TEXT" && child.textStyleId === "") {
                tsm.push(child);
            }
            else if (child.type === "TEXT" &&
                child.textStyleId === "" &&
                child.fillStyleId === "") {
                tcm.push(child);
            }
            else if (child.type === "RECTANGLE" && child.fillStyleId === "") {
                fsm.push(child);
            }
            else if (child.type !== "INSTANCE" &&
                child.name.search("/") > -1 &&
                child.name.search("_") !== 0) {
                dc.push(child);
            }
            else if (child.type === "INSTANCE" &&
                child.name.search("/") > -1 &&
                child.name.search("_") === 0) {
                pc.push(child);
            }
            else {
                FindErrors(child);
            }
        }
    }
});
FindErrors(allnodes).then(() => {
    console.log(tsm);
    console.log(tcm);
    console.log(dc);
    console.log(pc);
    console.log(fsm);
});
