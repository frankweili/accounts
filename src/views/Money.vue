<template >
  <Layout class-prefix="layout">
    <NumberPad @update:value="onUpdateAmount" @submit="saveRecord" />
    <Types :value.sync="record.type" />
    <Notes @update:value="onUpdateNotes" />
    <Tags :data-source.sync="tags" @update:value="onUpdateTags" />
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
import { Component, Watch } from "vue-property-decorator";
import tagListModel from "@/tagListModel";

window.localStorage.setItem("version", "0.0.1"); //设置的localstorage的版本号

const tagList = tagListModel.fetch();
console.log(tagList);

type RecordItem = {
  tags: string[];
  notes: string;
  type: string;
  amount: number;
  createAt: Date | undefined; //类
}; //声明类型

@Component({ components: { NumberPad, Types, Tags, Notes } })
export default class Money extends Vue {
  tags = tagList; //["衣", "食", "住", "行"];
  recordList: RecordItem[] = JSON.parse(
    window.localStorage.getItem("recordList") || "[]"
  );
  //创建一个数组，将record放进去，之后在存到localStorage上,并设置初始值，初始值有可能为空
  record: RecordItem = {
    tags: [],
    notes: "",
    type: "-",
    amount: 0,
    createAt: undefined,
  }; //初始化，
  onUpdateAmount(value: string) {
    this.record.amount = parseFloat(value);
    //子组件传入的数据，放到record上    parseFloat()函数解析一个参数（必要时先转换为字符串）并返回一个浮点数
  }
  onUpdateNotes(value: string) {
    this.record.notes = value; //子组件传入的数据，放到record上
  }

  onUpdateTags(value: string[]) {
    this.record.tags = value; //子组件传入的数据，放到record上
  }
  saveRecord() {
    const record2 = JSON.parse(JSON.stringify(this.record)); //可以避免放到recordlist中的东西，被覆盖
    record2.createAt = new Date(); //设置一个当前时间
    this.recordList.push(record2);
  }
  @Watch("recordList") //监听recordLIst的变化
  onRecordListChange() {
    window.localStorage.setItem("recordList", JSON.stringify(this.recordList));
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
</style>