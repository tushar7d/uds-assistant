let allnodes = figma.currentPage;

let tsm = [];
let tcm = [];
let dc = [];
let pc = [];
let fsm = [];

let FindErrors = async (nodes) => {
  if ("children" in nodes) {
    for (const child of nodes.children) {
      if (child.type === "TEXT") {
        // check text nodes
        if (child.textStyleId === "") {
          // check text style ID
          tsm.push(child);
        }
        if (child.fillStyleId === "") {
          // check text fill style ID
          tcm.push(child);
        }
      } else if (
        (child.type === "RECTANGLE" ||
          child.type === "ELLIPSE" ||
          child.type === "LINE" ||
          child.type === "POLYGON" ||
          child.type === "VECTOR") &&
        child.fillStyleId === ""
      ) {
        // check Shape fill style id
        fsm.push(child);
      } else if (
        child.type !== "INSTANCE" &&
        child.name.search("/") > -1 &&
        child.name.search("_") !== 0
      ) {
        dc.push(child);
      } else if (
        child.type !== "INSTANCE" &&
        child.name.search("/") > -1 &&
        child.name.search("_") === 0
      ) {
        pc.push(child);
      } else {
        if (child.type !== "INSTANCE") {
          FindErrors(child);
        }
      }
    }
  }
};

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

figma.ui.onmessage = (message) => {
  let node = figma.getNodeById(message.id);
  figma.viewport.scrollAndZoomIntoView([node]);

  figma.currentPage.selection = [node as SceneNode];
};
