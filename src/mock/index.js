import Mock from 'mockjs'
import './video.mock'

// Enable mock based on URL parameter
const enableMock = new URLSearchParams(window.location.search).get('mock') === '1'

if (!enableMock) {
  Mock.restore() // Disable all mock if mock=1 is not present
} else {
  // 注册接口
  Mock.mock('/api/auth/register', 'post', (options) => {
    const { email, username } = JSON.parse(options.body)

    // 模拟邮箱已存在的情况
    if (email === 'exists@example.com') {
      return {
        status: 409,
        message: '邮箱已被注册'
      }
    }

    // 模拟用户名已存在的情况
    if (username === 'existinguser') {
      return {
        status: 409,
        message: '用户名已被使用'
      }
    }

    return {
      status: 201,
      message: '注册成功，请查收验证邮件'
    }
  })

  // 邮箱验证接口
  Mock.mock('/api/auth/verify-email', 'post', (options) => {
    const { code } = JSON.parse(options.body)

    if (code === '000000') {
      return {
        status: 400,
        message: '验证码已过期'
      }
    }

    if (code === '123456') {
      return {
        status: 200,
        message: '邮箱验证成功'
      }
    }

    return {
      status: 400,
      message: '验证码错误'
    }
  })

  // 登录接口
  Mock.mock('/api/auth/login', 'post', (options) => {
    const { email, password } = JSON.parse(options.body)

    if (email === 'unverified@example.com') {
      return {
        status: 403,
        message: '邮箱未验证'
      }
    }

    if (password === 'wrongpassword') {
      return {
        status: 401,
        message: '邮箱或密码错误'
      }
    }

    return {
      status: 200,
      data: {
        token: 'mock-jwt-token',
        user: {
          email,
          username: 'mockuser'
        }
      }
    }
  })

  // 重发验证码接口
  Mock.mock('/api/auth/resend-verification', 'post', () => {
    return {
      status: 200,
      message: '验证码已重新发送'
    }
  })
}

// Export enableMock for use in router navigation guards
export default enableMock
