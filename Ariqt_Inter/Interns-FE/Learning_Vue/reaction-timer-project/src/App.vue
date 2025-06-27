<template>
<h1>Shaik Reaction Time</h1>
<button @click="Start" :disabled="isPlaying">Play</button>
<Block v-if="isPlaying" :delay="delay" @end="endGame"/>
<Results v-if="showResults" :score="score"/>
</template>

<script>
import Block from "./components/Block.vue";
import Results from "./components/Results.vue";
export default {
  data(){
    return {
      isPlaying : false,
      delay : null,
      score : 0,
      showResults : false,
    }
  },
  components : {
    Block, Results
  },
  methods : {
 Start(){
    this.isPlaying = true;
    this.delay = 2000 + Math.random()*5000;
    console.log(this.delay);
    this.showResults = false;
  },
  endGame(reactionTime){
   this.isPlaying = false;
   this.score = reactionTime;
   this.showResults = true;
  }
  }
 
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
