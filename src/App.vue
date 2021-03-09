<template>
  <div id="app">
    <hello-world></hello-world>
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld";

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body{
  margin: 0;
  border: 0;
}
*{
  box-sizing: border-box;
  text-decoration: none;
}
a{
  -webkit-tap-highlight-color:rgba(0,0,0,0)
}
p{
  margin: 0;
  padding: 0;
}
</style>
