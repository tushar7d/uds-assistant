export const selectNode = (id) => {
  parent.postMessage({ pluginMessage: { type: "select-node", id } }, "*");
};

export function handleClick(id) {
  selectNode(id);
}
