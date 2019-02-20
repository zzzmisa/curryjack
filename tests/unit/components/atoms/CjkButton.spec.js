import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import CjkButton from '@/components/atoms/CjkButton.vue'

describe('CjkButton.vue', () => {
  it('mount', () => {
    const wrapper = shallowMount(CjkButton)
    expect(wrapper.isVueInstance()).to.be.true
  })
})
