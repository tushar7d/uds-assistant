<script>

  export let name = "0";
</script>

<style>
  .container {
    width: 308px;
    border-bottom: 1px solid #e5e5e5;
    
    padding: 6px;
    margin: 3px;
    
  }
  .container:hover{
      background-color: #EBF3FA;
     border-bottom: 1px solid #EBF3FA;
      border-radius: 6px;
  }
  .h{

      font-size: 12px;
      color: #bbbbbb;
      margin-bottom: 3px;}
  .sh{

      font-size: 16px;
      color: #575757;
  }
</style>

<div class="container">
  <div class="h">Layer Name</div>
  <div class="sh">{name}</div>

</div>
