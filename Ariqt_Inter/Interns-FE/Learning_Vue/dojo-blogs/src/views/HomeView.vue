<template>
  <div class="home">
    home
    <input type="text" v-model="search">
    <div v-for="name in SearchedName" :key="name">{{name}}</div>
    <button @click="handleClick">Stop Watch</button>
    <!-- <p>{{name}}</p> -->
    <!-- <p ref="p">My name is {{name}} and my age is {{age}}</p>
    <button @click="HandleClick">Click Me</button>
    <button @click="age++">add 1 to age</button>
    <input type="text" v-model="name"> -->
  </div>
</template>

<script>
// @ is an alias to /src
import {computed, ref, watch, watchEffect} from "vue"
export default {
  setup(){
    // let name = ref("Shaik");
    // let age  = ref(20);
    // const p = ref(null);
    // const HandleClick = ()=>{
    //   // console.log("you click me")
    //   // console.log(p, p.value);
    //   // p.value.innerText = "you click me"
    //   name.value = "Ateeq";
    //   age.value = 10;
    // }
    // return {name, age, HandleClick, p}
    // const name = computed(()=>{
    //      return "Shaik"
    // })
    // return {name};
    const search = ref("");
    const names = ref(["shaik", "ateeq", "ahmed"]);
    const SearchedName = computed(()=>{
      return names.value.filter((name)=> name.includes(search.value));
    })

    const stopwatch = watch(search,()=>{
      console.log("Watch function is runing");
    })
    // watchEffect(()=>{
    //   console.log("WatchEffect function is runing");
    // })   or
    // watchEffect(()=>{
    //   console.log("WatchEffect function is runing", search.value);
    // })
    const handleClick = ()=>{
      stopwatch()
      stopeffect();
    }
    const stopeffect = watchEffect(()=>{
      console.log("WatchEffect function is runing");
    })
    return {names, search, SearchedName,handleClick};
  }
}
</script>
