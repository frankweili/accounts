<template>
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
</template>

<script>
    export default {
        name:'NUmberPad'
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
</style>