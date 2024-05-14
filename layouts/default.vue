<script setup lang="ts">
// code...
</script>

<template class="">
  <section class="min-h-screen h-full flex flex-col bg-primary">
    <app-header />
      <main class="flex-1 flex">
        <app-side-nav />
        <section class="flex-1 bg-base-100 pt-4 px-2">
          <slot />
        </section>
      </main>
      <app-footer />
  </section>
</template>

<style scoped>
/* code... */
</style>
