<template>
<div>  <div v-for="post in posts" :key="post.id">
    <SinglePost :post="post"/>
</div>
</div>
</template>

<script setup>
import SinglePost from "./SinglePost.vue";


let Props = defineProps(["posts"])
let posts = Props.posts;
console.log(Props.posts);
</script>

<style>

</style>