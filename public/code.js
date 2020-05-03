"use strict";
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
***************************************************************************** */function e(e,t,n,i){return new(n||(n=Promise))((function(a,c){function o(e){try{s(i.next(e))}catch(e){c(e)}}function r(e){try{s(i.throw(e))}catch(e){c(e)}}function s(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,r)}s((i=i.apply(e,t||[])).next())}))}let t=figma.currentPage,n=[],i=[],a=[],c=[],o=[],r=t=>e(void 0,void 0,void 0,(function*(){if("children"in t)for(const e of t.children)"TEXT"===e.type?(""===e.textStyleId&&n.push(e),""===e.fillStyleId&&i.push(e)):"RECTANGLE"!==e.type&&"ELLIPSE"!==e.type&&"LINE"!==e.type&&"POLYGON"!==e.type&&"VECTOR"!==e.type||""!==e.fillStyleId?"INSTANCE"!==e.type&&e.name.search("/")>-1&&0!==e.name.search("_")?a.push(e):"INSTANCE"!==e.type&&e.name.search("/")>-1&&0===e.name.search("_")?c.push(e):"INSTANCE"!==e.type&&r(e):o.push(e)})),s=e=>{let t=[];return e.forEach(e=>{t.push(e.name)}),t},m=e=>{let t=[];return e.forEach(e=>{t.push(e.id)}),t};r(t).then(()=>{figma.showUI(__html__),figma.ui.resize(450,300),figma.ui.postMessage({tsm:{name:s(n),id:m(n)},tcm:{name:s(i),id:m(i)},dc:{name:s(a),id:m(a)},pc:{name:s(c),id:m(c)},fsm:{name:s(o),id:m(o)}})}),figma.ui.onmessage=e=>{let t=figma.getNodeById(e.id);figma.viewport.scrollAndZoomIntoView([t]),figma.currentPage.selection=[t]};
