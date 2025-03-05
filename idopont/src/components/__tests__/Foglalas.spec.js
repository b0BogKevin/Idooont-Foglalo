import { describe, it, expect, beforeEach } from 'vitest'

import { mount } from '@vue/test-utils'
import Foglalas from '../../views/FoglalasView.vue'
import { createPinia, setActivePinia } from 'pinia'
import { usetimeStore } from '@/stores/ido.js'
describe('Foglalás', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('Tartalom ellenőrzése', () => {
    const wrapper = mount(Foglalas)
    expect(wrapper.text()).toContain('időpont foglalás')
  })

  it('store ellenőrzése', async() => {
    const wrapper = mount(Foglalas)
    const store = usetimeStore()
    await wrapper.find("#nap").setValue(1)
    await wrapper.find("#ora").setValue(16)
    await wrapper.find("#button").trigger("click")
    expect(store.nap).toBe("1")
    expect(store.ora).toBe(16)
  })


})
