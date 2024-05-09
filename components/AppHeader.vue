<script setup lang="ts">
// code...
  const drawerShown = useState('drawerShown', () => true);
</script>

<template>
  <header class="bg-primary border-b border-neutral">
    <nav class="navbar bg-primary text-base-100">
      <div class="flex-none">
        <button class="btn btn-circle btn-ghost btn-md" @click="drawerShown = !drawerShown">
          <i class="fas fa-bars fa-xl"></i>
        </button>
      </div>
      <div class="flex-1">
        <a class="btn btn-ghost text-xl">Control de Estudios</a>
      </div>
      <!-- <div class="flex-none">
        <button class="btn btn-square btn-ghost">
        <i class="fas fa-gears fa-xl"></i>
        </button>
        </div> -->
    </nav>
  </header>
</template>

<style scoped>
/* code... */
</style>
