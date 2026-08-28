# 黄炫铭｜个人作品集

一个以项目案例为核心的个人作品集网站，记录我在 AI 产品、智能体原型、复杂系统建模与工程实践中的探索。网站面向招聘方、合作方与对技术产品感兴趣的读者，提供可快速浏览、可继续追问的项目线索。

**线上访问：** [https://www.hxm-lab.cn](https://www.hxm-lab.cn)
**项目仓库：** [Huangxuanming0911/ai-product](https://github.com/Huangxuanming0911/ai-product)

## 收录案例

| 项目 | 关注的问题 | 案例页 |
| --- | --- | --- |
| 种草文案优化 Copilot | 将产品信息、用户证据与平台表达组织为可审核的内容工作流 | [查看](https://www.hxm-lab.cn/work/seeding-copilot/) |
| Beer Game Decision Lab | 在多主体供应链中观察局部决策、成本传递与全链路利润 | [查看](https://www.hxm-lab.cn/work/beergame-dqn/) |
| WeChat Bot | 将消息接入、指令路由、上下文与大模型回复连接成可运行的交互链路 | [查看](https://www.hxm-lab.cn/work/wechat-bot/) |
| Black Flow Companion | 将游戏地图截图转换为图结构，并结合路线约束与奖励实测提供只读决策辅助 | [查看](https://www.hxm-lab.cn/work/black-flow-companion/) |
| Texas Hold'em Poker AI | 实现可交互的人机对战、对手建模与策略训练流程 | [查看](https://www.hxm-lab.cn/work/poker-ai/) |

## 项目说明

这个网站不是简历的重复排版，而是对项目过程的补充。每个案例尽量呈现：问题背景、系统或产品设计、关键方法、结果证据，以及后续可继续完善的方向。

网站采用静态导出，页面不依赖运行时后端服务；因此可以部署到 GitHub Pages、Vercel、EdgeOne Pages 等静态托管平台。当前生产站点由 GitHub Pages 提供服务，并绑定自定义域名。

## 技术实现

- Next.js 16、React 19、TypeScript
- 静态导出：`output: "export"`
- 图片以静态资源方式提供，适配静态托管
- GitHub Actions 自动构建并发布 GitHub Pages
- 自定义域名：`www.hxm-lab.cn`

## 本地运行

```bash
npm install
npm run dev
```

浏览器访问终端显示的本地地址。构建静态产物：

```bash
npm run build:static
```

构建结果位于 `out/` 目录。

## 在 PPT 中引用

可直接使用下面这段表述：

> 个人作品集网站（Next.js 静态站点），集中呈现内容优化、供应链决策分析、视觉识别与路线规划、微信机器人和德州扑克智能体等项目案例。访问地址：https://www.hxm-lab.cn

如需引用某个具体案例，优先放对应案例页链接，而不是首页链接。

## 更新方式

修改内容后，依次执行：

```bash
npm run build:static
git add .
git commit -m "Update portfolio"
git push origin main
```

推送到 `main` 后，GitHub Actions 会自动发布最新版本到 `https://www.hxm-lab.cn`。
