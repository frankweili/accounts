<template>
  <div class="numberPad">
    <div class="output">{{ output }}</div>
    <div class="buttons">
      <button @click="inputContent">1</button>
      <button @click="inputContent">2</button>
      <button @click="inputContent">3</button>
      <button @click="remove">删除</button>
      <button @click="inputContent">4</button>
      <button @click="inputContent">5</button>
      <button @click="inputContent">6</button>
      <button @click="clear">清空</button>
      <button @click="inputContent">7</button>
      <button @click="inputContent">8</button>
      <button @click="inputContent">9</button>
      <button class="ok" @click="ok">ok</button>
      <button class="zero" @click="inputContent">0</button>
      <button @click="inputContent">.</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class NumberPad extends Vue {
  output = "0";

  inputContent(event: MouseEvent) {
    const button = event.target as HTMLButtonElement; //强制将event.target  作为按钮元素   as HTMLButtonElement
    const input = button.textContent!; //button.textContent  按钮里面的内容
    //event.target.textContent  可以直接代替函数内传参数，函数可以不需要直接传参数，可以减少代码  例如： 否则就得@click="inputContent('1')"
    if (this.output.length === 16) {
      return;
    }
    if (this.output === "0") {
      if ("0123456789".indexOf(input) >= 0) {
        this.output = input;
      } else {
        this.output += input;
      }
      return;
    }
    if (this.output.indexOf(".") >= 0) {
      if (input === ".") {
        return;
      }
    }
    this.output += input;
  }
  clear() {
    this.output = "0";
  }
  remove() {
    if (this.output.length === 1) {
      this.output = "0";
    } else {
      this.output = this.output.slice(0, -1); //意思是减掉一个
    }
  }
  ok() {
    this.$emit("update:value", this.output);
    this.$emit("submit", this.output);
    this.output = "0";
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.numberPad {
  .output {
    @extend %clearFix; //继承%cleraFix  相当于在buttons上面写了一个类clearfix
    @extend %innerShadow; // %innerShadow的样式内容在，helper.scss 中
    font-size: 36px;
    font-family: Consolas, monospace; //等宽字体
    padding: 9px 16px;
    text-align: right;
    height: 72px;
  }
  .buttons {
    @extend %clearFix; //继承%cleraFix  相当于在buttons上面写了一个类clearfix
    > button {
      width: 25%;
      height: 64px;
      background: transparent;
      border: none;
      &.ok {
        height: 64 * 2px;
        float: right;
      }
      &.zero {
        width: 25 * 2%;
      }
      $bh: #f2f2f2;
      &:nth-child(1) {
        background: $bh;
      }
      &:nth-child(2),
      &:nth-child(5) {
        background: darken(
          $bh,
          4%
        ); // darken是加深的意思，整体是在$bh颜色的基础上，加深4%
      }
      &:nth-child(3),
      &:nth-child(6),
      &:nth-child(9) {
        background: darken($bh, 4 * 2%);
      }
      &:nth-child(4),
      &:nth-child(7),
      &:nth-child(10),
      &:nth-child(13) {
        background: darken($bh, 4 * 3%);
      }
      &:nth-child(8),
      &:nth-child(11) {
        background: darken($bh, 4 * 4%);
      }
      &:nth-child(14) {
        background: darken($bh, 4 * 5%);
      }
      &:nth-child(12) {
        background: darken($bh, 4 * 6%);
      }
    }
  }
}
</style>