<template>
  <div>
    <button :class="$style.hand">CSS Module을 적용한 버튼</button>
  </div>
</template>

<script>
export default {
  name: "module-one",
  created () {
    console.log(this.$style);
  }
}
</script>

<style module>
  .hand { cursor: pointer; background-color: purple; color: yellow; }
</style>