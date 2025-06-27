<template>
    <button class="btn">{{text}}</button>
</template>

<script>
export default {
    props : ['text']
}
</script>

<style>
.btn{
    width: 100px;
    height: 70px;
    background: lightblue;
    color: white;
    border: white;
    border-radius: 10px;
}
</style>