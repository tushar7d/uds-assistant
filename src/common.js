export const selectNode = (id)=>{

    parent.postMessage({ pluginMessage: { type: 'select-node', id } }, '*')

}