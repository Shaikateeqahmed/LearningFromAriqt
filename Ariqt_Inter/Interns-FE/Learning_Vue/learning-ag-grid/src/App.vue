<template>
  <ag-grid-vue
   :rowData="rowData"
   :columnDefs="colDefs"
   :domLayout="'autoHeight'"
   style=" width: 810px;"
   class="ag-theme-quartz"
   :rowSelection="rowSelection"
   :pagination="pagination"
   :paginationPageSize="paginationPageSize"
   :paginationPageSizeSelector="paginationPageSizeSelector"
   :rowClassRules="rowClassRules"
 >
 </ag-grid-vue>
  <router-view/>
</template>

<script setup>
import { ref, defineComponent } from 'vue';
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the Data Grid
import { AgGridVue } from "ag-grid-vue3"; // Vue Data Grid Component
import CustomButton from './components/CustomButton.vue';
 // Row Data: The data to be displayed.
 const rowData = ref([
   { make: "Tesla", model: "Model Y", price: 64950, electric: true },
   { make: "Ford", model: "F-Series", price: 33850, electric: false },
   { make: "Toyota", model: "Corolla", price: 29600, electric: false },
   { make: 'Mercedes', model: 'EQA', price: 48890, electric: true },
   { make: 'Fiat', model: '500', price: 15774, electric: false },
   { make: 'Nissan', model: 'Juke', price: 20675, electric: false },
 ]);

const pagination = true;
const paginationPageSize = 3;
const paginationPageSizeSelector = [3, 4, 5,6];

 // Column Definitions: Defines the columns to be displayed.
//  const colDefs = ref([
//    { field: "make" },
//    { field: "model" },
//    { field: "price" },
//    { field: "electric" }
//  ]);


// ValueGetter
// const colDefs = ref([
//    {headerName : "Make & Model", valueGetter: (p)=> p.data.make+" "+p.data.model},
//    { field: "price" },
//    { field: "electric" }
//  ]);

 // ValueGetter and valueFormatter
//  const colDefs = ref([
//    {headerName : "Make & Model", valueGetter: (p)=> p.data.make+" "+p.data.model},
//    { field: "price", valueFormatter: p => '£' + p.value.toLocaleString() },
//    { field: "electric" }
//  ]);

//  // ValueGetter and valueFormatter and Cell components
//  const colDefs = ref([
//    {headerName : "Make & Model", valueGetter: (p)=> p.data.make+" "+p.data.model},
//    { field: "price", valueFormatter: p => '£' + p.value.toLocaleString() },
//    { field: "electric" },
//    { field: "button", cellRenderer: CustomButton },
//  ]);

 // ValueGetter and valueFormatter and Cell components and resizing columns
//  const colDefs = ref([
//    {headerName : "Make & Model", valueGetter: (p)=> p.data.make+" "+p.data.model, flex:3},
//    { field: "price", valueFormatter: p => '£' + p.value.toLocaleString(), flex:1 },
//    { field: "electric", flex:1 },
//    { field: "button", cellRenderer: CustomButton, flex:1 },
//  ]);

//filtering
// const colDefs = ref([
//     { field: "make", filter:true },
//    { field: "model", filter:true },
//    { field: "price", filter:true },
//    { field: "electric", filter:true }
// ])

// //filtering and floating filters
// const colDefs = ref([
//     { field: "make", filter:true, floatingFilter:true },
//    { field: "model", filter:true, floatingFilter:true },
//    { field: "price", filter:true, floatingFilter:true },
//    { field: "electric", filter:true, floatingFilter:true }
// ])

// //Editing
// const colDefs = ref([
//    { field: "make", editable:true },
//    { field: "model" },
//    { field: "price" },
//    { field: "electric" }
//  ]);

// //Editing and cellEditor
// const colDefs = ref([
//    { field: "make", editable:true, cellEditor: 'agSelectCellEditor',
//         cellEditorParams: {
//             values: ['Tesla', 'Ford', 'Toyota'],
//         }, },
//    { field: "model" },
//    { field: "price" },
//    { field: "electric" }
//  ]);

const rowSelection = 'multiple';
const colDefs = ref([
   { field: "make",checkboxSelection: true, filter:true },
   { field: "model" },
   { field: "price" },
   { field: "electric",
   cellClassRules: {
        // apply green to electric cars
        'rag-green': params => params.value === true,
    }
    }
 ]);

 const rowClassRules = {
    // apply red to Ford cars
    'rag-red': params => params.data.make === 'Ford',
};

</script>


<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
} */
.rag-green {
  background-color: #33cc3344;
}
.rag-red {
  background-color: #cc222244;
}
</style>
