import {it, expect} from 'vitest'
import  {mountSuspended} from '@nuxt/test-utils/runtime'

import Page from './agregar.vue'

it('can Mount agregar profesores page', async () => {
  const component = await mountSuspended(Page);
  expect(component.text()).toContain('Registrar')
})
