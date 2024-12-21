<template>
  <div class="register-container">
    <el-card class="register-card">
      <h2>用户注册</h2>
      <el-form
        ref="registerForm"
        :model="form"
        :rules="rules"
        label-width="80px"
        class="register-form"
      >
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="form.email" type="email" placeholder="请输入邮箱"></el-input>
        </el-form-item>

        <el-form-item label="用户名" prop="username">
          <el-input v-model="form.username" placeholder="请输入用户名"></el-input>
        </el-form-item>

        <el-form-item label="密码" prop="password">
          <el-input v-model="form.password" type="password" placeholder="请输入密码"></el-input>
        </el-form-item>

        <el-form-item label="验证码" prop="code" v-if="showVerificationCode">
          <el-input v-model="form.code" placeholder="请输入验证码">
            <template #append>
              <el-button
                :disabled="countdown > 0"
                @click="handleSendCode"
              >
                {{ countdown > 0 ? `${countdown}秒后重试` : '获取验证码' }}
              </el-button>
            </template>
          </el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="handleRegister" :loading="loading">
            注册
          </el-button>
          <el-button @click="$router.push('/login')">返回登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
import { auth } from '@/services/api'

export default {
  name: 'Register',
  setup() {
    const router = useRouter()
    const registerForm = ref(null)
    const loading = ref(false)
    const showVerificationCode = ref(false)
    const countdown = ref(0)

    const form = reactive({
      email: '',
      username: '',
      password: '',
      code: ''
    })

    const rules = {
      email: [
        { required: true, message: '请输入邮箱', trigger: 'blur' },
        { type: 'email', message: '请输入正确的邮箱格式', trigger: 'blur' }
      ],
      username: [
        { required: true, message: '请输入用户名', trigger: 'blur' },
        { min: 3, max: 20, message: '用户名长度在3到20个字符之间', trigger: 'blur' },
        { pattern: /^[a-zA-Z0-9_-]+$/, message: '用户名只能包含字母、数字、下划线和连字符', trigger: 'blur' }
      ],
      password: [
        { required: true, message: '请输入密码', trigger: 'blur' },
        { min: 8, message: '密码长度至少为8个字符', trigger: 'blur' },
        { pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]+$/, message: '密码必须包含字母和数字', trigger: 'blur' }
      ],
      code: [
        { required: () => showVerificationCode.value, message: '请输入验证码', trigger: 'blur' },
        { len: 6, message: '验证码长度为6位', trigger: 'blur', validator: (rule, value, callback) => {
          if (!showVerificationCode.value || (value && value.length === 6)) callback();
          else callback(new Error('验证码长度为6位'));
        }}
      ]
    }

    const startCountdown = () => {
      countdown.value = 60
      const timer = setInterval(() => {
        countdown.value--
        if (countdown.value <= 0) {
          clearInterval(timer)
        }
      }, 1000)
    }

    const handleSendCode = async () => {
      try {
        const useMock = window.location.search.includes('mock=1');
        const response = await auth.resendVerification({
          email: form.email
        }, useMock);
        if (response.data.status === 200) {
          startCountdown();
          showVerificationCode.value = true;
          ElMessage.success('验证码已发送，请查收邮件');
        }
      } catch (error) {
        ElMessage.error('发送验证码失败，请重试');
      }
    }

    const handleRegister = async () => {
      if (!registerForm.value) return;

      // Only validate code field if verification code is shown
      const fieldsToValidate = showVerificationCode.value ? ['email', 'username', 'password', 'code'] : ['email', 'username', 'password'];

      try {
        await registerForm.value.validateField(fieldsToValidate);
        loading.value = true;

        const useMock = window.location.search.includes('mock=1');
        const response = await auth.register({
          email: form.email,
          username: form.username,
          password: form.password
        }, useMock);

        if (response.data.status === 201) {
          ElMessage.success('注册成功');
          router.push('/login');
        }
      } catch (error) {
        if (error.response) {
          if (error.response.status === 400 && error.response.data?.detail === 'Email already registered') {
            ElMessage.error('该邮箱已被注册，请使用其他邮箱');
          } else if (error.response.status === 422) {
            ElMessage.error('请检查输入格式是否正确');
          } else {
            ElMessage.error('注册失败，请稍后重试');
          }
        } else {
          ElMessage.error('注册失败，请稍后重试');
        }
        loading.value = false;
      }
    }

    return {
      registerForm,
      form,
      rules,
      loading,
      showVerificationCode,
      countdown,
      handleSendCode,
      handleRegister
    }
  }
}
</script>

<style scoped>
.register-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f5f7fa;
}

.register-card {
  width: 480px;
}

.register-form {
  margin-top: 20px;
}
</style>
