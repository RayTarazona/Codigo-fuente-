<script setup lang="ts">
// code...
  const drawerShown = useState('drawerShown');
</script>

<template class="">
  <section class="min-h-screen h-full flex flex-col bg-primary">
    <app-header />
      <main class="flex-1 flex">
        <nav class="pt-4">
          <menu class="menu">
            <li>
              <nuxt-link to="/"class="text-base-100" active-class="active"><button class="btn btn-ghost btn-square btn-xs"><i class="fas fa-border-all fa-xl"></i></button>
                <span v-show="drawerShown" >
                  Inicio
                </span>
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/profesores" class="text-base-100" active-class="active"><button class="btn btn-ghost btn-square btn-xs"><i class="fas fa-person-chalkboard fa-xl"></i></button>
                <span v-show="drawerShown" >
                  Profesores
                </span>
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/estudiantes" class="text-base-100" active-class="active"><button class="btn btn-ghost btn-square btn-xs"><i class="fas fa-users fa-xl"></i></button>
                <span v-show="drawerShown" >
                  Estudiantes
                </span>
              </nuxt-link>
            </li>

          </menu>
        </nav>
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
