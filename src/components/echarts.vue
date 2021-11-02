<template>
     <div id="echarts">
        <div id="myPieEchart" style="height:400px;width:100%;">
        </div>
     </div>
</template>

<script>
// 引入基本模板
let echarts = require ( 'echarts/lib/echarts');
// 引入饼图
require("echarts/lib/chart/pie");
// 引入提示框
require('echarts/lib/component/tooltip');
// 引入标题
require('echarts/lib/component/title');
export default {
    name: 'myCharts',
    props:{
      title:Object,
      pieChartData:Array
    },
    computed:{
       myChart(){
           return echarts.init(document.getElementById("myPieEchart"));
       }  
    },
    data() {
        return {
            
        };
    },
    mounted(){
      this.drawLine();
    },
    created(){
      console.log("title",this.title);
      console.log("pieChartData",this.pieChartData)
    },
    methods: {
        drawLine(){
           this.myChart.setOption({
                series:{ 
                    center:['50%','50%'],
                    type:'pie',
                    radius:'55%',
                    
                    data:this.pieChartData,
                },
                title:{ 
                        text:this.title.text,
                        subtext:this.title.subtext,
                        left:"center",
                        } ,
                itemStyle:{
                    emphasis:{
                        shadowBlur:10,
                        shadowOffsetX:0,
                        shadowColor:'rgba(0,0,0,0.5)'
                    }
                }
            })
        }
    },
   
    components: {},
    watch:{
        PieData:{
          handler(newVal,val){
              this.data = newVal;
              this.drawLine();
          },
          deep:true
        }
    }
};
</script>

<style>
</style>