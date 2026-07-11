import {
  Brain,
  Circuitry,
  FileText,
  GitBranch,
  Package,
  Sparkle,
  StackSimple
} from "@phosphor-icons/react/dist/ssr";
import type { ComponentType } from "react";

export type Work = {
  slug: string;
  title: string;
  label: string;
  summary: string;
  role: string;
  status: string;
  tags: string[];
  overview: string;
  why: string;
  built: string[];
  stack: string[];
  evidence: string[];
  nextStep: string;
};

export type Practice = {
  title: string;
  copy: string;
  icon: ComponentType<{
    size?: number;
    weight?: "thin" | "light" | "regular" | "bold" | "fill" | "duotone";
  }>;
};

export const profile = {
  name: "黄炫铭",
  nameEn: "Huang Xuanming",
  title: "Product thinking, AI prototypes, and systems experiments.",
  summary:
    "我关注 AI 产品、自动化工作流、复杂系统体验和可运行原型。这个站点记录我如何把想法拆成问题、界面、代码和可验证的作品。",
  email: "hello@example.com",
  github: "https://github.com/Huangxuanming0911/ai-product",
  resumeHref: "/resume/",
  focus: ["AI prototypes", "Workflow tools", "Systems thinking"]
};

export const works: Work[] = [
  {
    slug: "seeding-copilot",
    title: "种草文案优化 Copilot",
    label: "Content AI MVP",
    summary: "把广告感商单草稿，改成有证据、有边界、可拍摄的种草内容。",
    role: "产品机会验证、MVP 原型设计、前端 Demo、Coze 工作流、案例验证",
    status: "Online MVP / Case Study",
    tags: ["AI Product", "Content AI", "MVP", "Coze Workflow"],
    overview:
      "这是一个面向接商单博主、小商家内容运营和代运营团队的内容 AI 原型。它不只是生成一篇更会夸的种草文案，而是把原始商单草稿拆成广告感、用户疑虑、证据链、拍摄动作和发布前评分。",
    why:
      "种草内容的问题通常不是缺少形容词，而是用户不信：卖点堆砌、表达过满、证据不足、评论区接不住追问。这个项目尝试把“可信”变成一套可检查、可迭代的工作流。",
    built: [
      "定义商品信息、平台、人群、已有草稿、用户疑虑、商品证据和禁用表达等输入结构",
      "搭建 Coze 多节点工作流，覆盖广告感诊断、疑虑提炼、证据链映射、文案优化和质量评分",
      "实现可在线访问的轻量 MVP 页面，用于展示输入、优化结果和发布前检查",
      "以护眼学习台灯为验证案例，整理问大家、用户评价、社区讨论和科普信息作为证据链"
    ],
    stack: ["Next.js", "Coze Workflow", "Content AI", "Prompt Design", "Evidence Chain"],
    evidence: [
      "在线 MVP：https://ai-real-seeding-director.vercel.app",
      "一页项目报告 PDF",
      "护眼学习台灯验证案例",
      "广告感诊断、证据链、优化稿、分镜建议与发布前评分"
    ],
    nextStep:
      "继续补充 Coze 工作流截图、更多品类验证样本和真实运营反馈，把它从演示型 MVP 推进到可复用的内容优化工作台。"
  },
  {
    slug: "beergame-dqn",
    title: "Beer Game Decision Lab",
    label: "Decision Analysis Prototype",
    summary: "一个围绕供应链多主体决策的实验分析项目，比较局部策略、全链路利润与成本传递。",
    role: "系统建模、指标设计、实验分析、可视化表达",
    status: "产品化实验原型",
    tags: ["Supply Chain", "Multi-Agent", "Profit Metrics", "Python"],
    overview:
      "这个项目把 Beer Game 整理成一个供应链多主体决策实验：模拟顾客需求、企业订货、库存、缺货和 t+1 到货延迟，并比较不同策略对局部企业与全链路利润的影响。",
    why:
      "它的价值不在于证明某个算法更强，而在于把复杂系统里的成本转移、局部目标和全局结果讲清楚。这类问题和真实 AI 决策产品里的指标设计、反馈延迟、多方协同很接近。",
    built: [
      "整理带 t+1 到货延迟的 Beer Game 供应链环境",
      "实现单智能体与多智能体策略实验",
      "把实验利润拆成销售收入、采购成本、库存成本和缺货损失",
      "补充服务水平、缺货率、牛鞭效应和长链路压力测试"
    ],
    stack: ["Python", "PyTorch", "NumPy", "Matplotlib", "Reinforcement Learning"],
    evidence: [
      "多智能体全链路利润提升到 +3426.55",
      "单智能体策略下目标企业利润提升但全链路利润为 -5122.25",
      "3 / 5 / 7 节点长链路压力测试",
      "利润分解、需求稳健性和牛鞭效应图表"
    ],
    nextStep:
      "继续把离线图表升级为可交互分析页，让用户可以切换策略、链路长度和需求强度。"
  },
  {
    slug: "wechat-bot",
    title: "WeChat Bot / IM Agent",
    label: "AI Agent Workflow",
    summary: "一个把微信 IM 接入 Agent 工作流的工程实践，关注触发边界、上下文记忆、多模型路由和本地数据读取。",
    role: "工作流梳理、交互边界设计、Agent 入口分析",
    status: "IM Agent 实践案例",
    tags: ["Wechaty", "IM Agent", "OpenCLI", "LLM Routing"],
    overview:
      "项目把微信扫码登录后的 IM 消息接入到 ChatGPT、DeepSeek、Ollama、Claude、Pi 等服务，并通过 OpenCLI 读取本地聊天、联系人、群成员和朋友圈缓存。",
    why:
      "它提供了一个观察 Agent 如何进入真实沟通渠道的窗口：触发规则、白名单、群聊上下文、长期记忆、隐私边界和误回复风险都需要被认真设计。",
    built: [
      "梳理私聊、群聊、白名单和 @ / 引用触发规则",
      "整理 Pi agent 与多模型 provider 的切换方式",
      "分析群聊历史上下文、JSONL 消息存储和长期记忆边界",
      "梳理 OpenCLI 本地微信数据读取与分析命令"
    ],
    stack: ["Node.js", "Wechaty", "CLI", "LLM Providers", "JSONL"],
    evidence: [
      "扫码登录与 Wechaty 消息入口",
      "群聊历史上下文注入说明",
      "白名单、触发词和记忆权限设计",
      "OpenCLI 本地微信数据读取命令"
    ],
    nextStep:
      "补充真实截图、配置片段和一次完整消息链路，把它整理成 IM Agent 进入社交场景的系统案例。"
  },
  {
    slug: "wcf-bridge",
    title: "WCF Bridge",
    label: "Local Service Bridge",
    summary: "为微信媒体后端做一个本地 HTTP 桥接服务，统一消息和表情数据的响应形态。",
    role: "接口整理、本地服务、响应标准化",
    status: "小型工具 / 本地桥接",
    tags: ["Node.js", "HTTP", "Bridge", "WeChatFerry"],
    overview:
      "这是一个本地 HTTP bridge，用来连接 WeChatFerry 或 wxhelper 风格的媒体后端。它接收 bot 侧 payload，转发到 upstream，再把常见响应结构归一化。",
    why:
      "这类小工具不大，但很关键。它把不稳定的上游形态包在稳定接口后面，让主项目可以少关心细碎差异。",
    built: [
      "定义本地 POST 接口和 health check",
      "支持 upstream token 和认证 header",
      "兼容 dataUrl、base64、filePath、url 等响应形态",
      "为 bot 侧提供更稳定的媒体读取边界"
    ],
    stack: ["Node.js", "HTTP API", "Local Bridge", "Media Payload"],
    evidence: ["README 接口说明", "healthz 健康检查", "多响应形态归一化", "可配置 upstream"],
    nextStep:
      "补充错误码、超时策略和最小测试集，让它更像一个可以长期维护的小型基础设施组件。"
  },
  {
    slug: "portfolio-site",
    title: "Portfolio Site",
    label: "Personal Website",
    summary: "用 Next.js 搭建个人作品集，并适配国内静态托管平台的自动部署流程。",
    role: "信息架构、前端实现、静态部署",
    status: "当前站点 / 持续迭代",
    tags: ["Next.js", "Static Export", "EdgeOne Pages", "Portfolio"],
    overview:
      "这个站点从 AI 产品求职页改造成个人作品集主页，重点展示作品、实践方向、笔记和个人简介，同时保持国内平台可部署。",
    why:
      "作品集本身也是一个产品。它需要在第一屏解释身份，在项目区建立可信度，在详情页提供可追问的上下文。",
    built: [
      "搭建静态导出的 Next.js 项目",
      "适配 EdgeOne Pages 的 build command 和 out 输出目录",
      "抽取作品、实践、笔记数据结构",
      "规划作品详情页和持续更新流程"
    ],
    stack: ["Next.js", "React", "TypeScript", "CSS", "Static Export"],
    evidence: ["首页信息架构", "作品详情页骨架", "国内部署说明", "Git 自动部署流程"],
    nextStep:
      "继续补真实截图、线上 Demo、文章链接和每个项目的复盘，让它从展示页变成完整作品档案。"
  }
];

export const practices: Practice[] = [
  {
    title: "Product Systems",
    copy: "把模糊问题拆成场景、流程、指标和可迭代的产品结构。",
    icon: StackSimple
  },
  {
    title: "AI Prototyping",
    copy: "用 LLM、RAG、Agent 和自动化工具快速验证产品想法。",
    icon: Sparkle
  },
  {
    title: "Interface Thinking",
    copy: "关注复杂能力如何通过界面、反馈和约束变得可理解。",
    icon: Circuitry
  },
  {
    title: "Engineering Taste",
    copy: "把想法落到可运行、可部署、可维护的系统里。",
    icon: GitBranch
  }
];

export const notes = [
  {
    title: "我如何判断一个 AI 功能是否真的需要存在",
    summary: "从用户任务、失败成本和可评估性出发，而不是从模型能力出发。"
  },
  {
    title: "RAG 产品里引用为什么比回答更重要",
    summary: "当答案不可完全信任时，引用、权限和追溯链路就是产品体验的一部分。"
  },
  {
    title: "从 Beer Game 到供应链智能体",
    summary: "一个关于延迟反馈、局部收益和多智能体协同的系统实验笔记。"
  }
];

export const resumeBlocks = [
  {
    title: "关注方向",
    items: ["AI 产品与工作流", "复杂系统体验", "自动化工具", "可运行原型"]
  },
  {
    title: "常用方式",
    items: ["问题拆解", "快速原型", "数据与指标", "工程实现", "复盘写作"]
  },
  {
    title: "作品线索",
    items: works.map((work) => work.title)
  }
];

export function getWork(slug: string) {
  return works.find((work) => work.slug === slug);
}

export const siteIcons = {
  package: Package,
  file: FileText,
  brain: Brain
};
