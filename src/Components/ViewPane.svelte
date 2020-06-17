<script>
  import { selected, count, data } from "../store.js";
  import TextSection from "./TextSection.svelte";
  import ColorFillSection from "./ColorFillSection.svelte";
  import CompSection from "./CompSection.svelte";

  console.log($selected);
</script>

<style>
  div {
    margin-top: 15px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    overflow: hidden;
    line-height: 18px;
    color: #5f5f5f;
    cursor: default;
  }
</style>

<main>
  {#if $selected == 0}
    <div>
      This is a simple plugin designed to Flag layers with incorrect text &
      color usage. It also flags to Components which are detached.
    </div>
  {:else if $selected == 1}
    <TextSection />
  {:else if $selected == 2}
    <ColorFillSection />
  {:else if $selected == 3}
    <CompSection />
  {/if}
</main>
