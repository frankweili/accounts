<template >
  <Layout class-prefix="layout">
    <NumberPad @update:value="onUpdateAmount" />
    <Types @update:value="onUpdateTypes" />
    <Notes @update:value="onUpdateNotes" />
    <Tags :data-source.sync="tags" @update:value="onUpdateTags" />
    {{ record }}
  </Layout>
</template>

<style lang="scss" >
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>
<script lang="ts">
import Vue from "vue";
import NumberPad from "@/components/Money/NumberPad.vue";
import Types from "@/components/Money/Types.vue";
import Tags from "@/components/Money/Tags.vue";
import Notes from "@/components/Money/Notes.vue";
import { component } from "vue/types/umd";
import { Component } from "vue-property-decorator";

type Record = {
  tags: string[];
  notes: string;
  type: string;
  amount: number;
}; //声明类型

@Component({ components: { NumberPad, Types, Tags, Notes } })
export default class Money extends Vue {
  tags = ["衣", "食", "住", "行"];
  record: Record = {
    tags: [],
    notes: "",
    type: "-",
    amount: 0,
  }; //初始化，
  onUpdateAmount(value: string) {
    this.record.amount = parseFloat(value); //子组件传入的数据，放到record上    parseFloat()函数解析一个参数（必要时先转换为字符串）并返回一个浮点数
  }
  onUpdateNotes(value: string) {
    this.record.notes = value; //子组件传入的数据，放到record上
  }
  onUpdateTypes(value: string) {
    this.record.type = value; //子组件传入的数据，放到record上
  }
  onUpdateTags(value: string[]) {
    this.record.tags = value; //子组件传入的数据，放到record上
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
</style>