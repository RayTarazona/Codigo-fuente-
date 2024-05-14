import {it, expect} from 'vitest'
import  {mountSuspended} from '@nuxt/test-utils/runtime'

import IndexPage from './index.vue'

it('can Mount Index page', async () => {
  const component = await mountSuspended(IndexPage);
  expect(component.text()).toContain('Estudiantes')
})
