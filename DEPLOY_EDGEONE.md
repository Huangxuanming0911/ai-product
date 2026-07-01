# EdgeOne Pages 自动部署

这个项目已经配置为 Next.js 静态导出，适合部署到腾讯云 EdgeOne Pages。

## 构建配置

在 EdgeOne Pages 新建项目时填写：

```txt
框架预设：Next.js 或 Other
安装命令：npm install
构建命令：npm run build:static
输出目录：out
Node.js 版本：20 或 22
```

## 仓库准备

推荐只提交源码，不提交构建产物：

```txt
提交：app/ public/ package.json package-lock.json next.config.ts tsconfig.json
不提交：node_modules/ .next/ out/ out.zip .vercel/
```

## 发布流程

1. 把本目录推送到 GitHub、Gitee 或 GitCode 的一个新仓库。
2. 在 EdgeOne Pages 创建项目，选择 Git 仓库导入。
3. 按上面的构建配置填写。
4. 等待构建完成，使用 EdgeOne 分配的公网域名访问。

## 更新网站

后续修改内容后，只需要：

```bash
npm run build:static
git add .
git commit -m "Update portfolio"
git push
```

EdgeOne Pages 会自动重新构建和发布。
