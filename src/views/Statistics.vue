<template>
  <Layout>
    <Tabs class-prefix="type" :dataSource="recordTypeList" :value.sync="type" />
    <Tabs
      class-prefix="interval"
      :dataSource="intervalList"
      :value.sync="interval"
    />

    <ol>
      <li v-for="group in result" :key="group.title">
        <h3>{{ beautify(group.title) }}</h3>
        <ol>
          <li v-for="item in group.items" :key="item.id" class="record">
            <span> {{ tagString(item.tags) }} </span>
            <span class="notes"> {{ item.notes }} </span>
            <span> ￥{{ item.amount }} </span>
          </li>
        </ol>
      </li>
    </ol>
  </Layout>
</template>


<script lang="ts">
import Tabs from "@/components/Tabs.vue";
import Vue from "vue";
import { Component } from "vue-property-decorator";
import recordTypeList from "@/constant/recordTypeList.ts";
import intervalList from "@/constant/intervalList.ts";
import dayjs from "dayjs";

@Component({
  components: { Tabs },
})
export default class Statistics extends Vue {
  tagString(tags: Tag[]) {
    return tags.length === 0 ? "无" : tags.join(".");
  }
  beautify(string: string) {
    const day = dayjs(string);
    const now = dayjs();
    if (day.isSame(now, "day")) {
      return "今天";
    } else if (day.isSame(now.subtract(1, "day"), "day")) {
      return "昨天";
    } else if (day.isSame(now.subtract(2, "day"), "day")) {
      return "前天";
    } else if (day.isSame(now, "year")) {
      return day.format("M月D日");
    } else {
      return day.format("YYYY年M月D日");
    }
  }
  get recordList() {
    return (this.$store.state as RootState).recordList;
  }
  get result() {
    const { recordList } = this;
    type HashTableValue = { title: string; items: RecordList[] };
    const hashTable: { [key: string]: HashTableValue } = {};
    for (let i = 0; i < recordList.length; i++) {
      const [date, time] = recordList[i].createdAt!.split("T");
      console.log(date);
      hashTable[date] = hashTable[date] || { title: date, items: [] };
      hashTable[date].items.push(recordList[i]);
    }

    return hashTable;
  }
  beforeCreate() {
    this.$store.commit("fetchRecords");
  }
  type = "-";
  interval = "day";
  intervalList = intervalList;
  recordTypeList = recordTypeList;
}
</script>
<style lang="scss" scoped>
%item {
  padding: 8px 16px;
  line-height: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.title {
  @extend %item;
}
.record {
  background: white;
  @extend %item;
}
.notes {
  margin-right: atuto;
  margin-left: 16px;
  color: #999;
}
::v-deep .interval-tabs-item {
  height: 48px;
}
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
