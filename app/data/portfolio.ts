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
    slug: "beergame-dqn",
    title: "Beer Game DQN",
    label: "Reinforcement Learning",
    summary: "用强化学习探索供应链订货决策，把课程里的 Beer Game 变成可复现实验。",
    role: "算法实验、环境整理、结果分析",
    status: "课程项目 / 可复现实验",
    tags: ["DQN", "PPO", "Supply Chain", "Python"],
    overview:
      "这个项目围绕三层供应链中的订货策略展开，比较 random、base-stock、DQN、Double DQN、Dueling DQN、PPO 等方法在不同背景策略下的表现。",
    why:
      "它不是单纯跑模型，而是在一个有延迟、库存、缺货和利润约束的系统里观察智能体如何学习决策。这类问题和真实产品里的多方协同、反馈延迟、局部最优很相似。",
    built: [
      "整理带 t+1 到货延迟的 Beer Game 环境",
      "实现 DQN 系列算法、PPO baseline 和多智能体实验",
      "输出 reward、库存、订货行为和策略对比图",
      "把实验命令、评估方式和结果写成可复现流程"
    ],
    stack: ["Python", "PyTorch", "NumPy", "Matplotlib", "Reinforcement Learning"],
    evidence: [
      "多算法 baseline 对比",
      "背景策略对比实验",
      "多智能体 total reward 分析",
      "训练曲线和行为对比图"
    ],
    nextStep:
      "补一个可视化解释页，把供应链状态、动作、reward 和策略差异转成更容易理解的交互图。"
  },
  {
    slug: "wechat-bot",
    title: "WeChat Bot / IM Agent",
    label: "AI Agent Workflow",
    summary: "围绕微信消息、群聊上下文和多模型回复，搭建一个 IM agent 的实践项目。",
    role: "功能理解、配置实践、Agent 工作流梳理",
    status: "工程实践 / Agent 原型",
    tags: ["Wechaty", "Agent", "OpenCLI", "LLM"],
    overview:
      "项目把微信扫码登录后的 IM 消息接入到 ChatGPT、DeepSeek、Ollama、Claude、Pi 等服务，也支持本地聊天记录、联系人、群成员和朋友圈缓存读取。",
    why:
      "它提供了一个观察 AI agent 如何进入真实沟通渠道的窗口：触发规则、白名单、安全边界、长期记忆、隐私和误回复风险都需要被认真设计。",
    built: [
      "梳理私聊、群聊、白名单和触发规则",
      "理解多模型 provider 的切换方式",
      "整理 Pi agent、OpenCLI 和微信数据读取链路",
      "记录自动回复、记忆和分析功能的边界"
    ],
    stack: ["Node.js", "Wechaty", "CLI", "LLM Providers", "JSONL"],
    evidence: [
      "多模型服务入口",
      "群聊和私聊触发策略",
      "本地微信数据读取命令",
      "Agent 作为 IM 用户的使用说明"
    ],
    nextStep:
      "把这个项目抽象成一篇案例：AI agent 进入社交 IM 时，哪些交互边界比模型能力本身更重要。"
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
