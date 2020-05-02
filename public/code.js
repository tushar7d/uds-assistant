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
            if (child.type === "TEXT") {
                if (child.textStyleId === "") {
                    tsm.push(child);
                }
                if (child.fillStyleId === "") {
                    tcm.push(child);
                }
            }
            else if (child.type === "RECTANGLE" && child.fillStyleId === "") {
                fsm.push(child);
            }
            else if (child.type !== "INSTANCE" &&
                child.name.search("/") > -1 &&
                child.name.search("_") !== 0) {
                dc.push(child);
            }
            else if (child.type !== "INSTANCE" &&
                child.name.search("/") > -1 &&
                child.name.search("_") === 0) {
                pc.push(child);
            }
            else {
                if (child.type !== "INSTANCE") {
                    FindErrors(child);
                }
            }
        }
    }
});
let getNames = (nodes) => {
    let s = [];
    nodes.forEach((e) => {
        s.push(e.name);
    });
    return s;
};
let getId = (nodes) => {
    let s = [];
    nodes.forEach((e) => {
        s.push(e.id);
    });
    return s;
};
FindErrors(allnodes).then(() => {
    figma.showUI(__html__);
    figma.ui.resize(450, 300);
    figma.ui.postMessage({
        tsm: { name: getNames(tsm), id: getId(tsm) },
        tcm: { name: getNames(tcm), id: getId(tcm) },
        dc: { name: getNames(dc), id: getId(dc) },
        pc: { name: getNames(pc), id: getId(pc) },
        fsm: { name: getNames(fsm), id: getId(fsm) },
    });
});
console.log("t");
console.log([tsm, tcm, dc, pc, fsm]);
