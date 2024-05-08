<script setup lang="ts">
// code...
  const drawerShown = useState('drawerShown');
</script>

<template class="">
  <section class="min-h-screen h-full flex flex-col bg-primary">
    <app-header />
      <main class="flex-1 flex">
        <nav class="pt-4 px-2">
          <menu class="menu h-full">
            <li>
              <nuxt-link to="/"class="text-base-100" active-class="active"><button class="btn btn-ghost btn-square btn-xs"><i class="fas fa-list fa-xl"></i></button>
                <span :class="{block:drawerShown, hidden: !drawerShown}" >
                  Inicio
                </span>
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/profesores" class="text-base-100" active-class="active"><button class="btn btn-ghost btn-square btn-xs"><i class="fas fa-person-chalkboard fa-xl"></i></button>
                <span :class="{block:drawerShown, hidden: !drawerShown}" >
                  Profesores
                </span>
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/estudiantes" class="text-base-100" active-class="active"><button class="btn btn-ghost btn-square btn-xs"><i class="fas fa-users fa-xl"></i></button>
                <span :class="{block:drawerShown, hidden: !drawerShown}" >
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
