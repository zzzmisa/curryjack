import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'

import CjkAppResult from '@/components/organsms/CjkAppResult.vue'
import CjkResult from '@/components/molecules/CjkResult.vue'
import CjkCurry from '@/components/molecules/CjkCurry.vue'
import CjkCurryDetail from '@/components/molecules/CjkCurryDetail.vue'
import CjkResultShare from '@/components/molecules/CjkResultShare.vue'

const outFactory = () => {
  return shallowMount(CjkAppResult, {
    propsData: {
      hand: ['001', '002', '003']
    },
    stubs: ['router-link', 'b-modal', 'b-message']
  })
}

const moreFactory = () => {
  return shallowMount(CjkAppResult, {
    propsData: {
      hand: ['001', '002']
    },
    stubs: ['router-link', 'b-modal', 'b-message']
  })
}

describe('CjkResult.vue', () => {
  it('CjkResultを表示している', () => {
    const wrapper = outFactory()
    expect(wrapper.contains(CjkResult)).to.be.true
  })
  it('CjkCurryを正しい数表示している', () => {
    const wrapper = outFactory()
    expect(wrapper.findAll(CjkCurry).length).to.equal(3)
  })
  it('結果がもう少しの時、CjkCurryDetailを正しい数表示している', () => {
    const wrapper = moreFactory()
    expect(wrapper.findAll(CjkCurryDetail).length).to.equal(2)
  })
  it('結果がアウトの時、CjkCurryDetailを表示しない', () => {
    const wrapper = outFactory()
    expect(wrapper.contains(CjkCurryDetail)).to.be.false
  })
  it('結果がアウト時、注意書きを表示している', () => {
    const wrapper = outFactory()
    expect(wrapper.text()).to.includes('アウトだとカレーの詳細は表示されないよ。')
  })
  it('CjkResultShareを表示している', () => {
    const wrapper = outFactory()
    expect(wrapper.contains(CjkResultShare)).to.be.true
  })
})
