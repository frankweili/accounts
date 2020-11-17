<template >
  <Layout class-prefix="layout">
    <NumberPad @update:value="onUpdateAmount" @submit="saveRecord" />

    <Tabs :dataSource="recordTypeList" :value.sync="record.type" />
    <div class="notes">
      <FormItem
        :value.sync="record.notes"
        filename="备注 :"
        placeholder="请输入备注"
      />
    </div>
    <Tags @update:value="record.tags = $event" />
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
import Tabs from "@/components/Tabs.vue";
import Tags from "@/components/Money/Tags.vue";
import FormItem from "@/components/Money/FormItem.vue";
import recordTypeList from "@/constant/recordTypeList";

import { Component } from "vue-property-decorator";

window.localStorage.setItem("version", "0.0.1"); //设置的localstorage的版本号

@Component({
  components: { NumberPad, Tabs, Tags, FormItem },
})
export default class Money extends Vue {
  //创建一个数组，将record放进去，之后在存到localStorage上,并设置初始值，初始值有可能为空

  get recordList() {
    return this.$store.state.recordList;
  }
  recordTypeList = recordTypeList;
  record: RecordItem = {
    tags: [],
    notes: "",
    type: "-",
    amount: 0,
  }; //初始化，
  created() {
    this.$store.commit("fetchRecords");
  }
  onUpdateAmount(value: string) {
    this.record.amount = parseFloat(value);
    //子组件传入的数据，放到record上    parseFloat()函数解析一个参数（必要时先转换为字符串）并返回一个浮点数
  }
  onUpdateFormItem(value: string) {
    this.record.notes = value; //子组件传入的数据，放到record上
  }
  saveRecord() {
    if (!this.record.tags || this.record.tags.length === 0) {
      return window.alert("请至少选择一个标签");
    }
    this.$store.commit("createRecord", this.record);
    if (this.$store.state.createRecordError === null) {
      window.alert("已保存");
      this.record.notes = "";
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.notes {
  padding: 12px 0;
}
</style>