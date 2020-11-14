<template>
  <div>
    <label class="notes">
      <span class="name">{{ filename }}</span>
      <input
        type="text"
        :placeholder="this.placeholder"
        :value="value"
        @input="onValueChange($event.target.value)"
      />
      <!--  可以用v-model="value"代替以上两行代码   意思是:value="X" @input="X=$event.target.value"   -->
    </label>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop, Watch } from "vue-property-decorator";

@Component
export default class FormItem extends Vue {
  @Prop({ default: "" }) readonly value!: string;
  @Prop({ required: true }) filename!: string;
  @Prop() placeholder!: string;
  // inPut(event: KeyboardEvent) {
  // const input = event.target as HTMLInputElement;
  //this.value = input.value;
  //}

  onValueChange(value: string) {
    this.$emit("update:value", value);
  }
}
</script>

<style lang="scss" scoped>
.notes {
  font-size: 14px;
  padding-left: 16px;

  display: flex;
  align-items: center;
  > .name {
    padding-right: 16px;
  }
  input {
    height: 40px;
    flex-grow: 1;
    padding-right: 16px;
    background: transparent;
    border: none;
  }
}
</style>