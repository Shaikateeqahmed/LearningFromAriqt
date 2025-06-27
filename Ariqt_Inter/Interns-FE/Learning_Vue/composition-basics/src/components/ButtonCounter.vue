<template>
    <button @click="count++">you have click me {{count}} times.</button>
</template>

<script setup>
import {ref} from "vue"
const count = ref(0);
 
</script>
