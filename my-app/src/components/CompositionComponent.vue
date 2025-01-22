<script setup>
const name = 'Rafif Hasabi'
const showName = () =>console.log(name)
</script>

<template>
    <h1>{{ name }}</h1>
    <button @click="showName">Show Button</button>
</template>