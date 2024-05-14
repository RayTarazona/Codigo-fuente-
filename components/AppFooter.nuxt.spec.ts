import {it, expect} from 'vitest'
import  {mountSuspended} from '@nuxt/test-utils/runtime'

import AppFooter from './AppFooter.vue'

it('can Mount AppFooter', async () => {
  const component = await mountSuspended(AppFooter);
  expect(component.text()).toContain('Copyright')
})
