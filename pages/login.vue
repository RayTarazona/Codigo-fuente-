<script setup lang="ts">
// code...
  definePageMeta({
    layout: 'public'
  })

const router = useRouter();
const isAuthenticated = useState('authenticated', () => false);

const login = () => {
  isAuthenticated.value = true;
  router.push('/');
}

</script>

<template>
<div class="hero min-h-screen bg-primary text-base-100">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <div class="text-center lg:text-left">
      <h1 class="text-5xl font-bold">Iniciar sesión</h1>
      <p class="py-6">Por favor ingresa tus credenciales para iniciar sesión o contacta con algún miembro del personal administrativo para solicitar tus datos de inicio de sesión</p>
    </div>
    <div class="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form class="card-body" @submit.prevent="login">
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
          <label class="label">
            <nuxt-link to="/" class="label-text-alt link link-hover">Olvidó su Contraseña?</nuxt-link>
          </label>
        </div>
        <div class="form-control mt-6">
          <button class="btn btn-primary">Iniciar Sesión</button>
        </div>
      </form>
    </div>
  </div>
</div>
</template>

<style scoped>
/* code... */
</style>
