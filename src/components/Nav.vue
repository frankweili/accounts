<template>
    <nav>
 <router-link to="/money" class="item" active-class="selected">   <!--此标签会跳转到money路径的页面-->
 <Icon name="money" />
 记账
 </router-link>
   <router-link to="/labels" class="item" active-class="selected">
  <Icon name="label" />
   标签
   </router-link>
   <router-link to="/statistics" class="item" active-class="selected">
   <Icon name="Statistics" />
   统计
   </router-link>
  
    </nav>
</template>

<script lang="ts">

    export default{
        name:'Nav'
    }
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
nav{
   @extend %outerShadow; //继承  %outerShadow    内容在helper.scss;中
    display:flex;
    flex-direction: row;
    
    font-size: 12px;
   > .item{
       padding: 2px 0;
       width: 33.33333%;
display: flex;
flex-direction: column;
align-items: center;
  .icon {
    width: 32px;
    height: 32px;
}
}
> .item.selected{
    color:$color-highlight;
}
}
</style>