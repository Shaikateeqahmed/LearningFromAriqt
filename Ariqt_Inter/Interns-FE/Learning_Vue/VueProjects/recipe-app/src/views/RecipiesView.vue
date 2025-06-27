<template>
   <nav id="nav"  class="navbar navbar-expand-xl">
        <div  class="container-fluid" >
          <button class="navbar-toggler orange" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-collection-fill" viewBox="0 0 16 16">
              <path d="M0 13a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 16 13V6a1.5 1.5 0 0 0-1.5-1.5h-13A1.5 1.5 0 0 0 0 6v7zM2 3a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 0-1h-11A.5.5 0 0 0 2 3zm2-2a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7A.5.5 0 0 0 4 1z"/>
            </svg>
          </button>
          <div class="collapse navbar-collapse" id="navbarScroll">
            <ul id="menu_btn" class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">
              <li class="nav-item">
                <button @click="HandlePopular" type="button" class="btn btn-primary orange">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-balloon-heart-fill" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8.49 10.92C19.412 3.382 11.28-2.387 8 .986 4.719-2.387-3.413 3.382 7.51 10.92l-.234.468a.25.25 0 1 0 .448.224l.04-.08c.009.17.024.315.051.45.068.344.208.622.448 1.102l.013.028c.212.422.182.85.05 1.246-.135.402-.366.751-.534 1.003a.25.25 0 0 0 .416.278l.004-.007c.166-.248.431-.646.588-1.115.16-.479.212-1.051-.076-1.629-.258-.515-.365-.732-.419-1.004a2.376 2.376 0 0 1-.037-.289l.008.017a.25.25 0 1 0 .448-.224l-.235-.468ZM6.726 1.269c-1.167-.61-2.8-.142-3.454 1.135-.237.463-.36 1.08-.202 1.85.055.27.467.197.527-.071.285-1.256 1.177-2.462 2.989-2.528.234-.008.348-.278.14-.386Z"/>
                  </svg>
                  Popular
                </button>
              </li>
              <li class="nav-item">
                <button @click="HandleHealthiness" type="button" class="btn btn-primary orange">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-apple mb-1" viewBox="0 0 16 16">
                    <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z"/>
                    <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z"/>
                  </svg>
                  Healthiness
                </button>
              </li>
              <li class="nav-item">
                <button @click="HandleAlcohol" type="button" class="btn btn-primary orange">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-lungs-fill mb-1" viewBox="0 0 16 16">
                    <path d="M8 1a.5.5 0 0 1 .5.5v5.243L9 7.1V4.72C9 3.77 9.77 3 10.72 3c.524 0 1.023.27 1.443.592.431.332.847.773 1.216 1.229.736.908 1.347 1.946 1.58 2.48.176.405.393 1.16.556 2.011.165.857.283 1.857.24 2.759-.04.867-.232 1.79-.837 2.33-.67.6-1.622.556-2.741-.004l-1.795-.897A2.5 2.5 0 0 1 9 11.264V8.329l-1-.715-1 .715V7.214c-.1 0-.202.03-.29.093l-2.5 1.786a.5.5 0 1 0 .58.814L7 8.329v2.935A2.5 2.5 0 0 1 5.618 13.5l-1.795.897c-1.12.56-2.07.603-2.741.004-.605-.54-.798-1.463-.838-2.33-.042-.902.076-1.902.24-2.759.164-.852.38-1.606.558-2.012.232-.533.843-1.571 1.579-2.479.37-.456.785-.897 1.216-1.229C4.257 3.27 4.756 3 5.28 3 6.23 3 7 3.77 7 4.72V7.1l.5-.357V1.5A.5.5 0 0 1 8 1Zm3.21 8.907a.5.5 0 1 0 .58-.814l-2.5-1.786A.498.498 0 0 0 9 7.214V8.33l2.21 1.578Z"/>
                  </svg>
                  Alcohol
                </button>
              </li>
              <li class="nav-item dropdown">
                <button  class="dropdown-toggle btn orange" href="#" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-half mb-1" viewBox="0 0 16 16">
                    <path d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z"/>
                  </svg>
                  Vitamins
                </button>
                <ul id="menu" class="dropdown-menu menu_org">
                  <li><a class="dropdown-item" href="#" @click="SelectedVitanim">vitamin-a</a></li>
                  <li><a class="dropdown-item" href="#" @click="SelectedVitanim">vitamin-b1</a></li>
                  <li><a class="dropdown-item" href="#" @click="SelectedVitanim">vitamin-b2</a></li>
                  <li><a class="dropdown-item" href="#" @click="SelectedVitanim">vitamin-b3</a></li>
                  <li><a class="dropdown-item" href="#" @click="SelectedVitanim">vitamin-b5</a></li>
                  <li><a class="dropdown-item" href="#" @click="SelectedVitanim">vitamin-b6</a></li>
                  <li><a class="dropdown-item" href="#" @click="SelectedVitanim">vitamin-b12</a></li>
                  <li><a class="dropdown-item" href="#" @click="SelectedVitanim">vitamin-c</a></li>
                  <li><a class="dropdown-item" href="#" @click="SelectedVitanim">vitamin-d</a></li>
                  <li><a class="dropdown-item" href="#" @click="SelectedVitanim">vitamin-e</a></li>
                  <li><a class="dropdown-item" href="#" @click="SelectedVitanim">vitamin-k</a></li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <button  class="dropdown-toggle btn orange" href="#" type="button" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-award-fill mb-1" viewBox="0 0 16 16">
                    <path d="m8 0 1.669.864 1.858.282.842 1.68 1.337 1.32L13.4 6l.306 1.854-1.337 1.32-.842 1.68-1.858.282L8 12l-1.669-.864-1.858-.282-.842-1.68-1.337-1.32L2.6 6l-.306-1.854 1.337-1.32.842-1.68L6.331.864 8 0z"/>
                    <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z"/>
                  </svg>
                 Diet
                </button>
                <ul id="diet" class="dropdown-menu p-2 menu_org orange">
                  <li >
                    <a class="dropdown-item" href="#"><input type="checkbox" value="glute free" v-model="diet" @click="SelectedDiet">glute free</a>
                  </li>
                  <li >
                    <a class="dropdown-item" href="#"><input type="checkbox" value="ketogenic" v-model="diet" @click="SelectedDiet">ketogenic</a>
                  </li>
                  <li >
                    <a class="dropdown-item" href="#"><input type="checkbox" value="vegetarian" v-model="diet" @click="SelectedDiet">vegetarian</a>
                  </li>
                  <li >
                    <a class="dropdown-item" href="#"><input type="checkbox" value="lacto-vegetarian" v-model="diet" @click="SelectedDiet">lacto-vegetarian</a>
                  </li>
                  <li >
                    <a class="dropdown-item" href="#"><input type="checkbox" value="ovo-vegetarian" v-model="diet" @click="SelectedDiet">ovo-vegetarian</a>
                  </li>
                  <li >
                    <a class="dropdown-item" href="#"><input type="checkbox" value="vegan" v-model="diet" @click="SelectedDiet">vegan</a>
                  </li>
                  <li >
                    <a class="dropdown-item" href="#"><input type="checkbox" value="pescetarian" v-model="diet" @click="SelectedDiet">pescetarian</a>
                  </li>
                  <li >
                    <a class="dropdown-item" href="#"><input type="checkbox" value="paleo" v-model="diet" @click="SelectedDiet">paleo</a>
                  </li>
                  <li >
                    <a class="dropdown-item" href="#"><input type="checkbox" value="primal" v-model="diet" @click="SelectedDiet">primal</a>
                  </li>
                </ul>
              </li>
            </ul>
            <form class="d-flex" role="search" @submit.prevent="SearchFun">
              <input id="search_input" class="form-control me-2" type="search" placeholder="Search" aria-label="Search" v-model="searchItem">
              <button class="btn btn-outline-success orange" type="submit"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-search-heart mb-1" viewBox="0 0 16 16">
                <path d="M6.5 4.482c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.69 0-5.018Z"/>
                <path d="M13 6.5a6.471 6.471 0 0 1-1.258 3.844c.04.03.078.062.115.098l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1.007 1.007 0 0 1-.1-.115h.002A6.5 6.5 0 1 1 13 6.5ZM6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Z"/>
              </svg></button>
            </form>
          </div>
        </div>
      </nav>

      <nav id ="breadcrumb" style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="./index.html" style="color: #ff6f00;">Home</a></li>
        </ol>
      </nav>

      <div id="container">
        <div v-for="recipe in recipes">
            <img :src="recipe.image" alt="">
            <p>{{ recipe.title }}</p>
            <div id="vitamin"
             v-if="recipe.nutrition">
                <p>{{ recipe.nutrition.nutrients[0].name }}</p>,
                <p>Qty:- {{ recipe.nutrition.nutrients[0].amount }}</p>
            </div>
            <div id="BtnDiv">
                <button class="Btn" @click="getRecipe(recipe.image,recipe.title, recipe.id)">Get Recipe</button>
                <button class="Btn" @click="getNutrition(recipe.image,recipe.title, recipe.id)">Get Nutrition</button>
                <button class="Btn" @click="getCost(recipe.image,recipe.title, recipe.id)">Get Cost</button>
            </div>
        </div>
      </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

onMounted(()=>{
    getRecipies();
})

let apiKey = "b6c6d37cac3a48a98f699648633b1eba";
let recipes = ref([]);

const getRecipies = async ()=>{
    let res = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&number=60`);
    res = await res.json();
    recipes.value = res.results;
    console.log(recipes.value);
}

const HandlePopular = async ()=>{
    let res = await fetch(`https://api.spoonacular.com/recipes/complexSearch?sort=popularity&apiKey=${apiKey}&number=60`);
  res = await res.json();
  recipes.value = res.results;
  console.log(recipes.value);
}

const HandleHealthiness = async () =>{
    let res = await fetch(`https://api.spoonacular.com/recipes/complexSearch?sort=healthiness&apiKey=${apiKey}&number=60`);
    res = await res.json();
    recipes.value = res.results;
  console.log(recipes.value);
}

const HandleAlcohol = async () =>{
    let res = await fetch(`https://api.spoonacular.com/recipes/complexSearch?sort=alcohol&apiKey=${apiKey}&number=60`);
    res = await res.json();
    recipes.value = res.results;
    console.log(recipes.value);
}

const SelectedVitanim = async (event)=>{
    let res = await fetch(`https://api.spoonacular.com/recipes/complexSearch?sort=${event.target.innerText}&apiKey=${apiKey}&number=12`)
    res = await res.json();
    recipes.value = res.results;
    console.log(recipes.value);
}
let diet = ref([]);
let id;
let DeitString = "";
const SelectedDiet = ()=>{
  console.log("hi")
  if(id){
  clearTimeout(id);
  DeitString = ""
  }
  id = setTimeout(()=>{
    SelectDiet();
  },1000)

}

const SelectDiet = async()=>{
  for(let i=0; i<diet.value.length; i++){
      if(i===diet.value.length-1){
        DeitString += diet.value[i]
      }else{
        DeitString += diet.value[i]+","
      }
      
    }
    let res = await fetch(`https://api.spoonacular.com/recipes/complexSearch?diet=${DeitString}&apiKey=${apiKey}&number=50`)
    res = await res.json();
    recipes.value = res.results;
    console.log(recipes.value);
}


const getRecipe = (image, name, id)=>{
console.log(image, name)
localStorage.setItem("image",image);
localStorage.setItem("name",name);
router.push({ name: 'recipe', params: { id: id } });
}

const getNutrition = (image, name, id)=>{
console.log(image, name)
localStorage.setItem("image",image);
localStorage.setItem("name",name);
router.push({ name: 'nutritions', params: { id: id } });
}

const getCost = (image, name, id)=>{
console.log(image, name)
localStorage.setItem("image",image);
localStorage.setItem("name",name);
router.push({ name: 'cost', params: { id: id } });
}

let searchItem = ref("");
const SearchFun = async (event)=>{
     console.log(searchItem.value);
     let res = await fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${searchItem.value}&number=60&apiKey=${apiKey}`);
     res = await res.json();
     recipes.value = res.results;
    console.log(recipes.value);
}
</script>

<style>
body{
    margin-top: 70px;
}
#nav{
    background-color:#01cd9d;
    border-radius: 5px;
}
#menu_btn{
    display: flex;
    gap: 5px;
}

.orange{
    background-color: #01cd9d;
    color: #ff6f00;
    border: 2px solid #ff6f00;
}
.orange:hover{
    background-color: #ff6f00;
    color: white;
    border: 2px solid #ff6f00;
}
.menu_org>li>a:hover{
    background-color: #ff6f00;
    color: white;
}
.vit{
   color: white;
   background-color: #ff6f00;
}
.vit:hover{
    background-color: #01cd9d;
}
#breadcrumb{
    font-size: 30px;
    margin-left: 30px;
    margin-top: 10px;
}
#breadcrumb>ol>li>a{
    color: orange;
    text-decoration: none;
}
#container{
    width: 85%;
    display: grid;
    grid-template-columns: repeat(3,1fr);
    grid-template-rows: repeat(auto,200px);
    gap: 20px;
    margin: auto;
    border-radius: 20px;
    margin-bottom: 100px;
}
#container>div{
    text-align: center;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: 20px;
    padding-bottom: 20px;
}
#container>div:hover{
    box-shadow: #6FD0A6 0px 3px 8px;
    border-radius: 20px;
}
#container>div>img{
    width: 100%;
    border-radius: 20px 20px 0px 0px;
}
#container>div>p{
    padding: 10px 20px 0px 20px;
    font-weight: bold;
}
#BtnDiv{
    width: 100%;
    display: flex;
    justify-content: space-evenly;
}
.Btn{
    background-color: white;
    color: #ff6f00;
    border: 2px solid #ff6f00;
    padding: 10px;
    border-radius: 10px;
}
.Btn:hover{
    background-color: #ff6f00;
    color: white;
    border: 2px solid #ff6f00;
}
#vitamin{
  display: flex;
  justify-content: center;
  background-color: #ff6f00;
  color: white;
  font-weight: bold;
  padding-top: 10px;
  margin-bottom: 10px;
}

/* @media all and (min-width:300px) and (max-width:450px){
  body{
    margin-top: 100px;
}
} */

@media all and (min-width:790px) and (max-width:1260px){
    #container{
        width: 90%;
        grid-template-columns: repeat(2,1fr);
    }
}

@media all and (max-width:789px){
    #container{
        width: 95%;
        grid-template-columns: repeat(1,1fr);
    }
    #breadcrumb{
        font-size: 20px;
       }
}
</style>