<script>
  import { data } from "../store.js";
    import { selectNode, handleClick } from "../common.js";
     import Item from './Item.svelte';
</script>

<style>
  div {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
      width: 100%;
      cursor: pointer;
  }

  h1 {
    font-size: 15px;
    cursor: default;
  }

  
  
</style>

<div >


  <h1>Fill Style Missing for Text layers</h1>

  {#each $data.tcm.name as dt, i}
    <div on:click={() => {
        handleClick($data.tcm.id[i]);
      }} >
      <Item name={$data.tcm.name[i]} id={$data.tcm.id[i]} />
  </div>
  {/each}

  <h1>Fill Style Missing for other layers</h1>
  {#each $data.fsm.name as dt, i}
    <div on:click={() => {
        handleClick($data.fsm.id[i]);
      }} >
      <Item name={$data.fsm.name[i]} id={$data.fsm.id[i]} />
      </div>
  {/each}

</div>
