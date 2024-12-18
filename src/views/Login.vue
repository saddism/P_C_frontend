<template>
  <div class="login-container">
    <el-card class="login-card">
      <h2>用户登录</h2>
      <el-form
        ref="loginForm"
        :model="form"
        :rules="rules"
        label-width="80px"
        class="login-form"
      >
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="form.email" type="email" placeholder="请输入邮箱"></el-input>
        </el-form-item>

        <el-form-item label="密码" prop="password">
          <el-input v-model="form.password" type="password" placeholder="请输入密码"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="handleLogin" :loading="loading">
            登录
          </el-button>
          <el-button @click="$router.push('/register')">注册账号</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
import axios from 'axios'

export default {
  name: 'UserLogin',
  setup() {
    const router = useRouter()
    const loginForm = ref(null)
    const loading = ref(false)

    const form = reactive({
      email: '',
      password: ''
    })

    const rules = {
      email: [
        { required: true, message: '请输入邮箱', trigger: 'blur' },
        { type: 'email', message: '请输入正确的邮箱格式', trigger: 'blur' }
      ],
      password: [
        { required: true, message: '请输入密码', trigger: 'blur' }
      ]
    }

    const handleLogin = async () => {
      if (!loginForm.value) return

      await loginForm.value.validate(async (valid) => {
        if (valid) {
          loading.value = true
          try {
            const response = await axios.post('/api/auth/login', form)
            if (response.data.status === 200) {
              const { token } = response.data.data
              localStorage.setItem('token', token)
              ElMessage.success('登录成功')
              router.push('/')
            }
          } catch (error) {
            const message = error.response?.data?.message || '登录失败，请重试'
            ElMessage.error(message)
          } finally {
            loading.value = false
          }
        }
      })
    }

    return {
      loginForm,
      form,
      rules,
      loading,
      handleLogin
    }
  }
}
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f5f7fa;
}

.login-card {
  width: 480px;
}

.login-form {
  margin-top: 20px;
}
</style>
