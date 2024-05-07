<script setup lang="ts">
// code...
</script>

<template class="">
  <!-- code... -->
  <section class="h-screen flex flex-col">
    <header class="bg-primary border-b border-neutral">
      <nav class="navbar mx-auto container text-base-100">
        <div class="flex-none">
          <button class="btn btn-square btn-ghost">
            <i class="bi bi-list text-xl"></i>
          </button>
        </div>
        <div class="flex-1">
          <a class="text-xl">Control de Estudios</a>
        </div>
        <div class="flex-none">
          <button class="btn btn-square btn-ghost">
            <i class="bi bi-three-dots text-lg"></i>
          </button>
        </div>
      </nav>
    </header>
    <main class="container mx-auto flex-1">
      <slot />
    </main>
    <footer class="bg-primary border-b border-neutral">
      <nav class="navbar mx-auto container text-base-100">
        <!-- <div class="flex-none">
          <button class="btn btn-square btn-ghost">
            <i class="bi bi-list text-xl"></i>
          </button>
        </div> -->
        <div class="flex-1"></div>
        <div class="flex-none">
          <a class="text-xl">Control de Estudios</a>
        </div>
        <!-- <div class="flex-none">
          <button class="btn btn-square btn-ghost">
            <i class="bi bi-three-dots text-lg"></i>
          </button>
        </div> -->
      </nav>
    </footer>
  </section>
</template>

<style scoped>
/* code... */
</style>
