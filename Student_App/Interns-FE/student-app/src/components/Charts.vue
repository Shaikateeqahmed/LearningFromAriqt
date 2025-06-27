<template>
    <div ref="myChart" class="PieChart"></div>
  </template>
  
  <script lang="ts" setup>
  import {ref, onMounted, defineProps } from 'vue'
  import * as echarts from 'echarts';
  
  const myChart = ref(null);
  const props = defineProps({option: Object});
  const option : any = props.option
  console.log(option)

  
  onMounted(()=>{
   
  if(myChart.value){
    const myEchart = echarts.init(myChart.value);
  
   
    myEchart.setOption(option);
  }
  })
  
  
  </script>

  <style>
  .PieChart{
    background-color: white;
    padding: 20px;
    border-radius: 10px;
  }
  </style>