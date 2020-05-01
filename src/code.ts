
//////////////////////////////////////////////////////////
//Setting Up and Loading UI-------------------------------
//////////////////////////////////////////////////////////

figma.showUI(__html__);
figma.ui.resize(500, 350);

//////////////////////////////////////////////////////////
//Rules---------------------------------------------------
//////////////////////////////////////////////////////////


////Text Styles-------------------------------------------

const textNodesWithNoTextStyle = figma.currentPage.findAll(
  (node) => node.type === "TEXT" && node.textStyleId === ""
);

////Text Fill Styles---------------------------------------

const textNodesWithNoFillStyle = figma.currentPage.findAll(
  (node) => node.type === "TEXT" && node.fillStyleId === ""
);

////Components---------------------------------------------

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

//////////////////////////////////////////////////////////
//Sending to Frontend-------------------------------------
//////////////////////////////////////////////////////////

figma.ui.postMessage({count:{
  all:
    textNodesWithNoFillStyle.length +
    textNodesWithNoTextStyle.length +
    detachedNodes.length +
    partialNodes.length,
  type: textNodesWithNoTextStyle.length,
  color: textNodesWithNoFillStyle.length,
  comp: detachedNodes.length+partialNodes.length,
}});
