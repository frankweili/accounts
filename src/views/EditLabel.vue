<template>
  <Layout>
    <div><Icon name="left" /> <span>编辑标签</span></div>
    <Notes filename="标签" placeholder="请输入" />
  </Layout>
</template>

<script lang="ts">
import tagListModel from "@/tagListModel";
import Vue from "vue";
import Notes from "@/components/Money/Notes.vue";
import { Component } from "vue-property-decorator";

@Component
@Component({ components: { Notes } })
export default class EditLabel extends Vue {
  created() {
    const id = this.$route.params.id; // 获取地址栏中的id
    tagListModel.fetch();
    const tags = tagListModel.data;
    const tag = tags.filter((t) => t.id === id)[0];
    if (tag) {
      console.log(tag);
    } else {
      this.$router.replace("/404");
    }
  }
}
</script>

<style lang="scss" scoped>
</style>