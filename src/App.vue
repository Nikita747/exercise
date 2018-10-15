<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <a href="">Hello</a>
    <div class="custom">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  padding: 80px;
}
.custom {
  padding-top: 20px;
  /*box-shadow: 4px 4px 4px 4px rgba(0,0,0,0.2);*/
  /*transition: 0.3s;*/
  /*border-radius: 0px;  5px rounded corners */
}
</style>
