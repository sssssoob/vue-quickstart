<template>
  <div class="main test">
    {{msg}}
 <child-eleven></child-eleven>
    {{msg}}
  </div>
</template>

<script>
import ChildEleven from "@/components/Child11";

export default {
  name: "child-one",
  components: {ChildEleven},
  data () {
    return {
      msg : "child1"
    }
  }
}
</script>

<style scoped>
  .main { border: solid 1px black; background-color: yellow;}
  .test { padding: 10px; text-decoration: underline; border: solid 1px black; }
</style>