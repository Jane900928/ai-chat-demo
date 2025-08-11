# 多阶段构建
# 第一阶段：构建前端
FROM node:18-alpine AS frontend-build

WORKDIR /app

# 复制前端依赖文件
COPY package*.json ./
RUN npm ci --only=production

# 复制前端源码并构建
COPY src/ ./src/
COPY public/ ./public/
COPY tailwind.config.js postcss.config.js tsconfig.json ./

RUN npm run build

# 第二阶段：构建后端并整合
FROM node:18-alpine AS production

WORKDIR /app

# 安装后端依赖
COPY server/package*.json ./server/
WORKDIR /app/server
RUN npm ci --only=production

# 复制后端源码
COPY server/ .

# 复制构建好的前端文件
COPY --from=frontend-build /app/build ./public

# 修改服务器以支持静态文件服务
RUN echo "const path = require('path');" > temp.js && \
    echo "const originalContent = require('fs').readFileSync('index.js', 'utf8');" >> temp.js && \
    echo "const modifiedContent = originalContent.replace(" >> temp.js && \
    echo "  'server.applyMiddleware({ app, path: \\\/graphql\\\' });'," >> temp.js && \
    echo "  'app.use(express.static(path.join(__dirname, \\\"public\\\")));\\n' +" >> temp.js && \
    echo "  'app.get(\\\"*\\\", (req, res) => res.sendFile(path.join(__dirname, \\\"public\\\", \\\"index.html\\\")));\\n' +" >> temp.js && \
    echo "  'server.applyMiddleware({ app, path: \\\/graphql\\\' });'" >> temp.js && \
    echo ");" >> temp.js && \
    echo "require('fs').writeFileSync('index.js', modifiedContent);" >> temp.js && \
    node temp.js && rm temp.js

EXPOSE 4000

CMD ["npm", "start"]