<template>
  <div id="app">
    <h2>{{msg}}</h2>
    <child1></child1>
    <child2></child2>
    <module-one></module-one>
  </div>
</template>

<script>
import child1 from "@/components/Child1";
import child2 from "@/components/Child2";
import ModuleOne from "@/components/Module1";

export default {
  name: 'App',
  components: {
    ModuleOne,
    child1,
    child2
  },
  data () {
    return {
      msg : "welcome to your vue.js app"
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
