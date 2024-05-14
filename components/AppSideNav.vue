<script setup lang="ts">
  const drawerShown = useState('drawerShown', () => true);
</script>

<template>
  <nav class="pt-4 text-base-100">
    <menu class="menu">
      <li>
        <nuxt-link to="/"class="text-base-100" active-class="active"><button class="btn btn-ghost btn-square btn-xs"><i class="fas fa-border-all fa-xl"></i></button>
          <span v-show="drawerShown" >
            Inicio
          </span>
        </nuxt-link>
      </li>
      <li>
        <details >
        <summary>
            <button class="btn btn-ghost btn-square btn-xs"><i class="fas fa-person-chalkboard fa-xl"></i></button>
            <span v-show="drawerShown" >
              Profesores
            </span>
        </summary>
        <ul>
          <li>
          <nuxt-link to="/profesores" class="text-base-100" active-class="active"><button class="btn btn-ghost btn-square btn-xs"><i class="fas fa-list fa-xl"></i></button>
            <span v-show="drawerShown" >
              Listar
            </span>
          </nuxt-link>
          </li>
          <li>
          <nuxt-link to="/profesores/agregar" class="text-base-100" active-class="active"><button class="btn btn-ghost btn-square btn-xs"><i class="fas fa-circle-plus fa-xl"></i></button>
            <span v-show="drawerShown" >
              Agregar
            </span>
          </nuxt-link>
          </li>
        </ul>
        </details>
      </li>
      <li>
        <details>
          <summary>
              <button class="btn btn-ghost btn-square btn-xs"><i class="fas fa-users fa-xl"></i></button>
              <span v-show="drawerShown" >
                Estudiantes
              </span>
          </summary>
          <ul>
            <li>
            <nuxt-link to="/estudiantes" class="text-base-100" active-class="active"><button class="btn btn-ghost btn-square btn-xs"><i class="fas fa-list fa-xl"></i></button>
              <span v-show="drawerShown" >
                Listar
              </span>
            </nuxt-link>
            </li>
            <li>
            <nuxt-link to="" class="text-base-100" active-class="active"><button class="btn btn-ghost btn-square btn-xs"><i class="fas fa-circle-plus fa-xl"></i></button>
              <span v-show="drawerShown" >
                Agregar
              </span>
            </nuxt-link>
            </li>
          </ul>
        </details>
      </li>

    </menu>
  </nav>
</template>

<style scoped>
/* code... */
</style>
