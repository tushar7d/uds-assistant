let allnodes = figma.currentPage;

let tsm = [];
let tsmn = [];
let tcm = [];
let dc = [];
let pc = [];
let fsm = [];

let FindErrors = async (nodes) => {
  if ("children" in nodes) {
    for (const child of nodes.children) {
      if (child.type === "TEXT" && child.textStyleId === "") {
        tsm.push(child);
        tsmn.push(child.name);
      } else if (
        child.type === "TEXT" &&
        child.textStyleId === "" &&
        child.fillStyleId === ""
      ) {
        tcm.push(child);
      } else if (child.type === "RECTANGLE" && child.fillStyleId === "") {
        fsm.push(child);
      } else if (
        child.type !== "INSTANCE" &&
        child.name.search("/") > -1 &&
        child.name.search("_") !== 0
      ) {
        dc.push(child);
      } else if (
        child.type === "INSTANCE" &&
        child.name.search("/") > -1 &&
        child.name.search("_") === 0
      ) {
        pc.push(child);
      } else {
        FindErrors(child);
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
