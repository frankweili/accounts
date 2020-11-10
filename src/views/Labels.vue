<template>
  <div>
    <Layout>
      <div class="tags">
        <router-link
          :to="`/labels/edit/${tag.id}`"
          class="tag"
          v-for="tag in tags"
          :key="tag.id"
        >
          {{ tag.name }} <Icon name="right" />
        </router-link>
      </div>
      <div class="createTag-wrapper">
        <Button class="createTag" @click="createTag">新增标签</Button>
      </div>
    </Layout>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Button from "@/components/Button.vue";
import tagListModel from "@/models/tagListModel";
import { Component } from "vue-property-decorator";

@Component({ components: { Button } })
export default class Labels extends Vue {
  tags = window.tagList;

  createTag() {
    const name = window.prompt("请输入");
    if (name) {
      const message = tagListModel.create(name);
      if (message === "duplicated") {
        window.alert("标签重复");
      } else if (message === "success") {
        window.alert("添加成功");
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.createTag-wrapper {
  text-align: center;
  padding: 16px;
  margin-top: 44-16px;
}
.tags {
  background: white;
  font-size: 16px;
  padding-left: 16px;
  > .tag {
    min-height: 44px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #e6e6e6;
    svg {
      width: 18px;
      height: 18px;
      color: #666;
      margin-right: 16px;
    }
  }
}
</style>