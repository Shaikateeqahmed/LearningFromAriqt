<template>
  <div>
    <h1>Details</h1>
    <h1>Posts</h1>
    <div v-if="error">{{ error }}</div>
    <div v-if="!error && post">
     <h1>{{post.title}}</h1>
    <p>{{post.body}}</p>
    <p>{{post.tags}}</p>
    </div>
    <div v-if="!error && !post" >Loading.....</div>
    
  </div>
</template>

<script setup>
    import { useRoute } from 'vue-router';
    import getPost from "../composables/getPost.js";
    const postID = useRoute().params.id;
    console.log(postID);
    const {post, error, GetData} = getPost(postID);
    GetData()
    console.log(post);

</script>

<style>

</style>