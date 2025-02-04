<script lang="ts" setup>

  import { AppLayoutFooter } from '#components'
  const Header = resolveComponent('AppLayoutHeader')

</script>

<template>
  <div>
    <component :is="Header"/>
    <div>
      <p>kontenn</p>
      <UiButton/>
    </div>
    <AppLayoutFooter/>
  </div>
</template>
