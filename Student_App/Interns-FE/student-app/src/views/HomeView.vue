<template>
    <Navbar/>
    <StudentMarksTable :rowData ="rowData" :colDefs="colDefs"/>

</template>

<script setup lang="ts">
import Navbar from '../components/Navbar.vue';
import { ref } from 'vue';
import StudentMarksTable from '@/components/StudentMarksTable.vue';


const rowData = ref([
{
      "name": "John Doe",
      "grade": 10,
      "marks": {
        "Math": 85,
        "English": 78,
        "Science": 92,
        "History": 74,
        "PhysicalEducation": 88
      }
    },
    {
      "name": "Jane Smith",
      "grade": 10,
      "marks": {
        "Math": 90,
        "English": 82,
        "Science": 89,
        "History": 80,
        "PhysicalEducation": 95
      }
    },
    {
      "name": "Alice Johnson",
      "grade": 10,
      "marks": {
        "Math": 78,
        "English": 85,
        "Science": 80,
        "History": 90,
        "PhysicalEducation": 92
      }
    },
    {
      "name": "Bob Brown",
      "grade": 10,
      "marks": {
        "Math": 88,
        "English": 90,
        "Science": 86,
        "History": 85,
        "PhysicalEducation": 80
      }
    },
    {
      "name": "Charlie Davis",
      "grade": 10,
      "marks": {
        "Math": 75,
        "English": 79,
        "Science": 88,
        "History": 84,
        "PhysicalEducation": 90
      }
    },
    {
      "name": "Daisy Evans",
      "grade": 10,
      "marks": {
        "Math": 92,
        "English": 81,
        "Science": 94,
        "History": 87,
        "PhysicalEducation": 89
      }
    },
    {
      "name": "Ethan Harris",
      "grade": 10,
      "marks": {
        "Math": 85,
        "English": 88,
        "Science": 79,
        "History": 82,
        "PhysicalEducation": 84
      }
    },
    {
      "name": "Fiona Green",
      "grade": 10,
      "marks": {
        "Math": 91,
        "English": 84,
        "Science": 87,
        "History": 90,
        "PhysicalEducation": 92
      }
    },
    {
      "name": "George Hill",
      "grade": 10,
      "marks": {
        "Math": 78,
        "English": 76,
        "Science": 85,
        "History": 88,
        "PhysicalEducation": 86
      }
    },
    {
      "name": "Hannah King",
      "grade": 10,
      "marks": {
        "Math": 83,
        "English": 89,
        "Science": 90,
        "History": 79,
        "PhysicalEducation": 91
      }
    },
    {
      "name": "Ian Lee",
      "grade": 10,
      "marks": {
        "Math": 87,
        "English": 82,
        "Science": 84,
        "History": 81,
        "PhysicalEducation": 85
      }
    },
    {
      "name": "Julia Moore",
      "grade": 10,
      "marks": {
        "Math": 93,
        "English": 86,
        "Science": 88,
        "History": 89,
        "PhysicalEducation": 90
      }
    },
    {
      "name": "Kevin Wright",
      "grade": 10,
      "marks": {
        "Math": 80,
        "English": 77,
        "Science": 92,
        "History": 86,
        "PhysicalEducation": 88
      }
    },
    {
      "name": "Laura Scott",
      "grade": 10,
      "marks": {
        "Math": 86,
        "English": 83,
        "Science": 87,
        "History": 85,
        "PhysicalEducation": 89
      }
    },
    {
      "name": "Michael Young",
      "grade": 10,
      "marks": {
        "Math": 89,
        "English": 90,
        "Science": 91,
        "History": 82,
        "PhysicalEducation": 87
      }
    },
    {
      "name": "Nancy Carter",
      "grade": 10,
      "marks": {
        "Math": 77,
        "English": 78,
        "Science": 85,
        "History": 88,
        "PhysicalEducation": 84
      }
    },
    {
      "name": "Oscar Rogers",
      "grade": 10,
      "marks": {
        "Math": 92,
        "English": 87,
        "Science": 86,
        "History": 81,
        "PhysicalEducation": 90
      }
    },
    {
      "name": "Paula Adams",
      "grade": 10,
      "marks": {
        "Math": 84,
        "English": 85,
        "Science": 83,
        "History": 90,
        "PhysicalEducation": 89
      }
    },
    {
      "name": "Quinn Baker",
      "grade": 10,
      "marks": {
        "Math": 80,
        "English": 81,
        "Science": 87,
        "History": 84,
        "PhysicalEducation": 86
      }
    },
    {
      "name": "Rachel Perez",
      "grade": 10,
      "marks": {
        "Math": 89,
        "English": 88,
        "Science": 92,
        "History": 85,
        "PhysicalEducation": 90
      }
    },
    {
      "name": "Steven Collins",
      "grade": 10,
      "marks": {
        "Math": 78,
        "English": 79,
        "Science": 86,
        "History": 90,
        "PhysicalEducation": 84
      }
    },
    {
      "name": "Tina Campbell",
      "grade": 10,
      "marks": {
        "Math": 91,
        "English": 82,
        "Science": 87,
        "History": 88,
        "PhysicalEducation": 92
      }
    },
    {
      "name": "Uma Reed",
      "grade": 10,
      "marks": {
        "Math": 83,
        "English": 84,
        "Science": 90,
        "History": 85,
        "PhysicalEducation": 89
      }
    },
    {
      "name": "Victor Kelly",
      "grade": 10,
      "marks": {
        "Math": 86,
        "English": 83,
        "Science": 88,
        "History": 79,
        "PhysicalEducation": 91
      }
    },
    {
      "name": "Wendy Mitchell",
      "grade": 10,
      "marks": {
        "Math": 90,
        "English": 85,
        "Science": 91,
        "History": 86,
        "PhysicalEducation": 88
      }
    }
 ]);

 const colDefs = ref([
   { field: "name", filter:true, floatingFilter: true },
   { field: "grade" },
   {headerName: "Total Marks", valueGetter: (p : any)=>p.data.marks.Math + p.data.marks.English + p.data.marks.Science + p.data.marks.History + p.data.marks.PhysicalEducation,
   cellClassRules: {
        // apply green to electric cars
        'rag-green': (params : any) => params.value >= 440,
    }
   },
   { headerName : "Maths", valueGetter: (p : any)=> p.data.marks.Math },
   {  headerName : "English", valueGetter: (p : any)=> p.data.marks.English },
   {  headerName : "Science", valueGetter: (p : any )=> p.data.marks.Science },
   {  headerName : "Histroty", valueGetter: (p : any)=> p.data.marks.History },
   {  headerName : "Physical Education", valueGetter: (p : any)=> p.data.marks.PhysicalEducation },
 ]);

 
</script>

<style >
</style>