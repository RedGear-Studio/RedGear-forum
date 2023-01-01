<script>
  /* Write your javascript here */
</script>


<!-- Your HTML here -->
<div class="space" />
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
  class="flexbox noselect"
  id="flexbox"
  on:click={() => {
    if (window.confirm("Êtes-vous sûr de vouloir continuer ?")) {
      window.open("https://www.example.com");
    } else {
    }
  }}
>
  <div class="item" id="first-item">Home</div>
  <div class="item" id="second-item">Forum</div>
</div>
<div class="space" />
<div class="cadre">
  <div class="list-post">
    <div class="post" />
  </div>
</div>
<div class="space" />
<div class="form-post">
  <input type="text" placeholder="Name of post" id="name-post" />
  <input type="text" placeholder="Text of post" id="text-post" />
  <input type="submit" placeholder="Send post" id="send-post" />
</div>
<div class="space" />
<div class="footer">
  &copy 2023-2024 Read Gear | Design by <em>Elham and Tach</em> of RG Team
</div>

<svelte:head>
  <style>
    body {
      margin: 0;
      background: rgb(44, 44, 44);
      color: white;
    }
  </style>
</svelte:head>

<style>
  /* Your CSS here!  Thanks for your comment bro :) */
  .flexbox {
    display: flex;
    border: solid 1px;
    border-radius: 10px;
    border-color: white;
    margin-left: 10px;
    margin-right: 10px;
    background: rgb(27, 27, 27);
  }

  .flexbox:hover {
    border-color: red;
  }

  .item {
    margin: 8px;
    text-align: center;
  }

  .item:hover {
    color: red;
    cursor: pointer;
  }

  #first-item {
    text-align: center;
  }

  .cadre {
    width: 500px;
    height: 500px;
    border: solid 1px #000000;
    border-radius: 10pw;
    overflow-y: scroll;
  }

  .space {
    padding-top: 10px;
    padding-bottom: 10px;
  }
</style>
