<template>
  <div class="layout-wrapper" :class="classPrefix && `${classPrefix}-wrapper`">
    <div class="content" :class="classPrefix && `${classPrefix}-content`">
      <slot />
      <!--此标签会把写在  <Layout>
 </Layout>里面的内容自动传进来-->
    </div>
    <Nav />
  </div>
</template>

<script lang="ts">
export default {
  name: "Layout",
  props: ["classPrefix"],
};
</script>

<style lang="scss" scoped>
.layout-wrapper {
  display: flex;
  flex-direction: column;

  min-height: 100vh; //撑起整个页面
}
.content {
  overflow: auto;

  flex-grow: 1; //占据整部分
}
</style>