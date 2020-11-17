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

import { Component } from "vue-property-decorator";
import { mixins } from "vue-class-component";
import TagHelper from "@/mixins/TagHelper";

@Component({
  components: { Button },
})
export default class Labels extends mixins(TagHelper) {
  get tags() {
    return this.$store.state.tagList;
  }
  beforeCreate() {
    this.$store.commit("fetchTags");
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
  border-radius: 20px;
  background: #7A8B8B;
  font-size: 16px;
  padding-left: 16px;
  > .tag {
    border-radius: 10px;
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