<template>
    <div ref="chartRef" class="LineChart"></div>
  </template>

<script lang="ts" setup>
import { ref, onMounted, defineProps } from 'vue';
import * as echarts from 'echarts';

const chartRef = ref<HTMLElement | null>(null);
const props = defineProps<{ option: any, Actualdata : any }>();
// const option = ref(props.option);
const Actualdata = ref(props.Actualdata)
console.log(Actualdata.value, "line")
// console.log(option)
const symbolSize = 5;
// const Actualdata = {
//   name: 'John',
//   marks: {
//     Math: 80,
//     English: 85,
//     Science: 90,
//     History: 70,
//     PhysicalEducation: 95,
//   }
// };
const data: [number, number][] = [
  [0, Actualdata.value.marks.Math],
  [1, Actualdata.value.marks.English],
  [2, Actualdata.value.marks.Science],
  [3, Actualdata.value.marks.History],
  [4, Actualdata.value.marks.PhysicalEducation]
];

const seriesData = [
  Actualdata.value.marks.Math,
  Actualdata.value.marks.English,
  Actualdata.value.marks.Science,
  Actualdata.value.marks.History,
  Actualdata.value.marks.PhysicalEducation,
];

const Option = {
  title: {
    text: `${Actualdata.value.name} Marks Line Charts`,
    left: 'center'
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      animation: false
    }
  },
  legend: {
    data: ['Marks'],
    left: 10
  },
  toolbox: {
    feature: {
      dataZoom: {
        yAxisIndex: 'none'
      },
      restore: {},
      saveAsImage: {}
    }
  },
  axisPointer: {
    link: [
      {
        xAxisIndex: 'all'
      }
    ]
  },
  dataZoom: [
    {
      show: true,
      realtime: true,
      start: 30,
      end: 70,
      xAxisIndex: [0, 1]
    },
    {
      type: 'inside',
      realtime: true,
      start: 30,
      end: 70,
      xAxisIndex: [0, 1]
    }
  ],
  grid: [
    {
      left: 60,
      right: 50,
      height: '35%'
    },
    {
      left: 60,
      right: 50,
      top: '55%',
      height: '35%'
    }
  ],
  xAxis: [
    {
      type: 'category',
      boundaryGap: false,
      axisLine: { onZero: true },
      data: data
    },
    {
      gridIndex: 1,
      type: 'category',
      boundaryGap: false,
      axisLine: { onZero: true },
      data: data,
      position: 'top'
    }
  ],
  yAxis: [
    {
      name: 'Evaporation(m³/s)',
      type: 'value',
      max: 500
    },
    {
      gridIndex: 1,
      name: 'Rainfall(mm)',
      type: 'value',
      inverse: true
    }
  ],
  series: [
    {
      name: 'Marks',
      type: 'line',
      symbolSize: 8,
      // prettier-ignore
      data: seriesData
    }
  ]
};

onMounted(() => {
  if (chartRef.value) {
    const myChart = echarts.init(chartRef.value);
    myChart.setOption(Option);
  }
});

</script>

<style>
.LineChart{
    background-color: white;
    padding: 20px;
    border-radius: 10px;
  }
</style>