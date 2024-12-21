# P_C Frontend

## 功能特性 (Features)

### 1. 首页 (Homepage)
- 顶部介绍头图
- 视频上传按钮
- 产品列表展示
- 用户好评展示

### 2. 视频上传与分析 (Video Upload and Analysis)
- 用户认证要求
- 视频文件上传（最大500MB，仅支持MP4）
- 实时上传进度显示
- 视频分析状态实时反馈
- PRD文档生成展示
- 商业计划书生成展示

### 3. Mock数据支持 (Mock Data Support)
- 新增接口的模拟数据：
  - GET /api/videos - 获取视频列表
  - POST /api/videos/upload - 上传视频
  - GET /api/videos/:id/analysis-status - 获取分析状态
  - GET /api/videos/:id/prd - 获取PRD文档
  - GET /api/videos/:id/business-plan - 获取商业计划书

### 4. 路由配置 (Router Configuration)
- 新增路由：
  - `/` - 首页
  - `/upload` - 视频上传页面（需要登录）
- 现有路由：
  - `/login` - 登录页面
  - `/register` - 注册页面
  - `/register-success` - 注册成功页面

## 开发说明 (Development Guide)

### Mock数据使用 (Mock Data Usage)
- 在URL中添加 `?mock=1` 参数启用mock数据
- 示例：`http://localhost:8080/?mock=1`
- 页面跳转时会自动保持mock参数

### 本地开发 (Local Development)
```bash
# 安装依赖
npm install

# 启动开发服务器
npm run serve
```

## API集成 (API Integration)
- API服务：https://auth-api-nvdempim.fly.dev
- API文档：https://auth-api-nvdempim.fly.dev/docs

## 重要说明 (Important Notes)
- 所有API更改均为新增功能，未修改任何现有API
- 保持与现有认证系统的完全兼容
- 错误提示均使用中文
