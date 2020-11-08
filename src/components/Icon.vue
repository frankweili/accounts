<template>
  <svg class="icon" @click="$emit('click', $event)">
    <use :xlink:href="'#' + name" />
  </svg>
  <!--此标签会引用svg格式的图片      <use xlink:href="#money"/>中的money是路径money.svg   必须+# -->
</template>

<script lang="ts">
const importAll = (requireContext: __WebpackModuleApi.RequireContext) =>
  requireContext.keys().forEach(requireContext);
try {
  importAll(require.context("../assets/icons", true, /\.svg$/));
} catch (error) {
  console.log(error);
} //以上几行代码可以实现将一个目录中的任意后缀文件全部引入到当前文件
export default {
  name: "Icon",
  props: ["name"],
};
</script>

<style lang="scss" scoped>
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>