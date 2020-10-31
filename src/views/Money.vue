<template >
       <Layout class-prefix="layout">
            <div class="numberPad">
               <div class="output">100</div>
               <div class="buttons">
                   <button>1</button>
                   <button>2</button>
                   <button>3</button>
                   <button>删除</button>
                   <button>4</button>
                   <button>5</button>
                   <button>6</button>
                   <button>清空</button>
                   <button>7</button>
                   <button>8</button>
                   <button>9</button>
                   <button class="ok">ok</button>
                   <button class="zero">0</button>
                   <button>.</button>
               </div>
           </div>
         
           <div>
               <ul class="types">
               <li class="selected">支出</li>
               <li>收入</li>
           </ul>
           </div>
            <div>
               <label class="notes">
                   <span class="name">备注</span>
                   <input type="text" placeholder="在这里输入备注">
               </label>
           </div>
           <div  class="tags">
               
           <div class="new">
               <button>新增标签</button>
           </div>
           <ul class="current">
               <li>衣</li>
               <li>食</li>
               <li>住</li>
               <li>行</li>
            
           </ul>
           </div>
       </Layout>
   
</template>

<style lang="scss" >
.layout-content{
    display: flex;
    flex-direction: column-reverse;
}
</style>
<script lang="ts">
    export default {
        
    }
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.numberPad{
    .output{
        @extend %clearFix; //继承%cleraFix  相当于在buttons上面写了一个类clearfix
        @extend %innerShadow; // %innerShadow的样式内容在，helper.scss 中
        font-size: 36px;
        font-family: Consolas,monospace;  //等宽字体
        padding: 9px 16px ;
        text-align: right;
    }
    .buttons{
 @extend %clearFix; //继承%cleraFix  相当于在buttons上面写了一个类clearfix
     >button{
    width: 25%;
    height: 64px;
     background: transparent;
    border: none;
     &.ok{
    height: 64*2px;
    float: right;
}
    &.zero{
    width: 25*2%;
}
  $bh:#f2f2f2;
  &:nth-child(1){
  background: $bh;
}
&:nth-child(2),&:nth-child(5){
  background: darken($bh, 4%); // darken是加深的意思，整体是在$bh颜色的基础上，加深4%
}
&:nth-child(3),&:nth-child(6),&:nth-child(9){
  background: darken($bh, 4*2%); 
}
&:nth-child(4),&:nth-child(7),&:nth-child(10),&:nth-child(13){
  background: darken($bh, 4*3%); 
}
&:nth-child(8),&:nth-child(11){
  background: darken($bh, 4*4%); 
}
&:nth-child(14){
  background: darken($bh, 4*5%); 
}
&:nth-child(12){
  background: darken($bh, 4*6%); 
}

}  

    }
}
.types{
    background: #c4c4c4;
    font-size: 24px;
    display: flex;
    text-align: center;
    li{height: 64px;
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;;
        &.selected::after{
            content: '';
            position:absolute;
            bottom: 0;
            left: 0;
width: 100%;
height: 4px;
background:#333
        };
    }
}
.notes{
   
    font-size: 14px;
    padding-left: 16px;
   
    background: #f5f5f5;
     display: flex;
    align-items: center;
    >.name{
        padding-right: 16px;
    }
    input{
        height: 64px;
        flex-grow: 1;
        padding-right: 16px;
        background: transparent;
        border:none
    }
}
.tags{
    
    font-size: 14px;
    padding: 16px;
    flex-grow: 1;
    display: flex;
    flex-direction: column-reverse;
    >.current{
    display: flex;
    flex-wrap: wrap;
        >li{
      background:#d9d9d9;
    $h:24px;
    height: $h;
      line-height: $h;
    border-radius:$h/2;
  padding: 0 16px;
     margin-right: 12px;
        }
    }
    >.new{
        padding-top: 16px;
        
        button{
            background: transparent;
           border: none;
           color: #999;
           border-bottom: 1px solid;
           padding:0 4px;
        }
    }
}
</style>