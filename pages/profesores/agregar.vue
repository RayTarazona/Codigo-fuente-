<script setup lang="ts">
definePageMeta({
  middleware: 'auth'
})
// code...
</script>

<template>
  <div class="container mx-auto flex flex-col items-center">
    <h1 class="text-3xl">
      Registrar
    </h1>
    <div class="card shrink-0 w-full sm:w-5/6 md:w-4/5 lg:w-3/4 xl:w-2/3 shadow-xl">
        <div class="card-body">
          <div class="flex flex-col md:flex-row gap-x-4">
            <div class="w-full">
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" class="input input-bordered" required />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" class="input input-bordered" required />
              </div>
            </div>
            <div class="w-full">
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" class="input input-bordered" required />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" class="input input-bordered" required />
              </div>
            </div>
          </div>
        <div class="card-actions justify-end">
            <button class="btn btn-base">Cancelar</button>
            <button class="btn btn-primary">Aceptar</button>
        </div>
        </div>
    </div>
  </div>
</template>

<style scoped>
/* code... */
</style>
