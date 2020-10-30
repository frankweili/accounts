<template>
    <div class="wrapper">
 <div class="content">
     <slot>
     </slot>
       <!--此标签会把写在  <Layout>
 </Layout>里面的内容自动传进来-->
 </div>
 <Nav />
    </div>
</template>

<script lang="ts">
    export default {
        
    }
</script>

<style lang="scss" scoped>
.wrapper{
    display: flex;
    flex-direction: column;
   
    height: 100vh;    //撑起整个页面
}
.content{
    overflow:auto;
  
    flex-grow: 1;   //占据整部分
}
</style>