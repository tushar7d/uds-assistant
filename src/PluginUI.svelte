<script>
  import {data} from './store'
  import Sidebar from "./Components/Sidebar.svelte";
  import ViewPane from "./Components/ViewPane.svelte";
  onmessage = (event) => {
  
  data.set(event.data.pluginMessage)
  

  console.log($data)

}
 
</script>

<style>

:global(body) {
		
		margin: 0;
	}

  div {
    margin: 0px;
    padding: 0px;
    width: 100%;
    height: 100%;
    display: flex;
  }
 
</style>

<div>

  <Sidebar />
  <ViewPane />
</div>
