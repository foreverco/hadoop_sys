<template>
  <div id="app">
    <!-- 头部导航 -->
    <router-view />
  </div>
</template>
<script>
// import HeaderNav from "@c/Header";
export default {
  name: "App",
  components: {
    // HeaderNav
  }
  // mounted: function() {
  //   //此方法刷新页面时也会执行
  //   window.addEventListener("beforeunload", () => {
  //     localStorage.removeItem("navIndex");
  //   });
  // }
};
</script>
<style lang="scss">
#app {
}
</style>
