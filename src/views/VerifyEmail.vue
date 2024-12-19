<template>
  <div class="verify-container">
    <el-card class="verify-card">
      <el-form
        ref="verifyForm"
        :model="form"
        :rules="rules"
        label-width="120px"
        class="verify-form"
      >
        <h2>邮箱验证</h2>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="form.email" disabled></el-input>
        </el-form-item>
        <el-form-item label="验证码" prop="code">
          <el-input v-model="form.code" placeholder="请输入验证码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm">验证</el-button>
          <el-button @click="resendCode">重新发送验证码</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import { ElMessage } from 'element-plus'
import { api } from '@/utils/api'

export default {
  name: 'VerifyEmail',
  data() {
    return {
      form: {
        email: '',
        code: ''
      },
      rules: {
        email: [
          { required: true, message: '请输入邮箱地址', trigger: 'blur' },
          { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur' }
        ],
        code: [
          { required: true, message: '请输入验证码', trigger: 'blur' },
          { min: 6, max: 6, message: '验证码长度为6位', trigger: 'blur' }
        ]
      }
    }
  },
  created() {
    // Get email from route query
    this.form.email = this.$route.query.email || ''
  },
  methods: {
    async submitForm() {
      try {
        await this.$refs.verifyForm.validate()
        const response = await api.post('/api/auth/verify-email', this.form)

        if (response.status === 200) {
          ElMessage.success('邮箱验证成功')
          this.$router.push('/login')
        }
      } catch (error) {
        if (error.response?.status === 422) {
          ElMessage.error('验证失败：验证码无效')
        } else {
          ElMessage.error('验证失败，请重试')
        }
      }
    },
    async resendCode() {
      try {
        const response = await api.post('/api/auth/resend-verification', {
          email: this.form.email
        })

        if (response.status === 200) {
          ElMessage.success('验证码已重新发送')
        }
      } catch (error) {
        ElMessage.error('发送失败，请重试')
      }
    }
  }
}
</script>

<style scoped>
.verify-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f5f7fa;
}

.verify-card {
  width: 480px;
}

.verify-form {
  padding: 20px;
}

h2 {
  text-align: center;
  margin-bottom: 30px;
}
</style>
