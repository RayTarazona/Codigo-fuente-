<script setup lang="ts">
const marco = useState(() => 'default')
  
  // definePageMeta({
  //   layout: 'public'
  // });
  // code...
  const onclick = () => {
    if(marco.value == 'default'){
      marco.value = 'public';
    }else {
      marco.value = 'default';
    }
  }
</script>

<template>
  <!-- code... -->
  <div class="">
    <h1 class="text-3xl">Index page!</h1>
    <h2>{{marco}}</h2>
    <button @click="onclick" class="btn btn-primary">click</button>
  </div>
</template>

<style scoped>
/* code... */
</style>
