<script>
  import { count, data } from "./store";
  import Sidebar from "./Components/Sidebar.svelte";
  import ViewPane from "./Components/ViewPane.svelte";
  onmessage = event => {
    count.set(event.data.pluginMessage.count);
    
  };
</script>

<style>
  div {
    margin: 0px;
    padding: 0px;
    width: 400px;
    height: 250px;
    display: flex;
  }
</style>

<div>
  <Sidebar />
  <ViewPane />
</div>
