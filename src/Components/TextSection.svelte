<script>
  
  import { selectNode, handleClick } from "../common.js";
  import Item from './Item.svelte';
  import { data } from "../store.js";

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

<div>
  <h1>Text Style Missing</h1>

  {#each $data.tsm.name as dt, i}
    <div on:click={() => {
        handleClick($data.tsm.id[i]);
      }} >
      <Item name={$data.tsm.name[i]} id={$data.tsm.id[i]} />
      </div>
  {/each}

</div>
