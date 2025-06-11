<template>

<div class="bg-gray-50 text-gray-800 dark:bg-gray-950 dark:text-gray-100 min-h-screen flex flex-col">
  <header class="border-b border-gray-500/50 h-[68px] flex text-white">
    <PageContainer class="flex-1 flex items-center">
      <NuxtLink to="/" class="font-bold text-lg">Landing Page</NuxtLink>
    </PageContainer>
  </header>
  <main class="flex-1">
    <slot />
  </main>
  <footer class="border-t border-gray-500/50 h-[68px] flex">
    <PageContainer class="flex-1 flex items-center">
      <NuxtLink to="/" class="font-bold text-lg">
        <div>
          <span class="text-sm">&copy; 2024</span>
        </div>
      </NuxtLink>
    </PageContainer>
  </footer>
</div>
  
</template>