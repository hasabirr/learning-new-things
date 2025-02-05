<script lang="ts" setup>
const show = ref(false)

const onClick = () => {
  show.value = true
}
</script>


<template>
  <div>
    <LazyAppLayoutHeader v-if="show"/>
    <button @click="onClick">Show Header</button>
    <div>
      <p>Kontennya</p>
      <UiButton/>
    </div>
    <LazyAppLayoutFooter/>
  </div>
</template>
