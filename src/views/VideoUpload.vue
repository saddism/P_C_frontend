<template>
  <div class="video-upload">
    <el-card class="upload-card">
      <template #header>
        <div class="card-header">
          <h2>上传视频分析</h2>
          <p>上传APP操作录屏，自动生成PRD和商业计划书</p>
        </div>
      </template>

      <div v-if="!isAuthenticated" class="auth-required">
        <el-alert
          title="请先登录"
          type="warning"
          description="您需要登录后才能上传视频"
          show-icon
        />
        <el-button type="primary" @click="handleLogin" class="login-button">
          去登录
        </el-button>
      </div>

      <div v-else>
        <el-upload
          class="upload-container"
          drag
          :action="uploadUrl"
          :before-upload="beforeUpload"
          :on-success="handleSuccess"
          :on-error="handleError"
          :on-progress="handleProgress"
          :headers="uploadHeaders"
          accept="video/*"
        >
          <el-icon class="el-icon-upload"><upload-filled /></el-icon>
          <div class="el-upload__text">
            拖拽视频文件到此处或 <em>点击上传</em>
          </div>
          <template #tip>
            <div class="el-upload__tip">
              支持上传MP4格式视频文件，文件大小不超过500MB
            </div>
          </template>
        </el-upload>

        <el-progress
          v-if="uploadProgress > 0 && uploadProgress < 100"
          :percentage="uploadProgress"
          :status="uploadStatus"
        />

        <div v-if="analyzing" class="analysis-status">
          <el-alert
            title="正在分析视频"
            type="info"
            description="请耐心等待，系统正在分析视频内容并生成文档..."
            show-icon
          />
          <el-progress :percentage="analysisProgress" />
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
import { UploadFilled } from '@element-plus/icons-vue'
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

export default {
  name: 'VideoUpload',
  components: {
    UploadFilled
  },
  setup() {
    const store = useStore()
    const router = useRouter()
    const uploadProgress = ref(0)
    const uploadStatus = ref('')
    const analyzing = ref(false)
    const analysisProgress = ref(0)

    const isAuthenticated = computed(() => store.state.auth.isAuthenticated)
    const uploadUrl = computed(() => {
      const baseUrl = process.env.VUE_APP_API_URL || 'https://auth-api-nvdempim.fly.dev'
      return `${baseUrl}/api/videos/upload`
    })
    const uploadHeaders = computed(() => ({
      Authorization: `Bearer ${store.state.auth.token}`
    }))

    const beforeUpload = (file) => {
      const isVideo = file.type.startsWith('video/')
      const isLt500M = file.size / 1024 / 1024 < 500

      if (!isVideo) {
        ElMessage.error('只能上传视频文件!')
        return false
      }
      if (!isLt500M) {
        ElMessage.error('视频大小不能超过 500MB!')
        return false
      }
      return true
    }

    const handleSuccess = (response) => {
      uploadProgress.value = 100
      uploadStatus.value = 'success'
      analyzing.value = true

      // Start polling for analysis status
      const pollInterval = setInterval(() => {
        // Simulate analysis progress for now
        if (analysisProgress.value < 100) {
          analysisProgress.value += 10
        } else {
          clearInterval(pollInterval)
          analyzing.value = false
          router.push({
            path: `/products/${response.productId}`,
            query: router.currentRoute.value.query
          })
        }
      }, 1000)
    }

    const handleError = () => {
      uploadStatus.value = 'exception'
      ElMessage.error('上传失败，请重试')
    }

    const handleProgress = (event) => {
      uploadProgress.value = Math.round(event.percent)
    }

    const handleLogin = () => {
      router.push({
        path: '/login',
        query: {
          ...router.currentRoute.value.query,
          redirect: router.currentRoute.value.fullPath
        }
      })
    }

    return {
      isAuthenticated,
      uploadUrl,
      uploadHeaders,
      uploadProgress,
      uploadStatus,
      analyzing,
      analysisProgress,
      beforeUpload,
      handleSuccess,
      handleError,
      handleProgress,
      handleLogin
    }
  }
}
</script>

<style scoped>
.video-upload {
  max-width: 800px;
  margin: 2rem auto;
  padding: 0 1rem;
}

.upload-card {
  border-radius: 8px;
}

.card-header {
  text-align: center;
}

.card-header h2 {
  margin: 0;
  font-size: 1.5rem;
  color: #303133;
}

.card-header p {
  margin: 0.5rem 0 0;
  color: #909399;
}

.auth-required {
  text-align: center;
  padding: 2rem;
}

.login-button {
  margin-top: 1rem;
}

.upload-container {
  width: 100%;
}

.el-upload__tip {
  color: #909399;
}

.analysis-status {
  margin-top: 1rem;
}

:deep(.el-upload-dragger) {
  width: 100%;
  height: 200px;
}

:deep(.el-icon-upload) {
  font-size: 48px;
  margin-bottom: 1rem;
  color: #409EFF;
}
</style>
