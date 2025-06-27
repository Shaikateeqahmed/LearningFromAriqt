let apiKey = "b6c6d37cac3a48a98f699648633b1eba"

async function getRecipesForHomePage(page){
    let res = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&number=60`);
    res = await res.json();
    console.log(res.results);
    appendRecipes(res.results,page);
}
getRecipesForHomePage(1);

let loading = document.getElementById("loading");
let container = document.getElementById("container");
function appendRecipes(data,page){
  try {
    loading.style.display="none";
    var x = document.getElementById("pagination");
    if (x.style.display === "none") {
      x.style.display = "block";
      x.style.display = "flex";
      x.style.justifyContent = "space-between"
    } 
    container.innerHTML = null;
    let start = 12*(page-1);
    let end = start+12;
    let per_page_data = data.slice(start,end);
    per_page_data.map((recipe)=>{
        let card = document.createElement("div");
        let Recipe_img = document.createElement("img");
        Recipe_img.src = recipe.image;
        let Recipe_title = document.createElement("h6");
        Recipe_title.innerText = recipe.title;
        let btn = document.createElement("div");
        let get_recipe = document.createElement("button");
        get_recipe.innerHTML = `<button type="button" class="btn btn-primary card_org">Get Recipe</button>`
        get_recipe.style.border = "0px"
        get_recipe.style.backgroundColor="white"
        get_recipe.addEventListener("click",()=>{
            getRecipe(recipe.id,recipe.image,recipe.title);
        })
        let get_Nutrition = document.createElement("button");
        get_Nutrition.innerHTML = `<button type="button" class="btn btn-primary card_org">Get Nutrition</button>`
        get_Nutrition.style.border = "0px"
        get_Nutrition.style.backgroundColor="white"
        get_Nutrition.addEventListener("click",()=>{
            getNutrition(recipe.id,recipe.image,recipe.title);
        })
        let get_cost = document.createElement("button");
        get_cost.innerHTML = `<button type="button" class="btn btn-primary card_org">Get Cost</button>`
        get_cost.style.border = "0px"
        get_cost.style.backgroundColor="white"
        get_cost.addEventListener("click",()=>{
            getCost(recipe.id,recipe.image,recipe.title);
        })
        btn.append(get_recipe,get_Nutrition,get_cost)
        card.append(Recipe_img,Recipe_title,btn);
        container.append(card);
    })
  } catch (error) {
    console.log("error",error)
  }
}

async function getRecipe(id,image,name){
    let recipe = await fetch(`https://api.spoonacular.com/recipes/${id}/ingredientWidget.json?apiKey=${apiKey}`);
    recipe = await recipe.json();
    console.log(recipe);
    recipe["image"] = image;
    recipe["name"] = name;
    console.log(recipe);
    localStorage.setItem("ingredients",JSON.stringify(recipe));
    window.location.href = "./ingredients.html";
}

async function getNutrition(id,image,name){
  let nutrients = await fetch(`https://api.spoonacular.com/recipes/${id}/nutritionWidget.json?apiKey=${apiKey}`);
  nutrients = await nutrients.json();
  // console.log(nutrients.nutrients);
  let actual_nutrients = nutrients.nutrients;
  let arr = [];
  arr.push({nutrients:actual_nutrients});
  arr.push({image : image});
  arr.push({name : name});
  console.log(arr);
  localStorage.setItem("nutrients",JSON.stringify(arr));
  window.location.href = "./nutrients.html";
}

async function getCost(id,image,name){
  let cost = await fetch(`https://api.spoonacular.com/recipes/${id}/priceBreakdownWidget.json?apiKey=${apiKey}`);
  cost = await cost.json();
  cost["image"]=image;
  cost["name"]= name;
  console.log(cost);
  localStorage.setItem("cost",JSON.stringify(cost));
  window.location.href = "./cost.html";
}

let form = document.querySelector("form").addEventListener("submit",SearchFun);

async function SearchFun(e){
      e.preventDefault();
     let input = document.getElementById("search_input").value;
     console.log(input)
     let res = await fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${input}&number=60&apiKey=${apiKey}`);
     res = await res.json();
     console.log(res.results);
     appendRecipes(res.results,1)
}


document.getElementById("popular").addEventListener("click",popular);

async function popular(){
  let res = await fetch(`https://api.spoonacular.com/recipes/complexSearch?sort=popularity&apiKey=${apiKey}&number=60`);
  res = await res.json();
  console.log(res);
  appendRecipes(res.results,1);
}

document.getElementById("alcohol").addEventListener("click",alcohol);

async function alcohol(){
  let res = await fetch(`https://api.spoonacular.com/recipes/complexSearch?sort=alcohol&apiKey=${apiKey}&number=60`);
  res = await res.json();
  console.log(res);
  appendRecipes(res.results,1);
}

document.getElementById("healthiness").addEventListener("click",healthiness);

async function healthiness(){
  let res = await fetch(`https://api.spoonacular.com/recipes/complexSearch?sort=healthiness&apiKey=${apiKey}&number=60`);
  res = await res.json();
  console.log(res);
  appendRecipes(res.results,1);
}

$('#menu li a').on('click', function(){
  vitFun($(this).html());
  document.getElementById("pagination").style.display="none"
});


async function vitFun(type){
  
  console.log($(this).text())
  let res = await fetch(`https://api.spoonacular.com/recipes/complexSearch?sort=${type}&apiKey=${apiKey}&number=12`)
  res = await res.json();
  console.log(res.results);
  appendVitaminRecipes(res.results)
}

function appendVitaminRecipes(data){
  try {
    loading.style.display="none";
    container.innerHTML = null;
    data.map((recipe)=>{
        let card = document.createElement("div");
        let Recipe_img = document.createElement("img");
        Recipe_img.src = recipe.image;
        let Recipe_title = document.createElement("h6");
        Recipe_title.innerText = recipe.title;
        let vit = document.createElement("p");
        vit.innerText = `${recipe.nutrition.nutrients[0].name}, Qty :- ${recipe.nutrition.nutrients[0].amount}`;
        vit.setAttribute("class","vit")
        
        let btn = document.createElement("div");
        let get_recipe = document.createElement("button");
        get_recipe.innerHTML = `<button type="button" class="btn btn-primary card_org">Get Recipe</button>`
        get_recipe.style.border = "0px"
        get_recipe.style.backgroundColor="white"
        get_recipe.addEventListener("click",()=>{
            getRecipe(recipe.id,recipe.image,recipe.title);
        })
        let get_Nutrition = document.createElement("button");
        get_Nutrition.innerHTML = `<button type="button" class="btn btn-primary card_org">Get Nutrition</button>`
        get_Nutrition.style.border = "0px"
        get_Nutrition.style.backgroundColor="white"
        get_Nutrition.addEventListener("click",()=>{
            getNutrition(recipe.id,recipe.image,recipe.title);
        })
        let get_cost = document.createElement("button");
        get_cost.innerHTML = `<button type="button" class="btn btn-primary card_org">Get Cost</button>`
        get_cost.style.border = "0px"
        get_cost.style.backgroundColor="white"
        get_cost.addEventListener("click",()=>{
            getCost(recipe.id,recipe.image,recipe.title);
        })
        btn.append(get_recipe,get_Nutrition,get_cost)
        card.append(Recipe_img,Recipe_title,vit,btn);
        container.append(card);
    })
  } catch (error) {
    console.log("error",error)
  }
}

let id;
let diet = ""
$('#diet li').on('click', function(){
 //console.log($(this).text());
 if(diet===""){
  diet+=$(this).text().trim();
 }else{
  diet+=","+$(this).text().trim();
 }

 //console.log(diet);
 if(id){
  clearTimeout(id);
 }
 id=setTimeout(()=>{
  dietFun(diet);
 },1000);
});

async function dietFun(data){
  console.log(typeof data, data);
  let res = await fetch(`https://api.spoonacular.com/recipes/complexSearch?diet=${data}&apiKey=${apiKey}&number=50`)
  res = await res.json();
  console.log(res);
  appendRecipes(res.results,1)
}


let prev_btn = document.getElementById("prev");
prev_btn.addEventListener("click",prev);

let next_btn = document.getElementById("next");
next_btn.addEventListener("click",next);

let i = 1;
let current_page = document.getElementById("current_page");
current_page.innerHTML = i;


function prev(){
  if(i>1){
    i--;
    current_page.innerHTML = i;
      getRecipesForHomePage(i);
  }else{
    alert("You Are On The First Page Already!");
  }
}
function next(){
  if(i<5){
    i++;
    if(i===5){
      current_page.style.fontSize = "20px"
      current_page.innerHTML = "last Page";
        getRecipesForHomePage(i);
    }else{
      current_page.innerHTML = i;
     
        getRecipesForHomePage(i);
    }
  }else{
    alert("You Are On The Last Page Already!");
  }
}


