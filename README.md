# AI Chat Demo

一个基于 React + TypeScript + GraphQL + DeepSeek API 的 Claude 风格 AI 聊天界面。

## ✨ 特性

- 🎨 **Claude风格设计** - 简洁优雅的用户界面
- ⚛️ **React + TypeScript** - 类型安全的现代前端开发
- 🔗 **GraphQL** - 高效的数据查询和变更
- 🤖 **DeepSeek API** - 强大的AI对话能力
- 📱 **响应式设计** - 支持各种设备尺寸
- ⚡ **实时对话** - 流畅的聊天体验
- 🎯 **现代化工具链** - Tailwind CSS, Apollo Client 等

## 🚀 快速开始

### 前置要求

- Node.js 16+
- npm 或 yarn
- DeepSeek API Key

### 安装依赖

```bash
npm install
```

### 环境配置

1. 复制环境变量文件：
```bash
cp .env.example .env
```

2. 编辑 `.env` 文件，填入你的 DeepSeek API Key：
```env
DEEPSEEK_API_KEY=your-deepseek-api-key-here
```

### 运行项目

#### 方式一：同时启动前后端
```bash
npm run dev
```

#### 方式二：分别启动

启动 GraphQL 服务器：
```bash
npm run server
```

启动 React 前端：
```bash
npm start
```

访问 http://localhost:3000 即可使用聊天界面。

## 🏗️ 项目结构

```
ai-chat-demo/
├── src/                    # React 前端源码
│   ├── components/         # React 组件
│   │   ├── ChatInterface.tsx
│   │   ├── MessageBubble.tsx
│   │   ├── MessageInput.tsx
│   │   ├── LoadingIndicator.tsx
│   │   └── Header.tsx
│   ├── apollo/            # GraphQL 配置
│   │   ├── client.ts
│   │   └── mutations.ts
│   ├── types/             # TypeScript 类型定义
│   └── ...
├── server/                # GraphQL 服务器
│   ├── index.js          # 服务器入口
│   ├── schema.js         # GraphQL Schema
│   └── resolvers.js      # GraphQL Resolvers
├── public/               # 静态资源
└── ...
```

## 🛠️ 技术栈

### 前端
- **React 18** - 用户界面库
- **TypeScript** - 类型安全的 JavaScript
- **Apollo Client** - GraphQL 客户端
- **Tailwind CSS** - 原子化 CSS 框架
- **Lucide React** - 现代图标库

### 后端
- **Apollo Server** - GraphQL 服务器
- **Express.js** - Node.js Web 框架
- **OpenAI SDK** - 用于调用 DeepSeek API
- **CORS** - 跨域资源共享

## 🎨 界面特色

- **Claude 风格设计**：采用简洁的橙色主题色彩
- **现代化布局**：卡片式消息气泡，清晰的视觉层次
- **响应式设计**：自适应桌面和移动设备
- **优雅动画**：加载状态和交互反馈
- **可访问性**：良好的键盘导航和屏幕阅读器支持

## 📝 使用说明

1. **获取 DeepSeek API Key**
   - 访问 [DeepSeek 官网](https://www.deepseek.com/)
   - 注册账号并获取 API Key
   - 将 API Key 配置到 `.env` 文件中

2. **开始对话**
   - 启动项目后，在输入框中输入消息
   - 按 Enter 发送消息
   - 使用 Shift + Enter 可以换行

3. **功能特性**
   - 支持多行文本输入
   - 自动滚动到最新消息
   - 消息时间戳显示
   - 加载状态指示

## ⭐ 如果这个项目对你有帮助，请给个 Star 支持一下！
