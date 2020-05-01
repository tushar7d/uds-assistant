<script>
  import { selected, count, data } from "../store.js";

  


</script>

<style>
  div {
    margin-top: 18px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }
</style>

{#if $selected == 0}
  <div>
    There {$count.all > 1 ? 'are' : 'is'} {$count.all} problem{$count.all > 1 ? 's' : ''}
  </div>
{:else if $selected == 1}
<div>dd</div>

{:else if $selected == 2}
  <div>
    There {$count.color > 1 ? 'are' : 'is'} {$count.color} Color problem{$count.color > 1 ? 's' : ''}
  </div>
{:else if $selected == 3}
  <div>
    There {$count.comp > 1 ? 'are' : 'is '} {$count.comp} Component problem{$count.comp > 1 ? 's' : ''}
  </div>
{/if}
