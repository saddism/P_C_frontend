import { mount } from '@vue/test-utils'
import UserRegister from '@/views/Register.vue'

describe('UserRegister.vue', () => {
  it('renders register form', () => {
    const wrapper = mount(UserRegister)
    expect(wrapper.find('.register-container').exists()).toBe(true)
    expect(wrapper.find('h2').text()).toBe('用户注册')
  })
})
