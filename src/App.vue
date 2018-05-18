<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style>
  #app {
    width: 100vw;
    height: 100vh;
  }

  body {
    margin: 0;
    font-family: sans-serif;
  }
</style>
