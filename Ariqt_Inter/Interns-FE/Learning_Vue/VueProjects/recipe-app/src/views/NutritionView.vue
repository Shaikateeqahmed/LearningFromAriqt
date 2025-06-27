<template>
    <Navbar />
<nav id ="breadcrumb" style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><router-link :to="{name : 'home'}">Home</router-link></li>
          <li class="breadcrumb-item active" aria-current="page"><router-link :to="{name : 'nutritions'}">Nutritions</router-link></li>
        </ol>
      </nav>
      <h1>The Nutrients in a Recipe :- {{ name }}</h1>
      <p>Eat Healthy Stay Healthy</p>
      <div id="img">
        <img :src="image" alt="">
      </div>


<table>
  <thead>
    <tr>
    <th>S.No</th>
    <th>Name</th>
    <th>Quantity</th>
    <th>Unit(s)</th>
    <th>PerCent Of Daily Needs</th>
  </tr>
  </thead>
  <tbody><tr v-for="(nutrients, index ) in NutritionData" :key="nutrients.id">
    <td>{{ index+1 }}</td>
    <td>{{ nutrients.name }}</td>
    <td>{{ nutrients.amount }}</td>
    <td>{{ nutrients.unit }}</td>
    <td>{{ nutrients.percentOfDailyNeeds }}</td>
  </tr>
</tbody>
  
</table>

</template>

<script setup>
import { onMounted, ref } from 'vue';
import Navbar from '../components/Navbar.vue';
import { useRoute } from 'vue-router';

const route = useRoute();
let id = route.params.id;
let apiKey = "b6c6d37cac3a48a98f699648633b1eba";

onMounted(()=>{
    getNutritions()
})

let NutritionData = ref([])
let image = localStorage.getItem('image');
let name = localStorage.getItem('name');



const getNutritions = async()=>{
    let nutrients = await fetch(`https://api.spoonacular.com/recipes/${id}/nutritionWidget.json?apiKey=${apiKey}`);
    nutrients = await nutrients.json();
    NutritionData.value = nutrients.nutrients
    console.log(nutrients, image, name, NutritionData)
}

</script>

<style>

#breadcrumb{
        font-size: 30px;
        margin-left: 30px;
       }
       #breadcrumb>ol>li:nth-child(1)>a{
          color: gray;
          text-decoration: none;
       }
       #breadcrumb>ol>li:nth-child(2)>a{
          color: orange;
          text-decoration: none;
       }

       #img{
        width: 40%;
        margin: auto;
        border-radius: 20%;
       }
       #img>img{
        width: 100%;
        border-radius: 20%;
       }
       #img:hover{
        box-shadow: #6FD0A6 0px 54px 55px, #6FD0A6 0px -12px 30px, #6FD0A6 0px 4px 6px, #6FD0A6 0px 12px 13px, #6FD0A6 0px -3px 5px;
       }

       table{
            width: 90%;
            margin: 50px auto 20px auto;

        }
        tr{
            text-align: center;
        }
       table, td{
        border: 3px solid teal;
       }
</style>