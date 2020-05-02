<script>
  import { selected, count, data } from "../store.js";
  import TextSection from "./TextSection.svelte";
  import ColorFillSection from "./ColorFillSection.svelte";
  import CompSection from './CompSection.svelte'
</script>

<style>
  div {
    margin-top: 18px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
      overflow: hidden;
     
      
  }
  main{
     margin-left: 128px;
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
  <CompSection />
{/if}
</main>
