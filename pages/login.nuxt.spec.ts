import {it, expect} from 'vitest'
import  {mountSuspended} from '@nuxt/test-utils/runtime'

import LoginPage from './login.vue'

it('can Mount Index page', async () => {
  const component = await mountSuspended(LoginPage);
  expect(component.text()).toContain('Iniciar')
})
