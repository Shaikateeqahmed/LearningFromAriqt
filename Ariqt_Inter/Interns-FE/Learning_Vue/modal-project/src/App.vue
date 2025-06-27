<template>
<div>
  <!-- <h1>{{title}}</h1>
  <input type="text" ref="name">
  <button @click="handleEvent">Click Me</button>
  <h1 ref="show"></h1> -->
  <!-- <CustomBtn text="Click Me"/> -->
  <Modal v-if="ShowModal" :header = "header" :text = "text" theme = "sale" @close="ToggleModal">
    <h1>Shaik Ateeq Ahmed</h1> 
    <template v-slot:name><p>SHAIK ATEEQ AHMED</p></template></Modal>
  <button @click="ToggleModal">
    <span v-if="!ShowModal">Show Modal</span>
    <span v-else>Hide Modal</span>
  </button>
</div>
  <!-- <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
//import HelloWorld from './components/HelloWorld.vue';
import Modal from './components/Modal.vue'
import CustomBtn from './components/CustomBtn.vue'
@Options({
  data(){
    return {
    title : "My First Vue App :)",
    header : "Sign Up For Register :)",
    text : "COntent of the modal",
    ShowModal : false
    }
  },
  components : {
    Modal,
    CustomBtn
  },
  methods :{
    handleEvent(){
      console.log(this.$refs.name.value);
      this.$refs.show.innerText = this.$refs.name.value
    },
    ToggleModal(){
       this.ShowModal = !this.ShowModal
    }
  }
})
export default class App extends Vue {}
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
