<template>
    <Navbar />
<nav id ="breadcrumb" style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><router-link :to="{name : 'home'}">Home</router-link></li>
          <li class="breadcrumb-item active" aria-current="page"><router-link :to="{name : 'recipe'}">Ingredients</router-link></li>
        </ol>
      </nav>
      <h1>The Ingretients of Recipe :- {{ name }}</h1>
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
  </tr>
  </thead>
  <tbody><tr v-for="(recipe, index ) in recipeData" :key="recipe.id">
    <td>{{ index+1 }}</td>
    <td>{{ recipe.name }}</td>
    <td>{{ recipe.amount.metric.value }}</td>
    <td>{{ recipe.amount.metric.unit }}</td>
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
    getRecipe()
})

let recipeData = ref([])
let image = localStorage.getItem('image');
let name = localStorage.getItem('name');



const getRecipe = async()=>{
  let res = await fetch(`https://api.spoonacular.com/recipes/${id}/ingredientWidget.json?apiKey=${apiKey}`);
    res = await res.json();
    recipeData.value = res.ingredients
    console.log(res.ingredients, image, name, recipeData)
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