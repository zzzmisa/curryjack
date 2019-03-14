import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import CjkAppResult from '@/components/organsms/CjkAppResult.vue'
import config from '@/constants/config.js'

describe('CjkResult.vue', () => {
  it('アウト時の注意書き', () => {
    const wrapper = shallowMount(CjkAppResult, {
      propsData: {
        hand: ['001', '002', '003']
      }
    })
    expect(wrapper.find('b-message').text()).to.equal('アウトだとカレーの詳細は表示されないよ。')
  })
})
