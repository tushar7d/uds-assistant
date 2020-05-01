figma.showUI(__html__);
figma.ui.resize(400, 250);

const textNodesWithNoTextStyle = figma.currentPage.findAll(
  (node) => node.type === "TEXT" && node.textStyleId === ""
);
const textNodesWithNoFillStyle = figma.currentPage.findAll(
  (node) => node.type === "TEXT" && node.fillStyleId === ""
);
const detachedNodes = figma.currentPage.findAll(
  (node) =>
    node.type != "INSTANCE" &&
    node.type === "FRAME" &&
    node.name.search("/") > -1 &&
    node.name.search("_") === -1
);
const partialNodes = figma.currentPage.findAll(
  (node) =>
    node.type != "INSTANCE" &&
    node.type === "FRAME" &&
    node.name.search("/") > -1 &&
    node.name.search("_") === 0
);

figma.ui.postMessage({
  all:
    textNodesWithNoFillStyle.length +
    textNodesWithNoTextStyle.length +
    detachedNodes.length +
    partialNodes.length,
  type: textNodesWithNoTextStyle.length,
  color: textNodesWithNoFillStyle.length,
  comp: detachedNodes.length+partialNodes.length,
});
