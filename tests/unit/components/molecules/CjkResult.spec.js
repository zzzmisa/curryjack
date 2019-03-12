import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import CjkResult from '@/components/molecules/CjkResult.vue'
import config from '@/constants/config.js'
import perfect from '@/assets/perfect.png'
import out from '@/assets/out.png'
import more from '@/assets/more.png'
import hungry from '@/assets/hungry.png'

describe('CjkResult.vue', () => {
  it('パーフェクトの表示', () => {
    const wrapper = shallowMount(CjkResult, {
      propsData: {
        total: config.cjscore
      }
    })
    expect(wrapper.find('img').attributes().src).to.equal(perfect)
  })
  it('アウトの表示', () => {
    const wrapper = shallowMount(CjkResult, {
      propsData: {
        total: config.cjscore + 100
      }
    })
    expect(wrapper.find('img').attributes().src).to.equal(out)
  })
  it('もう少しの表示', () => {
    const wrapper = shallowMount(CjkResult, {
      propsData: {
        total: config.cjscore - 100
      }
    })
    expect(wrapper.find('img').attributes().src).to.equal(more)
  })
  it('まだまだの表示', () => {
    const wrapper = shallowMount(CjkResult, {
      propsData: {
        total: config.cjscore - 1100
      }
    })
    expect(wrapper.find('img').attributes().src).to.equal(hungry)
  })
})
