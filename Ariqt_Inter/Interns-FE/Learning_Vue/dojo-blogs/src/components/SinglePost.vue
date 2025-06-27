<template>
  <div>  
    <router-link :to="{name : 'details',params:{id : post.id}}">    <h1>{{post.title}}</h1>
</router-link>
    <p>{{snippet}}</p>
    <span v-for="tag in post.tags" :key="tag">#{{tag}}</span>
</div>
</template>

<script setup>
import {computed} from "vue";

const Props = defineProps(["post"]);
const post = Props.post;

const snippet = computed(()=>{
     return post.body.substring(0,100)+"...";
})
</script>

<style>

</style>