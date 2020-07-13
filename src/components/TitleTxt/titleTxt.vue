<template>
  <div class="titleTxt">
    {{ titleTxt }}
  </div>
</template>
<script>
export default {
  name: "titleTxt",
  props: {
    titleTxt: {
      type: String,
      default: () => ""
    }
  }
};
</script>
<style lang="scss" scoped>
.titleTxt {
  font-size: $titlesize;
  color: #ffffff;
  // border: 3px solid red;
  border: 4px solid transparent;
  border-left: 4px solid $maincolor;
  display: flex;
  align-items: center;
  padding-top: -2px;
  padding-bottom: -2px;
  padding-left: 8px;
  letter-spacing: 4px;
}
</style>
