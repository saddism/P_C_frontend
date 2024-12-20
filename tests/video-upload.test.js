import { mount } from '@vue/test-utils'
import { createStore } from 'vuex'
import { createRouter, createWebHistory } from 'vue-router'
import VideoUpload from '../src/views/VideoUpload.vue'
import axios from 'axios'
import { ElMessage } from 'element-plus'

// Mock axios
jest.mock('axios')
// Mock element-plus message
jest.mock('element-plus', () => ({
  ElMessage: {
    error: jest.fn(),
    warning: jest.fn()
  }
}))

describe('VideoUpload.vue', () => {
  let wrapper
  let store
  let router

  beforeEach(() => {
    // Setup store
    store = createStore({
      modules: {
        auth: {
          state: {
            isAuthenticated: true,
            token: 'test-token'
          }
        }
      }
    })

    // Setup router
    router = createRouter({
      history: createWebHistory(),
      routes: [{ path: '/', component: {} }]
    })

    // Mount component
    wrapper = mount(VideoUpload, {
      global: {
        plugins: [store, router],
        stubs: ['el-card', 'el-upload', 'el-progress', 'el-alert', 'el-button']
      }
    })
  })

  test('shows upload progress during file upload', async () => {
    const file = new File(['test video'], 'test.mp4', { type: 'video/mp4' })
    const uploadEvent = { percent: 50 }

    await wrapper.vm.handleProgress(uploadEvent)
    expect(wrapper.vm.uploadProgress).toBe(50)
  })

  test('updates analysis status during video processing', async () => {
    const response = { videoId: 'test-id' }
    axios.get.mockResolvedValueOnce({
      data: { status: 'processing', progress: 30 }
    })

    await wrapper.vm.handleSuccess(response)
    expect(wrapper.vm.analyzing).toBe(true)
    expect(wrapper.vm.analysisProgress).toBe(30)
  })

  test('handles upload errors correctly', async () => {
    const error = {
      response: {
        data: {
          detail: '文件太大'
        }
      }
    }

    await wrapper.vm.handleError(error)
    expect(wrapper.vm.uploadStatus).toBe('exception')
    expect(ElMessage.error).toHaveBeenCalledWith('文件太大')
  })

  test('validates file size and type before upload', () => {
    const validFile = new File(['test'], 'test.mp4', { type: 'video/mp4' })
    Object.defineProperty(validFile, 'size', { value: 1024 * 1024 }) // 1MB

    const invalidTypeFile = new File(['test'], 'test.txt', { type: 'text/plain' })
    const largeFile = new File(['test'], 'large.mp4', { type: 'video/mp4' })
    Object.defineProperty(largeFile, 'size', { value: 600 * 1024 * 1024 }) // 600MB

    expect(wrapper.vm.beforeUpload(validFile)).toBe(true)
    expect(wrapper.vm.beforeUpload(invalidTypeFile)).toBe(false)
    expect(wrapper.vm.beforeUpload(largeFile)).toBe(false)
  })

  test('redirects to login for unauthenticated users', async () => {
    store.state.auth.isAuthenticated = false
    await wrapper.vm.$nextTick()

    const loginButton = wrapper.find('.login-button')
    await loginButton.trigger('click')

    expect(router.currentRoute.value.path).toBe('/login')
  })
})
