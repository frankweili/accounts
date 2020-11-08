<template>
  <Layout>
    <div class="navBar">
      <Icon class="leftIcon" name="left" @click="goBack" />
      <span class="title">编辑标签</span>
      <span class="rightIcon"></span>
    </div>
    <div class="form-wrapper"></div>
    <FormItem
      @update:value="update"
      :value="tag.name"
      filename="标签"
      placeholder="请输入"
    />
    <div class="button-wrapper"><Button @click="remove">删除标签</Button></div>
  </Layout>
</template>

<script lang="ts">
import Button from "@/components/Button.vue";
import tagListModel from "@/tagListModel";
import Vue from "vue";
import FormItem from "@/components/Money/FormItem.vue";
import { Component } from "vue-property-decorator";

@Component
@Component({ components: { FormItem, Button } })
export default class EditLabel extends Vue {
  tag?: { id: string; name: string } = undefined;
  created() {
    const id = this.$route.params.id; // 获取地址栏中的id
    tagListModel.fetch();
    const tags = tagListModel.data;
    const tag = tags.filter((t) => t.id === id)[0];
    if (tag) {
      this.tag = tag;
    } else {
      this.$router.replace("/404");
    }
  }
  update(name: string) {
    if (this.tag) {
      tagListModel.update(this.tag.id, name);
    }
  }
  remove(id: string) {
    if (this.tag) {
      if (tagListModel.remove(this.tag.id)) {
        this.$router.back(); //返回到上一页}
      }
    }
  }
  goBack() {
    this.$router.back(); //返回到上一页
  }
}
</script>

<style lang="scss" scoped>
.button-wrapper {
  text-align: center;
  padding: 16px;
  margin-top: 44-16px;
}
.navBar {
  text-align: center;
  font-size: 16px;
  padding: 12px 16px;
  background: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  > .leftIcon {
    width: 24px;
    height: 24px;
  }
  > .rightIcon {
    width: 24px;
    height: 24px;
  }
  .form-wrapper {
    background: white;
    margin-top: 8px;
  }
}
</style>