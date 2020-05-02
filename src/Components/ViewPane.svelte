<script>
  import { selected, count, data } from "../store.js";
  import TextSection from "./TextSection.svelte";
  import ColorFillSection from "./ColorFillSection.svelte";
</script>

<style>
  div {
    margin-top: 18px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
      
  }
 
</style>
<main>
{#if $selected == 0}
  <div>
    Main
  </div>
{:else if $selected == 1}
  <TextSection />
{:else if $selected == 2}
  <ColorFillSection />
{:else if $selected == 3}
  <div>
    There {$count.comp > 1 ? 'are' : 'is '} {$count.comp} Component problem{$count.comp > 1 ? 's' : ''}
  </div>
{/if}
</main>
