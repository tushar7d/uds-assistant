<script>
  import { data } from "../store.js";
</script>

<div>
<h3>Text Style Missing</h3>

  {#each $data.tsm.name as dt, i}
    <div>Name: {$data.tsm.name[i]} id:{$data.tsm.id[i]}</div>
  {/each}

</div>
