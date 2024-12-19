import { mount } from '@vue/test-utils'
import UserRegister from '@/views/Register.vue'
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

describe('UserRegister.vue', () => {
  let wrapper
  let router

  beforeEach(() => {
    jest.clearAllMocks()
    router = {
      push: jest.fn()
    }
    VueRouter.useRouter.mockReturnValue(router)
    wrapper = mount(UserRegister, {
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
              <div v-if="$slots.append" class="append-container">
                <slot name="append"></slot>
              </div>
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

  it('renders register form', () => {
    expect(wrapper.find('.register-container').exists()).toBe(true)
    expect(wrapper.find('h2').text()).toBe('用户注册')
  })

  it('handles verification code request', async () => {
    // Set showVerificationCode ref directly through the component
    wrapper.vm.showVerificationCode = true;
    await wrapper.vm.$nextTick();

    // Set email value before sending code
    await wrapper.find('[data-test="email-input"] input').setValue('test@example.com');
    await wrapper.vm.$nextTick();

    const mockResponse = {
      data: {
        status: 200,
        message: '验证码已发送，请查收邮件'
      }
    };
    api.post.mockResolvedValueOnce(mockResponse);

    const sendCodeButton = wrapper.find('[data-test="send-code-button"]');
    expect(sendCodeButton.exists()).toBe(true);
    await sendCodeButton.trigger('click');
    await wrapper.vm.$nextTick();
    await new Promise(resolve => setTimeout(resolve, 0)); // Wait for API promise

    expect(api.post).toHaveBeenCalledWith('https://auth-api-nvdempim.fly.dev/api/auth/resend-verification', {
      email: 'test@example.com'
    });
    expect(ElMessage.success).toHaveBeenCalledWith('验证码已发送，请查收邮件');
  })

  it('handles successful registration', async () => {
    // Set showVerificationCode ref directly through the component
    wrapper.vm.showVerificationCode = true
    await wrapper.vm.$nextTick()

    const mockResponse = {
      data: {
        status: 201,
        message: '注册成功'
      }
    }
    api.post.mockResolvedValueOnce(mockResponse)

    await wrapper.find('[data-test="email-input"] input').setValue('test@example.com')
    await wrapper.find('[data-test="username-input"] input').setValue('testuser')
    await wrapper.find('[data-test="password-input"] input').setValue('password123')
    await wrapper.find('[data-test="code-input"] input').setValue('123456')
    await wrapper.find('[data-test="register-button"]').trigger('click')

    // Wait for all promises to resolve
    await wrapper.vm.$nextTick()
    await new Promise(resolve => setTimeout(resolve, 100))
    await wrapper.vm.$nextTick()

    expect(api.post).toHaveBeenCalledWith('https://auth-api-nvdempim.fly.dev/api/auth/register', {
      email: 'test@example.com',
      username: 'testuser',
      password: 'password123',
      code: '123456'
    })
    expect(ElMessage.success).toHaveBeenCalledWith('注册成功')
    expect(router.push).toHaveBeenCalledWith({
      path: '/register-success',
      query: { email: 'test@example.com' }
    })
  })
})
