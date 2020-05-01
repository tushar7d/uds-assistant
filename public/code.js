'use strict';

const textNodesWithNoTextStyle = figma.currentPage.findAll((node) => node.type === "TEXT" && node.textStyleId === "");
console.log(figma.getNodeById(textNodesWithNoTextStyle[0].id).name);
const textNodesWithNoFillStyle = figma.currentPage.findAll((node) => node.type === "TEXT" && node.fillStyleId === "");
const detachedNodes = figma.currentPage.findAll((node) => node.type != "INSTANCE" &&
    node.type === "FRAME" &&
    node.name.search("/") > -1 &&
    node.name.search("_") === -1);
const partialNodes = figma.currentPage.findAll((node) => node.type != "INSTANCE" &&
    node.type === "FRAME" &&
    node.name.search("/") > -1 &&
    node.name.search("_") === 0);
figma.showUI(__html__);
figma.ui.postMessage({
    count: {
        all: textNodesWithNoFillStyle.length +
            textNodesWithNoTextStyle.length +
            detachedNodes.length +
            partialNodes.length,
        type: textNodesWithNoTextStyle.length,
        color: textNodesWithNoFillStyle.length,
        comp: detachedNodes.length + partialNodes.length,
    },
});
figma.ui.resize(500, 350);
