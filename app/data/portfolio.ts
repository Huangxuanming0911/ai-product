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
  title: "产品分析、AI 原型与系统实验",
  summary:
    "这里收录一些可以打开、可以追问的个人项目：内容工具、供应链实验、扑克 AI 和微信 Agent。",
  email: "2519453845@qq.com",
  phone: "13646985482",
  resumeHref: "/resume/",
  focus: ["内容工具", "决策实验", "游戏 AI", "微信 Agent"]
};

export const works: Work[] = [
  {
    slug: "seeding-copilot",
    title: "种草文案优化 Copilot",
    label: "Content AI MVP",
    summary: "面向商单种草的内容优化工具，把夸张卖点转成可验证、可拍摄、可发布的内容方案。",
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
    summary: "将供应链补货游戏做成决策实验，观察不同策略如何影响节点利润、服务水平和订单波动。",
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
    summary: "把微信消息接入多模型 Agent，梳理真实 IM 场景里的触发、上下文、记忆和误回复边界。",
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
    slug: "poker-ai",
    title: "Texas Hold'em Poker AI",
    label: "Game AI System",
    summary: "一个能真实对局的德州扑克 Heads-up 系统：规则引擎管牌局，AI 在不完全信息里做下注决策。",
    role: "规则引擎实现、AI 策略设计、Web 对战 UI、训练流程整理",
    status: "Interactive Web Demo / Open Source",
    tags: ["Poker AI", "Flask", "Monte Carlo", "Opponent Modeling"],
    overview:
      "这个项目从零实现了一个德州扑克 Heads-up 对战系统：玩家可以在 Web UI 里与 AI 实时对局，系统负责发牌、盲注轮换、下注轮、摊牌结算、行动日志和结果展示。它不是只摆出一张牌桌，而是真的把一手牌从开始打到结算。",
    why:
      "德州扑克的难点在于信息不完整：你不知道对手底牌，却必须下注、弃牌或加注。这个项目的看点在于把这种“不知道也要决策”的过程系统化：规则必须严格，AI 需要在牌力、位置、底池赔率、对手范围和历史行为之间做动态判断。",
    built: [
      "用 Python 实现德州扑克核心引擎，覆盖手牌评估、公共牌流程、大小盲轮换、下注校验和分池结算，先保证牌局不会“耍赖”",
      "构建 AdvancedPokerAI，结合 Monte Carlo 胜率估计、起手牌强度、对手范围、fold equity 和 SPR 做决策",
      "加入对手画像模块，统计 VPIP、PFR、AF、fold-to-cbet、WTSD 等指标并用于调整策略",
      "使用 CMA-ES 自博弈训练可调策略参数，训练结果持久化到 data/ai_params.json 并在启动时加载",
      "提供 Flask Web UI，支持中英文切换、玩家 vs AI、同机双人、可视化牌桌、行动日志和结算抽屉"
    ],
    stack: [
      "Python",
      "Flask",
      "JavaScript",
      "Monte Carlo Simulation",
      "CMA-ES",
      "Opponent Modeling",
      "JSONL Logging"
    ],
    evidence: [
      "GitHub：https://github.com/Huangxuanming0911/poker",
      "已补充模式选择、牌桌对局和翻牌阶段截图",
      "核心引擎：engine.py 处理发牌、下注轮、all-in、摊牌和分池",
      "AI 策略：advanced_ai.py 根据胜率、位置、SPR、pot odds 和 fold equity 选择 fold / call / raise / all-in",
      "训练流程：train.py 使用 CMA-ES 和 self-play opponent pool 训练参数",
      "Web 入口：server.py 用 Flask session 包装同步游戏引擎，static/ 提供中英文牌桌界面",
      "当前展示方式：用截图证明可交互版本已经跑通，在线试玩后续再上服务器"
    ],
    nextStep:
      "继续补充典型牌局复盘和训练曲线，把 AI 在关键行动点的判断过程讲得更直观。"
  }
];

export const practices: Practice[] = [
  {
    title: "Product Systems",
    copy: "从具体场景出发，拆出流程、约束和判断指标。",
    icon: StackSimple
  },
  {
    title: "AI Prototyping",
    copy: "用 LLM、Agent 和自动化工具做可运行的早期验证。",
    icon: Sparkle
  },
  {
    title: "Interface Thinking",
    copy: "把复杂能力放进界面、反馈和边界里，让人能理解和使用。",
    icon: Circuitry
  },
  {
    title: "Engineering Taste",
    copy: "让想法最终落到可运行、可部署、可维护的系统里。",
    icon: GitBranch
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
