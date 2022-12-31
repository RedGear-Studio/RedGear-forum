
<div id="menu-container">
  <dir id="menu-logo">
    <span class="material-symbols-outlined"> settings </span>
    <span style="font-weight: bolder; font-size: x-large;">RedGear</span>
  </dir>
  <div id="menu-login">
    <button>Login</button>
    <button>Signup</button>
  </div>
</div>

<style>
  #menu-container {
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
    display: grid;
    width: 100vw;
    margin-bottom: 10px;
    padding-top: 10px;
    padding-bottom: 10px;
    background: rgb(27, 27, 27);
  }

  #menu-login {
    grid-column-start: 2;
    justify-self: end;
    margin-right: 20px;
  }

  #menu-logo {
    margin-left: 20px;
  }
</style>
