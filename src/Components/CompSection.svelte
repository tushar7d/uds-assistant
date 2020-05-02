<script>
  import { data } from "../store.js";
  import { selectNode } from "../common.js";

  function handleClick(id) {

    selectNode(id);
    console.log(id);
  }
  
</script>

<style>
  div {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    width: 100%;
  }

  h1 {
    font-size: 15px;
  }
</style>

<div >

  <h1 >Detached Components</h1>

  {#each $data.dc.name as dt, i}
    <div on:click={()=>{handleClick($data.dc.id[i])}}>Name: {$data.dc.name[i]} id:{$data.dc.id[i]}</div>
  {/each}

  <h1>Detached Partial Components</h1>
  {#each $data.pc.name as dt, i}
    <div on:click={()=>{handleClick($data.pc.id[i])}} >Name: {$data.pc.name[i]} id:{$data.pc.id[i]}</div>
  {/each}

</div>
