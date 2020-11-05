<template>
  <div>
    <label class="notes">
      {{ value }}
      <span class="name">备注</span>
      <input
        type="text"
        placeholder="在这里输入备注"
        :value="value"
        @input="inPut"
      />
      <!--  可以用v-model="value"代替以上两行代码   意思是:value="X" @input="X=$event.target.value"   -->
    </label>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Watch } from "vue-property-decorator";

@Component
export default class Notes extends Vue {
  value = "";
  inPut(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;
    this.value = input.value;
  }
  @Watch("value")
  onValueChange(value: string) {
    this.$emit("update:value", value);
  }
}
</script>

<style lang="scss" scoped>
.notes {
  font-size: 14px;
  padding-left: 16px;

  background: #f5f5f5;
  display: flex;
  align-items: center;
  > .name {
    padding-right: 16px;
  }
  input {
    height: 64px;
    flex-grow: 1;
    padding-right: 16px;
    background: transparent;
    border: none;
  }
}
</style>