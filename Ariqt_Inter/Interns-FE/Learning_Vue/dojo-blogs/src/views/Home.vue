<template>
  <div>
    <h1>Posts</h1>
    <div v-if="error">{{ error }}</div>
    <div v-if="!error && posts.length">
      <PostList :posts="posts" />
    </div>
    <div v-if="!error && !posts.length" >Loading.....</div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import PostList from "../components/PostList.vue";
import getPosts from "../composables/getPosts.js"

// const posts = ref([]);
// const error = ref(null);

// const GetData = async () => {
//   try {
//     let data = await fetch(`http://localhost:3000/posts`);
//     if (!data.ok) {
//       throw Error("No Data Available!");
//     }
//     posts.value = await data.json();
//     console.log(posts.value);
//   } catch (err) {
//     error.value = err.message;
//     console.log(error.value);
//   }
// };
// GetData();

const {posts, error, GetData} = getPosts();
GetData();
</script>

<style>
</style>