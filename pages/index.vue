<script setup lang="ts">
definePageMeta({
middleware: 'auth'
})
const marco = useState(() => 'default')

const buttons = [{
icon: 'chalkboard',
  name: 'profesores',
  url: 'profesores',
  title: 'Profesores'
},
  {
icon: 'chalkboard',
  name: 'profesores',
  url: 'profesores',
  title: 'Profesores'
},
  {
icon: 'chalkboard',
  name: 'profesores',
  url: 'profesores',
  title: 'Profesores'
},
  {
icon: 'chalkboard',
  name: 'profesores',
  url: 'profesores',
  title: 'Profesores'
},
  {
icon: 'chalkboard',
  name: 'profesores',
  url: 'profesores',
  title: 'Profesores'
},
  {
icon: 'chalkboard',
  name: 'profesores',
  url: 'profesores',
  title: 'Profesores'
}]

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
  <div class="container mx-auto">
    <h1 class="text-3xl">Index page!</h1>
    <h2>{{marco}}</h2>
    <button @click="onclick" class="btn btn-primary">click</button>
    <div class="grid grid-flow-col auto-cols-max gap-4">
      <nuxt-link :to="button.url" v-for="button in buttons" class="btn v-full w-full">
        <i class="fas" :class="`fa-${button.icon}`"></i>
        {{button.title}}
      </nuxt-link>
    </div>
  </div>
</template>

<style scoped>
/* code... */
</style>
