'use strict';

let allnodes = figma.currentPage;
let n = 0;
let FindErrors = (nodes) => {
    n++;
    console.log(nodes.name + " " + n);
    if ("children" in nodes) {
        for (const child of nodes.children) {
            if (child.type === "TEXT") {
                console.log("node is Text");
            }
            FindErrors(child);
        }
    }
};
FindErrors(allnodes);
figma.closePlugin();
//# sourceMappingURL=code.js.map
