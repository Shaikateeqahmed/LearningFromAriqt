<template>
  <div class="home">
    <h1>Here are many child components</h1>
    <ButtonCounter/>
    <ButtonCounter/>
    <ButtonCounter/>
    <button-counter></button-counter>
    <Blogpost title='My journey with Vue'  :style="{ fontSize: postFontSize1 + 'em' }" @enlarge-text="postFontSize1+=0.1" />
    <Blogpost title='Blogging with Vue' :style="{ fontSize: postFontSize2 + 'em' }" @enlarge-text="postFontSize2+=0.1" />
    <Blogpost title='Why Vue is so fun' :style="{ fontSize: postFontSize3 + 'em' }" @enlarge-text="postFontSize3+=0.1" />

  </div>
</template>

<script setup>
import {ref} from "vue"
import ButtonCounter from "../components/ButtonCounter.vue"
import Blogpost from "../components/Blogpost.vue"
 const posts = ref([
  { id: 1, title: 'My journey with Vue' },
  { id: 2, title: 'Blogging with Vue' },
  { id: 3, title: 'Why Vue is so fun' }
])
const postFontSize1 = ref(1);
const postFontSize2 = ref(1);
const postFontSize3 = ref(1);

</script>
