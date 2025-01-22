<!-- untuk membuat komponen setidaknya ada komponen script, template, dan style -->

<!-- digunakan untuk membuat logic-logic -->
<script setup>
import MainButton from './components/MainButton.vue';

const greeting = "Hello World"
const blogPost = '<p style="color:red;">Ini Adalah BlogPost</p>'
const idBlog = 'blog-1'

</script>

<!-- digunakan untuk merender tag-tag HTML -->
<template>
  <MainButton></MainButton>
  <MainButton></MainButton>
  <MainButton></MainButton>
  <p>{{ greeting }}</p>
  <OptionComponent></OptionComponent>
  <CompositionComponent></CompositionComponent>

  <div :id="idBlog">
    {{ blogPost }}
  </div>

  <div v-html="blogPost"></div>
</template>

<!-- digunakan untuk memberikan styling -->
<style scoped>
</style>
