import { mount } from '@vue/test-utils'
import UserLogin from '@/views/Login.vue'

describe('UserLogin.vue', () => {
  it('renders login form', () => {
    const wrapper = mount(UserLogin)
    expect(wrapper.find('.login-container').exists()).toBe(true)
    expect(wrapper.find('h2').text()).toBe('用户登录')
  })
})
