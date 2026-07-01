# AI Product Portfolio

一个面向 AI 产品岗位简历初筛和面试追问的 Next.js 作品集初版。

## 本地运行

```bash
npm install
npm run dev
```

## 部署

### 国内平台推荐

这个项目已经配置为 Next.js 静态导出。运行构建后会生成 `out/` 目录，国内平台只需要托管 `out/` 里的静态文件。

```bash
npm install
npm run build:static
```

推荐顺序：

1. 腾讯云 EdgeOne Pages：连接 Git 仓库，构建命令 `npm run build:static`，输出目录 `out`。
2. 阿里云 OSS + CDN：本地构建后上传 `out/` 目录，默认首页设为 `index.html`，404 页面可设为 `404.html`。
3. 腾讯云 COS + CDN：和 OSS 类似，上传 `out/` 目录并开启静态网站。

### Vercel 备选

如果需要海外访问，可以继续用 Vercel。

```bash
npx vercel@latest
npx vercel@latest --prod
```

## 建议替换

- `app/page.tsx` 中的姓名、项目、文章和联系方式
- `public/resume.pdf` 简历文件
- `public/images/hero-workbench.png` hero 图
