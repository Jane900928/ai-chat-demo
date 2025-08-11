# 部署指南

本文档介绍如何在不同平台上部署 AI Chat Demo 应用。

## 前置要求

- DeepSeek API Key
- Node.js 16+ (本地开发)
- Docker (Docker 部署)

## Vercel 部署 (推荐)

### 快速部署

1. **Fork 项目**
   - 访问 [项目页面](https://github.com/Jane900928/ai-chat-demo)
   - 点击 "Fork" 按钮

2. **连接 Vercel**
   - 访问 [Vercel](https://vercel.com)
   - 导入您的 Fork 项目

3. **配置环境变量**
   - 在 Vercel 项目设置中添加环境变量：
   ```
   DEEPSEEK_API_KEY=your-deepseek-api-key
   ```

4. **部署**
   - Vercel 会自动构建和部署
   - 获取部署 URL

### 自定义域名

在 Vercel 项目设置中添加自定义域名：

1. 进入项目设置
2. 点击 "Domains"
3. 添加您的域名
4. 配置 DNS 记录

## Docker 部署

### 构建镜像

```bash
# 克隆项目
git clone https://github.com/Jane900928/ai-chat-demo.git
cd ai-chat-demo

# 构建 Docker 镜像
docker build -t ai-chat-demo .
```

### 运行容器

```bash
# 创建 .env 文件
echo "DEEPSEEK_API_KEY=your-api-key" > .env

# 运行容器
docker run -p 4000:4000 --env-file .env ai-chat-demo
```

### Docker Compose

创建 `docker-compose.yml`：

```yaml
version: '3.8'
services:
  ai-chat:
    build: .
    ports:
      - "4000:4000"
    environment:
      - DEEPSEEK_API_KEY=${DEEPSEEK_API_KEY}
    restart: unless-stopped
```

运行：
```bash
docker-compose up -d
```

## 云服务器部署

### Ubuntu/Debian 服务器

1. **安装 Node.js**
   ```bash
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs
   ```

2. **克隆项目**
   ```bash
   git clone https://github.com/Jane900928/ai-chat-demo.git
   cd ai-chat-demo
   ```

3. **安装依赖**
   ```bash
   npm install
   cd server && npm install && cd ..
   ```

4. **配置环境变量**
   ```bash
   cp .env.example .env
   # 编辑 .env 文件，添加您的 API Key
   ```

5. **构建前端**
   ```bash
   npm run build
   ```

6. **使用 PM2 运行**
   ```bash
   npm install -g pm2
   pm2 start server/index.js --name "ai-chat-demo"
   pm2 startup
   pm2 save
   ```

### Nginx 反向代理

创建 Nginx 配置文件：

```nginx
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://localhost:4000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

## 其他平台

### Heroku

1. 安装 Heroku CLI
2. 创建应用：`heroku create your-app-name`
3. 设置环境变量：`heroku config:set DEEPSEEK_API_KEY=your-key`
4. 部署：`git push heroku main`

### Railway

1. 连接 GitHub 账户
2. 导入项目
3. 设置环境变量
4. 自动部署

### DigitalOcean App Platform

1. 创建新应用
2. 连接 GitHub 仓库
3. 配置构建和运行命令
4. 设置环境变量

## 环境变量说明

| 变量名 | 必需 | 默认值 | 说明 |
|--------|------|--------|---------|
| `DEEPSEEK_API_KEY` | 是 | - | DeepSeek API 密钥 |
| `PORT` | 否 | 4000 | 服务器端口 |
| `CLIENT_URL` | 否 | http://localhost:3000 | 前端地址 |
| `REACT_APP_GRAPHQL_ENDPOINT` | 否 | http://localhost:4000/graphql | GraphQL 端点 |

## 监控和日志

### 日志查看

```bash
# PM2 日志
pm2 logs ai-chat-demo

# Docker 日志
docker logs container-name
```

### 性能监控

建议使用以下工具：
- PM2 监控面板
- Vercel Analytics
- New Relic
- DataDog

## 故障排除

### 常见问题

1. **API 调用失败**
   - 检查 API Key 是否正确
   - 确认网络连接

2. **前端无法加载**
   - 检查构建是否成功
   - 确认静态文件路径

3. **GraphQL 错误**
   - 检查服务器日志
   - 确认 CORS 配置

### 日志示例

```bash
# 启用详细日志
DEBUG=* npm run server
```

## 安全建议

1. **环境变量安全**
   - 不要在代码中硬编码 API Key
   - 使用安全的环境变量管理

2. **HTTPS**
   - 生产环境使用 HTTPS
   - 配置 SSL 证书

3. **CORS 配置**
   - 限制允许的域名
   - 避免使用通配符

4. **速率限制**
   - 实施 API 调用限制
   - 防止滥用

---

如有部署问题，请查看项目 Issues 或提交新的问题。