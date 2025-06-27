<template>
  <!-- <div class="home" ref="nav"> -->
   
  <!-- </div> -->
   <!-- <div v-html="nav">
   </div> -->
   <Navbar/>
   <RecipiesView v-if="state.user" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Navbar from '../components/Navbar.vue';
import RecipiesView from "./RecipiesView.vue";
import {state} from "../config/msalConfig";


</script>

<style>
</style>
