<template>
<div>
    <h1>{{Props.title}}</h1>
  <button @click="$emit('enlarge-text')">Enlarge Text</button>
</div>
</template>

<script setup>
const Props = defineProps(["title"]);
console.log(Props.title);
</script>

<style>

</style>