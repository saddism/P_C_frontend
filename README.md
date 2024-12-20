# P_C Frontend

## 新增功能 (New Features)

### 1. 首页 (Homepage)
- 新增 `Home.vue` 组件，包含：
  - 介绍头图展示
  - 视频上传入口按钮
  - 产品列表展示区域
  - 用户好评展示区域

### 2. 视频上传与分析页面 (Video Upload and Analysis)
- 新增 `VideoUpload.vue` 组件，实现：
  - 视频文件上传功能（最大500MB）
  - 视频分析状态展示
  - PRD文档生成展示
  - 商业计划书生成展示

### 3. Mock数据支持 (Mock Data Support)
- 新增 `mock/video.mock.js`，支持以下接口的模拟数据：
  - GET /api/videos - 获取视频列表
  - POST /api/videos/upload - 上传视频
  - GET /api/videos/:id/analysis-status - 获取分析状态
  - GET /api/videos/:id/prd - 获取PRD文档
  - GET /api/videos/:id/business-plan - 获取商业计划书

### 4. 路由配置更新 (Router Updates)
- 新增路由：
  - `/` - 首页
  - `/upload` - 视频上传页面（需要登录）
- 保持现有路由不变：
  - `/login` - 登录页面
  - `/register` - 注册页面
  - `/register-success` - 注册成功页面

### Mock数据使用说明 (Mock Data Usage)
- 在URL中添加 `?mock=1` 参数启用mock数据
- 示例：`http://localhost:8080/?mock=1`
- 页面跳转时会自动保持mock参数

### API文档 (API Documentation)
- 已实现的API服务：https://auth-api-nvdempim.fly.dev
- API文档：https://auth-api-nvdempim.fly.dev/docs

注意：所有API更改均为新增功能，未修改任何现有API。
