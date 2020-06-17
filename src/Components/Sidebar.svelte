<script>
  import { selected } from "../store.js";

  let items = [
    { name: "About", selected: true, count: 0 },
    { name: "Type", selected: false, count: 0 },
    { name: "Color", selected: false, count: 0 },
    { name: "Components", selected: false, count: 0 }
  ];

  let handleClick = i => {
    items[$selected].selected = false;
    items[i].selected = true;
    selected.set(i);
  };

  
</script>

<style>
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    padding-top: 12px;
  }

  li {
    padding: 8px;
    font-size: 15px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    max-width: 128px;
  }
  li:hover {
    background-color: #f5f5f5;
    cursor: pointer;
  }
  div {
    margin: 0px;
    margin-right: 12px;
  }
</style>

<div>
  <ul>
    {#each items as item, i}
      <li
        on:click={() => {
          handleClick(i);
        }}
        style={item.selected ? 'color: blue;' : 'color: inherit'}>
        {item.name}
      </li>
    {/each}
  </ul>
</div>
