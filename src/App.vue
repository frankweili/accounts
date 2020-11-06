<template>
  <div id="app">
    <router-view />
    <!--把内容添加到这里面 -->
  </div>
</template>

<style lang="scss">
@import "~@/assets/style/reset.scss"; //引进这个组件scss组件
@import "~@/assets/style/helper.scss";

body {
  line-height: 1.5;
  font-family: $font-hei;
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #f5f5f5;
  color: #333;
}
</style>
