<template>
    <Navbar/>
    <h1 class="heading">Study the Marks Data of {{ Actualdata.name }}</h1>
    <div class="ChartsDive">
        <Charts :option ="optionPie"/>
        <Charts :option ="optionLine"/>
        <!-- <ChartLine :Actualdata = "Actualdata"/> -->
    </div>
    
</template>

<script setup>
import { useRoute } from 'vue-router';
import Navbar from '../components/Navbar.vue';
import {ref, onMounted} from 'vue'
import Charts from '@/components/Charts.vue';
import ChartLine from '@/components/ChartLine.vue';


const route = useRoute();

const data = route.params.data;
const Actualdata = JSON.parse(data)
console.log(Actualdata);

const optionPie = ref({
  title: {
    text: `${Actualdata.name} Marks Pie Charts`,
    left: 'center',
  },
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b} : {c} ({d}%)',
  },
  legend: {
    orient: 'vertical',
    left: 'left',
    data: ['Maths', 'English', 'Science', 'History', 'Physical Education'],
  },
  series: [
    {
      name: `${Actualdata.name} Marks`,
      type: 'pie',
      radius: '55%',
      center: ['50%', '60%'],
      data: [
        { value: Actualdata.marks.Math, name: 'Maths' },
        { value: Actualdata.marks.English, name: 'English' },
        { value: Actualdata.marks.Science, name: 'Science' },
        { value: Actualdata.marks.History, name: 'History' },
        { value: Actualdata.marks.PhysicalEducation, name: 'Physical Education' },
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)',
        },
      },
    },
  ],
  })

  const optionLine = ref({
  title: {
    text: `${Actualdata.name} Marks Line Charts`,
    left: 'center',
  },
  tooltip: {
    trigger: 'item',
    // formatter: '{a} <br/>{b} : {c} ({d}%)',
  },
  xAxis: {
    type: 'category',
    data: ['Maths', 'English', 'Science', 'History', 'Physical Education']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      name: `${Actualdata.name} Marks`,
      type: 'line',
      radius: '55%',
      center: ['50%', '60%'],
      data: [
      Actualdata.marks.Math,
         Actualdata.marks.English,
         Actualdata.marks.Science,
         Actualdata.marks.History,
         Actualdata.marks.PhysicalEducation,
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)',
        },
      },
    },
  ],
  })

  function handleRedirect(event){
    console.log(event)
    return `<div>${Actualdata.name} Marks</br>
           <div style="width:10px; height:10px; background-color: #5470c6; border-radius: 50px"></div>
         </div>`
  }
</script>

<style>
.ChartsDive{
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(2,600px);
  gap: 50px;
  width: 80%;
  margin: 50px auto;
}
</style>