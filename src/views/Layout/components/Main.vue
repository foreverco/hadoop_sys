<template>
  <div id="mainContent">
    <div class="content">
      <!-- <Title titleTxt="地区虫情预警"></Title> -->
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "mainContent",
  data() {
    return {};
  }
};
</script>
<style lang="scss">
#mainContent {
  // border: 1px solid red;
  height: calc(100vh - 80px);
  display: flex;
  align-items: center;
  justify-content: center;
  .content {
    width: 96%;
    height: 97%;
    // border: 1px solid red;
    box-sizing: border-box;
  }
}
</style>
