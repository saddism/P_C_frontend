import Mock from 'mockjs'

const API_BASE_URL = process.env.VUE_APP_API_URL || 'https://auth-api-nvdempim.fly.dev'

// Get all videos
Mock.mock(`${API_BASE_URL}/api/videos`, 'get', {
  status: 200,
  data: {
    videos: [
      {
        id: '1',
        title: 'Screen Fill Light',
        status: 'completed',
        prdUrl: '/api/videos/1/prd',
        businessPlanUrl: '/api/videos/1/business-plan'
      }
    ]
  }
})

// Upload video endpoint
Mock.mock(`${API_BASE_URL}/api/videos/upload`, 'post', {
  status: 200,
  data: {
    productId: '@id',
    message: '视频上传成功，正在分析中'
  }
})

// Get video analysis status
Mock.mock(/\/api\/videos\/\d+\/analysis-status/, 'get', {
  status: 200,
  data: {
    status: 'completed',
    progress: 100,
    prdUrl: '/api/videos/@id/prd',
    businessPlanUrl: '/api/videos/@id/business-plan'
  }
})

// Get PRD document
Mock.mock(/\/api\/videos\/\d+\/prd/, 'get', {
  status: 200,
  data: {
    content: `# 产品需求文档 (PRD)
## 1. 产品定位
- 目标用户群：专业内容创作者
- 核心价值：提升创作效率和质量
- 市场分析：内容创作市场持续增长

## 2. 功能需求
### 2.1 核心功能
- 智能场景识别
- 自动亮度调节
- 多模式切换

### 2.2 用户界面
- 简洁直观的控制面板
- 实时预览功能

## 3. 技术实现
采用先进的图像处理算法，结合智能传感器技术，实现自动场景识别和亮度调节。

## 4. 测试计划
包括功能测试、性能测试和用户体验测试，确保产品质量。`
  }
})

// Get Business Plan document
Mock.mock(/\/api\/videos\/\d+\/business-plan/, 'get', {
  status: 200,
  data: {
    content: `# 商业计划书
## 1. 市场分析
- 市场规模：内容创作市场规模超过1000亿
- 目标用户：专业视频创作者和直播主播
- 竞争分析：现有产品功能单一，缺乏智能化

## 2. 商业模式
- 收入来源：硬件销售和增值服务
- 定价策略：高端定位，突出产品价值
- 成本结构：研发投入和生产成本

## 3. 营销策略
通过社交媒体和KOL合作推广，建立品牌影响力

## 4. 发展规划
持续优化产品功能，拓展市场份额`
  }
})

export default Mock
