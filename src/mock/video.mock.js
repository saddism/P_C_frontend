import Mock from 'mockjs'

const API_BASE_URL = process.env.VUE_APP_API_URL || 'https://auth-api-nvdempim.fly.dev'

Mock.mock(`${API_BASE_URL}/api/videos/upload`, 'post', {
  status: 200,
  data: {
    productId: '@id',
    message: '视频上传成功，正在分析中'
  }
})

Mock.mock(/\/api\/videos\/\d+\/analysis-status/, 'get', {
  status: 200,
  data: {
    status: 'completed',
    progress: 100,
    prdUrl: '/api/videos/@id/prd',
    businessPlanUrl: '/api/videos/@id/business-plan'
  }
})

export default Mock
