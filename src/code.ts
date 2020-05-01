let allnodes = figma.currentPage;

let tsm = [];
let tcm = [];
let dc = [];
let pc = [];
let fsm = [];

let FindErrors = async (nodes) => {
  if ("children" in nodes) {
    for (const child of nodes.children) {
      if (child.type === "TEXT" && child.textStyleId === "") {
        tsm.push(child);
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

FindErrors(allnodes).then(() => {
  console.log(tsm);
  console.log(tcm);
  console.log(dc);
  console.log(pc);
  console.log(fsm);
});
