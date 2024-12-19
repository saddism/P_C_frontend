import { mount } from '@vue/test-utils'
import UserLogin from '@/views/Login.vue'
import { api } from '@/utils/api'
import { ElMessage } from 'element-plus'
import * as VueRouter from 'vue-router'

jest.mock('@/utils/api', () => ({
  api: {
    post: jest.fn()
  },
  isMockMode: jest.fn().mockReturnValue(true)
}))

jest.mock('element-plus', () => ({
  ElMessage: {
    success: jest.fn(),
    error: jest.fn()
  }
}))

jest.mock('vue-router', () => ({
  useRouter: jest.fn()
}))

describe('UserLogin.vue', () => {
  let wrapper
  let router

  beforeEach(() => {
    jest.clearAllMocks()
    router = {
      push: jest.fn()
    }
    VueRouter.useRouter.mockReturnValue(router)
    wrapper = mount(UserLogin, {
      global: {
        stubs: {
          'el-form': {
            template: '<form><slot /></form>',
            methods: {
              validate: (callback) => callback(true)
            }
          },
          'el-form-item': {
            template: '<div><slot /></div>'
          },
          'el-input': {
            template: `<div>
              <input
                :value="modelValue"
                @input="$emit('update:modelValue', $event.target.value)"
                :data-test="$attrs['data-test']" />
            </div>`,
            props: ['modelValue'],
            inheritAttrs: true
          },
          'el-button': {
            template: '<button type="button" @click="$emit(\'click\')"><slot /></button>'
          },
          'el-card': {
            template: '<div><slot /></div>'
          }
        }
      }
    })
  })

  it('renders login form', () => {
    expect(wrapper.find('.login-container').exists()).toBe(true)
    expect(wrapper.find('h2').text()).toBe('用户登录')
  })

  it('handles successful login', async () => {
    // Mock form validation to return true
    wrapper.vm.loginForm = {
      validate: (callback) => callback(true)
    }

    const mockResponse = {
      data: {
        status: 200,
        access_token: 'test-token',
        token_type: 'bearer'
      }
    }
    api.post.mockResolvedValueOnce(mockResponse)

    await wrapper.find('[data-test="email-input"] input').setValue('test@example.com')
    await wrapper.find('[data-test="password-input"] input').setValue('password123')
    await wrapper.find('[data-test="login-button"]').trigger('click')

    // Wait for all promises to resolve
    await wrapper.vm.$nextTick()
    await new Promise(resolve => setTimeout(resolve, 100))
    await wrapper.vm.$nextTick()

    expect(api.post).toHaveBeenCalledWith('https://auth-api-nvdempim.fly.dev/api/auth/login', {
      email: 'test@example.com',
      password: 'password123'
    })
    expect(ElMessage.success).toHaveBeenCalledWith('登录成功')
    expect(router.push).toHaveBeenCalledWith({ path: '/', query: {} })
  })

  it('handles login failure', async () => {
    const errorMessage = '登录失败，请重试'
    api.post.mockRejectedValueOnce({
      response: {
        data: {
          message: errorMessage
        }
      }
    })

    await wrapper.find('[data-test="email-input"] input').setValue('test@example.com')
    await wrapper.find('[data-test="password-input"] input').setValue('wrongpassword')
    await wrapper.find('[data-test="login-button"]').trigger('click')
    await wrapper.vm.$nextTick()
    await new Promise(resolve => setTimeout(resolve, 0)) // Wait for API promise

    expect(ElMessage.error).toHaveBeenCalledWith(errorMessage)
  })
})
