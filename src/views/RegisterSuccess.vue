<template>
  <div class="success-container">
    <el-card class="success-card">
      <el-result icon="success" title="注册成功" sub-title="请前往邮箱完成验证">
        <template #extra>
          <el-button type="primary" @click="resendVerification">
            重新发送验证邮件
          </el-button>
          <el-button @click="$router.push('/login')">
            返回登录
          </el-button>
        </template>
      </el-result>
    </el-card>
  </div>
</template>

<script>
import { ElMessage } from 'element-plus'
import { api } from '@/utils/api'

export default {
  name: 'RegisterSuccess',
  methods: {
    async resendVerification() {
      try {
        const email = this.$route.query.email
        if (!email) {
          ElMessage.error('邮箱地址缺失')
          return
        }

        const response = await api.post('/api/auth/resend-verification', { email })
        if (response.status === 200) {
          ElMessage.success('验证邮件已重新发送')
        }
      } catch (error) {
        ElMessage.error('发送失败，请重试')
      }
    }
  }
}
</script>

<style scoped>
.success-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f5f7fa;
}

.success-card {
  width: 480px;
}
</style>
