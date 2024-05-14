import {it, expect} from 'vitest'
import  {mountSuspended} from '@nuxt/test-utils/runtime'

import {AppDrawer} from '#components'

it('can Mount AppHeader', async () => {
  const component = await mountSuspended(AppDrawer);
  expect(component.text()).toContain('Control')
})
