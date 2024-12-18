<template>
  <div class="success-container">
    <el-card class="success-card">
      <el-result
        icon="success"
        title="注册成功"
        sub-title="请前往邮箱完成验证"
      >
        <template #extra>
          <el-button type="primary" @click="$router.push('/login')">
            返回登录
          </el-button>
        </template>
      </el-result>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'RegisterSuccess'
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
