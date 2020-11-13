<template>
  <Layout>
    <Tabs class-prefix="type" :dataSource="recordTypeList" :value.sync="type" />
    <Tabs
      class-prefix="interval"
      :dataSource="intervalList"
      :value.sync="interval"
    />
    <div>
      type:{{ type }}
      <br />
      interval:{{ interval }}
    </div>
  </Layout>
</template>

<style lang="scss" scoped>
::v-deep .type-tabs-item {
  background: white;
  &.selected {
    background: #C4C4C4;
    &::after {
      display: none;
    }
  }
}
</style>
<script lang="ts">
import Tabs from "@/components/Tabs.vue";
import Vue from "vue";
import { Component } from "vue-property-decorator";
import recordTypeList from "@/constant/recordTypeList.ts";
import intervalList from "@/constant/intervalList.ts";
@Component({
  components: { Tabs },
})
export default class Statistics extends Vue {
  type = "-";
  interval = "day";
  intervalList = intervalList;
  recordTypeList = recordTypeList;
}
</script>