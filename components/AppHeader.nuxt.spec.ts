import {it, expect} from 'vitest'
import  {mountSuspended} from '@nuxt/test-utils/runtime'

import {AppHeader} from '#components'

it('can Mount AppHeader', async () => {
  const component = await mountSuspended(AppHeader);
  expect(component.text()).toContain('Control')
})
