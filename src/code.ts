let count = 0
function traverse(node) {
  if ("children" in node) {
    count++
    if (node.type !== "INSTANCE") {
      for (const child of node.children) {
        traverse(child)
      }
    }
  }
}
traverse(figma.root) 


const textNodesWithNoTextStyle = figma.currentPage.findAll(
  (node) => node.type === "TEXT" && node.textStyleId === ""
);



console.log(figma.getNodeById(textNodesWithNoTextStyle[0].id).name);

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


let getNameFromId = (id) => {
  let name = figma.getNodeById(id).name;

  return name;
};


figma.showUI(__html__);

figma.ui.postMessage({
  count: {
    all:
      textNodesWithNoFillStyle.length +
      textNodesWithNoTextStyle.length +
      detachedNodes.length +
      partialNodes.length,
    type: textNodesWithNoTextStyle.length,
    color: textNodesWithNoFillStyle.length,
    comp: detachedNodes.length + partialNodes.length,
  },
});

figma.ui.resize(500, 350);
