<template>
    <h1 class="heading">Student Marks Table</h1>

    <div id="Toggle">
      <p>{{ isToggled ? 'Show only Total Marks' : 'Show Subject Marks' }}</p>
      <label class="switch">
      <input type="checkbox" v-model="isToggled">
      <span class="slider"></span>
    </label> 
    </div>
       
  <ag-grid-vue 
   :rowData="rowData"
   :columnDefs="colDefs"
   class="ag-theme-quartz"
   :pagination="pagination"
    :paginationPageSize="paginationPageSize"
    :paginationPageSizeSelector="paginationPageSizeSelector"
    @row-double-clicked="GoToChartPage"
    domLayout="autoHeight"
 ></ag-grid-vue>
</template>

<script setup lang="ts">
import { ref, defineProps, onMounted, watch } from 'vue';
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the Data Grid
import { AgGridVue } from "ag-grid-vue3"; // Vue Data Grid Component
import { useRouter } from 'vue-router';

const Props = defineProps({rowData : Array, colDefs: Array});
const rowData = Props.rowData;
const excludeMarks = ref([
   { field: "name", filter:true, floatingFilter: true, flex: 2 },
   { field: "grade", flex: 2 },
   {headerName: "Total Marks", valueGetter: (p : any)=>p.data.marks.Math + p.data.marks.English + p.data.marks.Science + p.data.marks.History + p.data.marks.PhysicalEducation,
   cellClassRules: {
        // apply green to electric cars
        'rag-green': (params : any) => params.value >= 440,
    }, flex: 2
   }
 ]);

 let colDefs : any = ref(excludeMarks);


 const pagination = true;
const paginationPageSize = 10;
const paginationPageSizeSelector = [10, 20, 25];

const router = useRouter()

function GoToChartPage(event:any){
  router.push({ name: 'charts', params : { data: JSON.stringify(event.data) } });
}

const isToggled = ref(false)

onMounted(()=>{
})
watch(isToggled,()=>{
  if(isToggled.value == true){
     colDefs = Props.colDefs
  }else if(isToggled.value == false){
    colDefs = excludeMarks
  }
})
</script>

<style >
.heading{
  font-family: Avenir, Helvetica, Arial, sans-serif;
  margin-top: 100px;
  color: #3D52A0;
  text-align: center;
}

.ag-theme-quartz{
  width: 85vw;
  margin: auto;
  /* Changes the color of the grid text */
  --ag-foreground-color: rgb(14, 68, 145);
      /* Changes the color of the grid background */
      --ag-background-color: rgb(241, 247, 255);
      /* Changes the header color of the top row */
      --ag-header-background-color: rgb(228, 237, 250);
      /* Changes the hover color of the row*/
      --ag-row-hover-color: rgb(216, 226, 255);
}

.rag-green {
  background-color: #33cc3344;
}
#Toggle{
width: 85vw;
display: flex;
margin: auto;
justify-content: end;
column-gap: 10px;
}

#Toggle>p{
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #3D52A0;
  font-size: 25px;
}

/* Basic styling for the switch toggle */
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: 0.4s;
  border-radius: 34px;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  transition: 0.4s;
  border-radius: 50%;
}

input:checked + .slider {
  background-color: rgb(14, 68, 145);
}

input:checked + .slider:before {
  transform: translateX(26px);
}
</style>