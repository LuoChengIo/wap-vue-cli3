<template>
  <div class="home test aspect-box">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld
  }
};
</script>
<style lang="postcss" scoped>
.test {
  font-size: 12px;
  transform: translateX(0);
}
</style>
