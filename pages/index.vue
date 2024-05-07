<script setup lang="ts">
// code...
  const onclick = () => {
    alert('clicked')
  }
</script>

<template>
  <!-- code... -->
  <div class="">
    <h1 class="text-3xl">Index page!</h1>
    <button @click="onclick" class="btn btn-primary">click</button>
  </div>
</template>

<style scoped>
/* code... */
</style>
