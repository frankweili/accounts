<template >
  <Layout class-prefix="layout">
    <NumberPad @update:value="onUpdateAmount" @submit="saveRecord" />
    <Types :value.sync="record.type" />
    <div class="notes">
      <FormItem
        @update:value="onUpdateFormItem"
        filename="备注"
        placeholder="请输入备注"
      />
    </div>
    <Tags />
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
import FormItem from "@/components/Money/FormItem.vue";

import { Component } from "vue-property-decorator";
import store from "@/store/index2.ts";

window.localStorage.setItem("version", "0.0.1"); //设置的localstorage的版本号

@Component({ components: { NumberPad, Types, Tags, FormItem } })
export default class Money extends Vue {
  recordList: RecordItem[] = store.recordList;
  //创建一个数组，将record放进去，之后在存到localStorage上,并设置初始值，初始值有可能为空
  record: RecordItem = {
    tags: [],
    notes: "",
    type: "-",
    amount: 0,
    createdAt: undefined,
  }; //初始化，
  onUpdateAmount(value: string) {
    this.record.amount = parseFloat(value);
    //子组件传入的数据，放到record上    parseFloat()函数解析一个参数（必要时先转换为字符串）并返回一个浮点数
  }
  onUpdateFormItem(value: string) {
    this.record.notes = value; //子组件传入的数据，放到record上
  }
  saveRecord() {
    store.createRecord(this.record);
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.notes {
  padding: 12px 0;
}
</style>