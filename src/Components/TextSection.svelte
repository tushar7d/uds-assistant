<script>
  import { data } from "../store.js";
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

<div>
  <h1>Text Style Missing</h1>

  {#each $data.tsm.name as dt, i}
    <div>Name: {$data.tsm.name[i]} id:{$data.tsm.id[i]}</div>
  {/each}

</div>
