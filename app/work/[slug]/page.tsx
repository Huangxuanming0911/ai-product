import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  BeerStein,
  ChatCircleText,
  ChartLineUp,
  ClipboardText,
  Database,
  FileText,
  GitBranch,
  Kanban,
  Key,
  MagicWand,
  MagnifyingGlass,
  NotePencil,
  PlugsConnected,
  PresentationChart,
  Robot,
  Scales,
  ShieldCheck,
  Sparkle,
  Target,
  TrendUp
} from "@phosphor-icons/react/dist/ssr";
import { getWork, works } from "../../data/portfolio";

export const dynamicParams = false;

type WorkPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return works.map((work) => ({
    slug: work.slug
  }));
}

export async function generateMetadata({
  params
}: WorkPageProps): Promise<Metadata> {
  const { slug } = await params;
  const work = getWork(slug);

  if (!work) {
    return {
      title: "Work"
    };
  }

  return {
    title: `${work.title} | Huang Xuanming`,
    description: work.summary
  };
}

export default async function WorkPage({ params }: WorkPageProps) {
  const { slug } = await params;
  const work = getWork(slug);

  if (!work) {
    notFound();
  }

  const otherWorks = works.filter((item) => item.slug !== work.slug).slice(0, 3);

  if (work.slug === "beergame-dqn") {
    return <BeerGameCase otherWorks={otherWorks} work={work} />;
  }

  if (work.slug === "wechat-bot") {
    return <WeChatBotCase otherWorks={otherWorks} work={work} />;
  }

  if (work.slug === "seeding-copilot") {
    return <SeedingCopilotCase otherWorks={otherWorks} work={work} />;
  }

  return (
    <main className="casePage">
      <Link className="backLink" href="/#work">
        <ArrowLeft size={18} weight="bold" />
        返回作品
      </Link>

      <section className="caseHero">
        <p className="eyebrow">{work.label}</p>
        <h1>{work.title}</h1>
        <p className="lead">{work.summary}</p>
        <div className="caseFacts">
          <div>
            <span>Role</span>
            <strong>{work.role}</strong>
          </div>
          <div>
            <span>Status</span>
            <strong>{work.status}</strong>
          </div>
        </div>
      </section>

      <section className="caseLayout">
        <article className="caseMain">
          <CaseSection title="Overview" body={work.overview} />
          <CaseSection title="Why it matters" body={work.why} />
          <CaseList title="What I built" items={work.built} />
          <CaseList title="Stack / Methods" items={work.stack} />
          <CaseList title="Evidence" items={work.evidence} />
          <CaseSection title="Next step" body={work.nextStep} />
        </article>

        <aside className="caseAside">
          <h2>Related work</h2>
          <div className="miniWorkList">
            {otherWorks.map((item) => (
              <Link href={`/work/${item.slug}/`} key={item.slug}>
                <span>{item.title}</span>
                <ArrowRight size={17} weight="bold" />
              </Link>
            ))}
          </div>
        </aside>
      </section>
    </main>
  );
}

function SeedingCopilotCase({
  otherWorks,
  work
}: {
  otherWorks: typeof works;
  work: NonNullable<ReturnType<typeof getWork>>;
}) {
  const productFlow = [
    {
      title: "诊断广告感",
      body: "标出“闭眼入、必买、不伤眼、无频闪”等容易被追问的绝对化表达。",
      icon: MagnifyingGlass
    },
    {
      title: "提炼用户疑虑",
      body: "从评论、问大家和社区讨论里整理真实问题：会不会累、频闪怎么看、适不适合长期用。",
      icon: ClipboardText
    },
    {
      title: "匹配证据来源",
      body: "把卖点对应到用户评价、商品参数、科普信息或需要补拍的画面。",
      icon: MagicWand
    },
    {
      title: "生成发布建议",
      body: "输出改写稿、分镜建议、评论区回应方向，并做发布前自检。",
      icon: ShieldCheck
    }
  ];

  const inputs = [
    "商品信息",
    "目标平台",
    "目标人群",
    "已有草稿",
    "用户疑虑",
    "商品证据",
    "禁用表达"
  ];

  const caseSteps = [
    {
      label: "01 输入",
      title: "原始商单草稿",
      body: "选择这个品类，是因为它很容易写成“护眼神器”，但家长真正关心的是风险、依据和适用边界。"
    },
    {
      label: "02 分析",
      title: "疑虑与证据整理",
      body: "我把草稿里的卖点逐条拆开，对应到问大家、用户评价、社区吐槽和科普信息，判断哪些能保留、哪些要降调。"
    },
    {
      label: "03 输出",
      title: "发布前内容方案",
      body: "最终输出不只是一篇改写稿，还包括拍摄分镜、评论区回应方向，以及发布前的质量检查。"
    }
  ];

  const roles = [
    "产品机会验证",
    "MVP 原型设计",
    "前端 Demo 实现",
    "Coze 工作流搭建",
    "案例验证与报告整理"
  ];

  return (
    <main className="casePage seedingCasePage">
      <Link className="backLink" href="/#work">
        <ArrowLeft size={18} weight="bold" />
        返回作品
      </Link>

      <section className="seedingHero">
        <div className="seedingHeroCopy">
          <p className="seedingKicker">
            <Sparkle size={18} weight="fill" />
            {work.label}
          </p>
          <h1>{work.title}</h1>
          <p className="lead">
            一个把“硬广草稿”改成“可信种草”的小工具。
          </p>
          <p className="seedingHeroNote">
            我把它想象成创作者发商单前的第二双眼睛：不急着润色，先帮你看哪里太像广告、
            哪里缺证据、哪里容易被评论区追问。它做的不是“写得更猛”，而是把内容改得更稳、更像真实体验。
          </p>
          <div className="seedingActions">
            <a
              className="seedingButton primary"
              href="https://ai-real-seeding-director.vercel.app"
              rel="noreferrer"
              target="_blank"
            >
              <TrendUp size={18} weight="bold" />
              在线 MVP
            </a>
          </div>
        </div>
      </section>

      <section className="seedingSection seedingContext">
        <div>
          <p className="seedingKicker">01 项目背景</p>
          <h2>商单文案为什么容易失信</h2>
          <p>
            一篇典型的商单草稿，常常会把所有卖点都堆上去：好用、必买、不踩雷、适合所有人。
            但用户读到这里时，脑子里冒出来的往往不是“我被种草了”，而是“真的吗？凭什么？”
            所以我没有把方向定成单纯生成文案，而是做一个发布前的检查和改写工具。
          </p>
        </div>
        <div className="seedingInputBoard" aria-label="种草 Copilot 输入结构">
          {inputs.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>

      <section className="seedingSection">
        <div className="seedingSectionHeader">
          <p className="seedingKicker">02 解决思路</p>
          <h2>先诊断，再改写</h2>
          <p>
            这套流程的核心很简单：先不要急着“优化语气”，而是先判断哪些话说得过满。
            再把用户会问的问题列出来，补上能支撑的证据，最后才进入改写、分镜和评论区承接。
            这样文案不只是变顺了，也更经得起看。
          </p>
        </div>
        <div className="seedingFlowGrid">
          {productFlow.map((item, index) => {
            const Icon = item.icon;
            return (
              <article key={item.title}>
                <span>0{index + 1}</span>
                <Icon size={24} weight="bold" />
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="seedingSection seedingValidation">
        <div>
          <p className="seedingKicker">03 验证案例</p>
          <h2>护眼学习台灯</h2>
          <p>
            我用“护眼学习台灯”做验证，是因为这个品类特别容易暴露问题：一边是商家想强调护眼，
            另一边是家长会追问频闪、亮度、孩子长期使用会不会累。这个案例能很好地测试工具是不是只会润色，
            还是能真的帮人把内容说清楚。
          </p>
        </div>
        <div className="seedingCaseSteps">
          {caseSteps.map((item) => (
            <article key={item.label}>
              <span>{item.label}</span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="seedingSection seedingOutput">
        <div>
          <p className="seedingKicker">04 输出结果</p>
          <h2>文案、分镜与自检</h2>
          <p>
            我希望输出物更像一张发布前清单：哪些词要删，哪些卖点要加边界，哪些证据还不够，
            哪些镜头可以补拍，评论区如果有人问“这真的护眼吗”，应该如何接住，而不是继续堆形容词。
          </p>
        </div>
        <div className="seedingOutputPanel">
          <div>
            <Target size={22} weight="bold" />
            <strong>一版更稳的正文</strong>
            <p>少一点绝对承诺，多一点具体使用场景。</p>
          </div>
          <div>
            <NotePencil size={22} weight="bold" />
            <strong>能拍出来的分镜</strong>
            <p>把“护眼、舒服、适合学习”变成画面动作。</p>
          </div>
          <div>
            <PresentationChart size={22} weight="bold" />
            <strong>发布前自检</strong>
            <p>看广告感、证据感、边界和评论区承接。</p>
          </div>
        </div>
      </section>

      <section className="seedingSection seedingRole">
        <div>
          <p className="seedingKicker">05 我的工作</p>
          <h2>从判断到 MVP</h2>
          <p>
            这个项目从机会判断开始：我先把“用户为什么不信种草内容”拆成广告感、证据不足、
            边界缺失和评论区承接弱几个问题，再把这些判断放进前端 Demo 和 Coze 工作流里，
            跑出一条从草稿输入到优化结果的完整链路。
          </p>
        </div>
        <div className="seedingRoleList">
          {roles.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>

      <section className="seedingSection seedingMaterials">
        <div>
          <p className="seedingKicker">06 项目材料</p>
          <h2>在线 Demo 与一页报告</h2>
          <p>
            如果前面的页面负责讲清楚项目主线，这份一页报告更像提交材料：把产品机会、
            工作流、验证案例和结果摘要压缩到一页里，适合面试或作品集附件场景快速查看。
          </p>
          <a className="seedingButton" href="/files/seeding-copilot-report.pdf">
            <FileText size={18} weight="bold" />
            打开一页报告
          </a>
        </div>
        <figure className="seedingReportCard">
          <img src="/images/seeding-copilot/report-preview.png" alt="种草文案优化 Copilot 一页报告预览" />
          <figcaption>One-page product report</figcaption>
        </figure>
      </section>

      <section className="seedingRelated">
        <h2>Related work</h2>
        <div className="miniWorkList">
          {otherWorks.map((item) => (
            <Link href={`/work/${item.slug}/`} key={item.slug}>
              <span>{item.title}</span>
              <ArrowRight size={17} weight="bold" />
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

function WeChatBotCase({
  otherWorks,
  work
}: {
  otherWorks: typeof works;
  work: NonNullable<ReturnType<typeof getWork>>;
}) {
  const workflow = [
    {
      title: "微信消息入口",
      body: "扫码登录后接收私聊、群聊、图片、链接和表情等 IM 消息。",
      icon: ChatCircleText
    },
    {
      title: "触发与权限",
      body: "用联系人白名单、群聊白名单、@ 机器人、引用回复和前缀规则控制是否响应。",
      icon: Key
    },
    {
      title: "上下文与记忆",
      body: "群聊历史写入 JSONL，并在需要回复时注入最近消息；长期记忆由用户显式管理。",
      icon: Database
    },
    {
      title: "模型与 Agent",
      body: "通过 provider 机制切换 ChatGPT、DeepSeek、Ollama、Claude、Pi 等服务。",
      icon: Robot
    }
  ];

  const boundaries = [
    "私聊只响应白名单联系人，降低误触发和隐私风险。",
    "群聊首次参与需要 @ 机器人、直接称呼或引用机器人回复。",
    "群聊历史只在群聊回复时注入，不影响私聊性能和语境。",
    "长期社交记忆默认本地保存，并由用户查看、删除或清除。"
  ];

  const placeholders = [
    {
      title: "扫码登录与启动",
      label: "Screenshot slot",
      body: "后续放入微信扫码登录、CLI 启动或运行日志截图。"
    },
    {
      title: "群聊上下文",
      label: "Prompt slot",
      body: "后续放入群聊历史注入 prompt 或 JSONL 消息片段。"
    },
    {
      title: "白名单配置",
      label: "Config slot",
      body: "后续放入 ROOM_WHITELIST、ALIAS_WHITELIST、BOT_NAME 配置片段。"
    },
    {
      title: "本地数据分析",
      label: "CLI slot",
      body: "后续放入 wx sessions、wx history、wx sns-search 或分析命令输出。"
    }
  ];

  return (
    <main className="casePage wechatCasePage">
      <Link className="backLink" href="/#work">
        <ArrowLeft size={18} weight="bold" />
        返回作品
      </Link>

      <section className="wechatHero">
        <div>
          <p className="wechatKicker">
            <ChatCircleText size={18} weight="bold" />
            {work.label}
          </p>
          <h1>{work.title}</h1>
          <p className="lead">{work.summary}</p>
        </div>
        <div className="wechatPhoneMock" aria-label="微信 Agent 消息示意">
          <div className="wechatPhoneTop">
            <span>群聊助手</span>
            <strong>online</strong>
          </div>
          <div className="wechatBubble left">这个 PDF 帮我看一下重点？</div>
          <div className="wechatBubble right">收到。我会先确认文件，再按白名单和上下文处理。</div>
          <div className="wechatBubble left muted">引用上一条消息继续问...</div>
        </div>
      </section>

      <section className="wechatSection wechatScenario">
        <div>
          <p className="wechatKicker">Scenario</p>
          <h2>当 Agent 进入真实聊天场景</h2>
          <p>
            微信不是一个干净的输入框，而是一个高噪声、高上下文、强隐私的沟通场景。
            私聊、群聊、引用、图片、链接和临时插话混在一起，Agent 如果只是“收到就回”，很容易误触发、误理解或暴露不该处理的信息。
          </p>
          <p>
            这个项目关注的问题不是单纯把模型接进微信，而是把 IM 消息变成可控的 Agent 工作流：
            哪些消息可以触发，哪些上下文可以读取，回复应该交给哪个模型，以及用户如何管理长期记忆。
          </p>
        </div>
        <div className="wechatFlowDiagram" aria-label="微信消息到 Agent 回复链路">
          <div>微信扫码</div>
          <span />
          <div>Wechaty 收消息</div>
          <span />
          <div>路由与上下文</div>
          <span />
          <div>模型 / Pi 回复</div>
        </div>
      </section>

      <section className="wechatSection">
        <div className="wechatSectionHeader">
          <p className="wechatKicker">Workflow</p>
          <h2>从消息入口到可控回复</h2>
          <p>
            页面先把项目拆成四个核心模块：消息入口、触发权限、上下文记忆、模型路由。
            这比只展示“能自动回复”更能说明 IM Agent 的工程边界。
          </p>
        </div>
        <div className="wechatWorkflowGrid">
          {workflow.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.title}>
                <Icon size={24} weight="bold" />
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="wechatSection wechatArchitecture">
        <div>
          <p className="wechatKicker">Architecture</p>
          <h2>一条消息如何走完整个链路</h2>
          <p>
            典型路径是：微信扫码登录后由 Wechaty 捕获消息，消息被记录到本地 JSONL，
            再经过白名单、群聊触发和上下文构造，最后交给指定 provider 或 Pi agent 生成回复并发回 IM。
          </p>
        </div>
        <div className="wechatStack">
          {["Wechaty", "Message Store", "Command Router", "LLM Provider", "IM Reply"].map((item, index) => (
            <div key={item}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{item}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="wechatSection wechatBoundaries">
        <div>
          <p className="wechatKicker">Boundaries</p>
          <h2>比模型能力更重要的是触发边界</h2>
          <p>
            IM Agent 的风险来自真实社交环境：误回复、错读上下文、过度记忆和越权读取。
            因此这个项目把白名单、触发条件和记忆管理作为核心设计对象。
          </p>
        </div>
        <div className="wechatBoundaryList">
          {boundaries.map((item) => (
            <div key={item}>
              <PlugsConnected size={20} weight="bold" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="wechatSection">
        <div className="wechatSectionHeader">
          <p className="wechatKicker">Evidence</p>
          <h2>后续截图与材料占位</h2>
          <p>
            这一版先保留视觉槽位，后续可以逐步替换为真实截图、配置片段、运行日志和一次完整消息链路。
          </p>
        </div>
        <div className="wechatPlaceholderGrid">
          {placeholders.map((item) => (
            <figure className="wechatPlaceholder" key={item.title}>
              <div>
                <span>{item.label}</span>
              </div>
              <figcaption>
                <strong>{item.title}</strong>
                <p>{item.body}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="wechatSection wechatNext">
        <div>
          <p className="wechatKicker">Next</p>
          <h2>把实践整理成可复盘案例</h2>
          <p>
            下一步适合补充三类证据：一次真实消息从微信进入 Agent 的链路截图、一组白名单和记忆配置片段、
            以及群聊历史上下文如何影响回复质量的前后对比。
          </p>
        </div>
        <div className="wechatMethodTags">
          {work.stack.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>

      <section className="wechatRelated">
        <h2>Related work</h2>
        <div className="miniWorkList">
          {otherWorks.map((item) => (
            <Link href={`/work/${item.slug}/`} key={item.slug}>
              <span>{item.title}</span>
              <ArrowRight size={17} weight="bold" />
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

function BeerGameCase({
  otherWorks,
  work
}: {
  otherWorks: typeof works;
  work: NonNullable<ReturnType<typeof getWork>>;
}) {
  const experimentItems = [
    {
      title: "环境变量",
      body: "固定 t+1 到货延迟，记录需求、订货、库存、缺货和每个企业的利润分解。",
      icon: GitBranch
    },
    {
      title: "策略组",
      body: "比较随机策略、库存基准策略、单智能体 DDQN 和多智能体 DDQN 的链路表现。",
      icon: Kanban
    },
    {
      title: "实验维度",
      body: "扩展 3 / 5 / 7 节点链路，并改变需求强度，观察结果是否对场景变化稳健。",
      icon: Scales
    },
    {
      title: "评价指标",
      body: "同时看局部利润、全链路利润、服务水平、库存压力、缺货率和牛鞭效应。",
      icon: ChartLineUp
    }
  ];

  const scenarioNodes = [
    {
      step: "01",
      title: "门店",
      body: "真实销量只是小幅波动"
    },
    {
      step: "02",
      title: "经销商",
      body: "看到补货订单变大"
    },
    {
      step: "03",
      title: "工厂",
      body: "接收到被放大的需求信号"
    }
  ];

  const setupFacts = [
    "基础环境：终端顾客 -> 企业0 -> 企业1 -> 企业2 -> 上游供给。",
    "观测限制：每个企业只看到自身库存、上一期订单和上一期交付结果。",
    "动态机制：订单与货物均存在 t+1 延迟，订多产生库存成本，订少产生缺货损失。",
    "场景扩展：链路长度设为 3 / 5 / 7，需求强度设为 λ=8 / 10 / 12。",
    "评估策略：随机策略、库存基准、单智能体 DDQN、多智能体 DDQN。"
  ];

  const metricNotes = [
    {
      term: "利润",
      copy: "实验里的 reward 被设计为近似经营利润：收入减去采购、库存和缺货成本。"
    },
    {
      term: "全链路利润",
      copy: "把所有企业的利润加总，判断这条供应链整体有没有变好。"
    },
    {
      term: "服务水平",
      copy: "顾客或下游需求被满足的比例，用来观察策略有没有牺牲交付体验。"
    },
    {
      term: "牛鞭效应",
      copy: "订单波动相对真实需求被放大的程度，用来观察上游是否被过度扰动。"
    }
  ];

  const figures = [
    {
      title: "利润分解",
      src: "/images/beergame/reward_decomposition.png",
      alt: "各企业利润分解图",
      caption: "把最终结果拆开，看收入和几类成本分别把利润推向哪里。"
    },
    {
      title: "长链路压力测试",
      src: "/images/beergame/chain_length_heatmap.png",
      alt: "长链路压力测试热力图",
      caption: "当企业节点从 3 个扩到 5、7 个，压力开始在不同位置堆积。"
    },
    {
      title: "需求稳健性",
      src: "/images/beergame/demand_robustness.png",
      alt: "不同需求强度下的策略稳健性",
      caption: "外部需求变强或变弱时，比较策略是否还能维持链路收益。"
    },
    {
      title: "牛鞭效应",
      src: "/images/beergame/bullwhip_comparison.png",
      alt: "牛鞭效应对比图",
      caption: "看订单波动有没有在向上游传递时被继续放大。"
    }
  ];

  return (
    <main className="casePage beerCasePage">
      <Link className="backLink" href="/#work">
        <ArrowLeft size={18} weight="bold" />
        返回作品
      </Link>

      <section className="beerHero">
        <div className="beerHeroCopy">
          <p className="beerKicker">
            <BeerStein size={18} weight="fill" />
            {work.label}
          </p>
          <h1>{work.title}</h1>
          <p className="lead">{work.summary}</p>
          <p className="beerHeroNote">
            这个项目把经典 Beer Game 供应链问题拆成可复现的实验：企业在延迟和局部信息下订货，
            利润、库存和缺货成本沿链路传递。页面重点呈现实验设置、指标口径和分析结果。
          </p>
        </div>
      </section>

      <section className="beerSection beerScenario">
        <div>
          <p className="beerKicker">Scenario</p>
          <h2>一个夏季啤酒上新后的补货问题</h2>
          <p>
            想象一家精酿饮料品牌刚推出一款夏季啤酒。门店每天的真实销量没有大起大落，
            但补货并不是即时发生的：门店要向经销商下单，经销商再向工厂订货，工厂还要根据上游供给安排生产。
          </p>
          <p>
            每个节点都只能看到自己手里的库存和订单。门店怕断货，会稍微多订；经销商看到订单变大，也会继续放大；
            几轮之后，终端只是多卖了一点点，链路上却可能同时出现库存积压、偶发缺货和订单波动放大。
          </p>
        </div>
        <div className="beerScenarioDiagram" aria-label="夏季啤酒补货链路示意">
          <div className="beerDemandPulse">
            <span>真实销量</span>
            <strong>小幅波动</strong>
          </div>
          <div className="beerScenarioNodes">
            {scenarioNodes.map((node) => (
              <div className="beerScenarioNode" key={node.step}>
                <span>{node.step}</span>
                <strong>{node.title}</strong>
                <p>{node.body}</p>
              </div>
            ))}
          </div>
          <div className="beerAmplifyBar">
            <span>补货判断</span>
            <span>订单加码</span>
            <span>波动放大</span>
          </div>
        </div>
      </section>

      <section className="beerSection beerQuestion">
        <div>
          <p className="beerKicker">Question</p>
          <h2>到底是需求变了，还是链路放大了波动</h2>
          <p>
            这个项目关注的不是单次销量预测，而是一个更隐蔽的问题：
            当每个企业都基于局部信息做出看似合理的订货决策时，整条供应链的利润、库存和服务水平会如何变化。
          </p>
        </div>
        <div className="beerQuestionList">
          {[
            "局部企业利润提升，是否会同步提升全链路利润？",
            "链路变长后，成本和订单波动会在哪些位置累积？",
            "多智能体策略是否比单智能体策略更能稳定系统级结果？"
          ].map((question, index) => (
            <div key={question}>
              <span>Q{index + 1}</span>
              <p>{question}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="beerSection beerBackground">
        <div className="beerStoryPanel">
          <p className="beerKicker">Model</p>
          <h2>从补货链路到 Beer Game 模型</h2>
          <p>
            Beer Game 把上面的补货场景抽象成顾客、门店、经销商、工厂和上游供给。
            基础版本采用三节点企业链路，并保留局部观测、订货延迟、库存成本和缺货损失这些关键约束。
          </p>
          <p>
            在此基础上，实验进一步拉长链路、改变需求强度，并比较规则策略与强化学习策略的表现，
            让“说不清的链路损耗”变成可以观察和量化的实验结果。
          </p>
          <div className="beerFactList">
            {setupFacts.map((fact) => (
              <span key={fact}>{fact}</span>
            ))}
          </div>
        </div>
        <figure className="beerFigure beerChainFrame">
          <img src="/images/beergame/chain_map.png" alt="啤酒游戏企业链路图" />
        </figure>
      </section>

      <section className="beerSection">
        <div className="beerSectionHeader">
          <p className="beerKicker">Design</p>
          <h2>策略与场景对比</h2>
          <p>
            实验不是只比较一个最终分数，而是把策略放到不同链路长度和需求强度下评估，
            同时保留企业级与系统级指标，避免局部结果掩盖全链路损失。
          </p>
        </div>
        <div className="beerFlow">
          {experimentItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <article className="beerFlowItem" key={item.title}>
                <span className="beerFlowStep">0{index + 1}</span>
                <div className="beerFlowIcon">
                  <Icon size={22} weight="bold" />
                </div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="beerSection beerMetricReading">
        <div>
          <p className="beerKicker">Metrics</p>
          <h2>利润结构与服务指标</h2>
          <p>
            实验中的 reward 被设计为近似经营利润，因此页面统一使用“利润”表述。
            这样可以把算法结果拆回收入、采购、库存和缺货损失，解释每个节点为什么盈利或亏损。
          </p>
        </div>
        <div className="beerTermList">
          {metricNotes.map((item) => (
            <div key={item.term}>
              <strong>{item.term}</strong>
              <p>{item.copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="beerSection beerFinding">
        <div>
          <p className="beerKicker">Finding</p>
          <h2>单点收益与系统收益分离</h2>
          <p>
            在单智能体 DDQN 中，目标企业利润可以提升到正值，但上下游仍由背景策略驱动，
            全链路利润保持为负。多智能体 DDQN 让三个企业同时学习后，全链路利润转为正值，
            说明系统级收益需要显式纳入评价，而不能只看目标企业的局部表现。
          </p>
        </div>
        <figure className="beerFigure">
          <img src="/images/beergame/local_global_tradeoff.png" alt="局部利润与全链路利润对比" />
        </figure>
      </section>

      <section className="beerSection">
        <div className="beerSectionHeader">
          <p className="beerKicker">Evidence</p>
          <h2>结果证据</h2>
          <p>
            图表用于回答实验问题：利润差异来自哪类成本，链路变长后哪里承压，
            需求强度变化时策略是否仍能保持系统收益，以及订单波动是否被放大。
          </p>
        </div>
        <div className="beerFigureGrid">
          {figures.map((figure) => (
            <figure className="beerFigure" key={figure.src}>
              <img src={figure.src} alt={figure.alt} />
              <figcaption>
                <strong>{figure.title}</strong>
                <span>{figure.caption}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="beerSection beerMethods">
        <div>
          <p className="beerKicker">Limits</p>
          <h2>方法与边界</h2>
          <p>
            底层实现包含 DQN、Double DQN、Dueling DQN、PPO 和 Independent Multi-Agent DQN。
            当前结果更适合作为可解释的离线实验，而不是直接声称得到最优供应链策略。
            后续可以继续加入真实需求分布、协作奖励设计和可交互参数切换。
          </p>
        </div>
        <div className="beerMethodTags">
          {work.stack.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>

      <section className="beerRelated">
        <h2>Related work</h2>
        <div className="miniWorkList">
          {otherWorks.map((item) => (
            <Link href={`/work/${item.slug}/`} key={item.slug}>
              <span>{item.title}</span>
              <ArrowRight size={17} weight="bold" />
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

function CaseSection({ title, body }: { title: string; body: string }) {
  return (
    <section className="caseBlock">
      <h2>{title}</h2>
      <p>{body}</p>
    </section>
  );
}

function CaseList({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="caseBlock">
      <h2>{title}</h2>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
