import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  ArrowSquareOut,
  BeerStein,
  ChatCircleText,
  ChartLineUp,
  ClipboardText,
  Database,
  FileText,
  GitBranch,
  GithubLogo,
  Globe,
  Kanban,
  Key,
  MapTrifold,
  MagicWand,
  MagnifyingGlass,
  NotePencil,
  PlugsConnected,
  PresentationChart,
  Robot,
  Path,
  Scales,
  ShieldCheck,
  Sparkle,
  Target,
  TerminalWindow,
  TrendUp
} from "@phosphor-icons/react/dist/ssr";
import { getWork, works } from "../../data/portfolio";
import { withSiteBasePath } from "../../utils/site-path";

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

  if (work.slug === "poker-ai") {
    return <PokerCase otherWorks={otherWorks} work={work} />;
  }

  if (work.slug === "black-flow-companion") {
    return <BlackFlowCase otherWorks={otherWorks} work={work} />;
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
      title: "识别表达风险",
      body: "先把过度承诺、空泛形容和未经解释的功效词标出来，避免后续只是把语气改得更漂亮。",
      icon: MagnifyingGlass
    },
    {
      title: "提炼真实疑问",
      body: "从评论、问答和社区反馈里整理用户真正会追问的点，比如是否适合长期用、依据来自哪里。",
      icon: ClipboardText
    },
    {
      title: "匹配证据材料",
      body: "把卖点对应到商品参数、用户反馈、科普信息或可补拍画面，判断哪些能保留、哪些要降调。",
      icon: MagicWand
    },
    {
      title: "形成发布方案",
      body: "根据平台和使用场景，输出正文改写、脚本分镜、评论区回应和发布前检查项。",
      icon: ShieldCheck
    }
  ];

  const inputs = [
    "商品信息",
    "平台/人群",
    "原始草稿",
    "评论反馈",
    "证据材料"
  ];

  const caseSteps = [
    {
      label: "正文",
      title: "卖点文案前后对比",
      body: "把“护眼神器、闭眼入”这类高风险表达，改成带使用场景、依据和边界的正文版本。"
    },
    {
      label: "脚本",
      title: "可拍摄的内容脚本",
      body: "把抽象卖点拆成画面动作，例如开灯环境、孩子阅读姿势、亮度调节和家长观察点。"
    },
    {
      label: "评论",
      title: "评论区回应方向",
      body: "提前承接用户追问，给出更具体的回应口径，而不是只留下“可以放心使用”这类单薄回复。"
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
            面向商单种草场景的证据驱动内容优化原型。
          </p>
          <p className="seedingHeroNote">
            项目围绕广告感强、证据不足、表达边界不清等问题，搭建从草稿诊断到证据匹配、
            低广告感改写和发布前评估的工作流，帮助商单内容从“卖点堆砌”转向更可信的发布方案。
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
          <h2>真实感与评论区承接</h2>
          <p>
            在实际的商单种草作品里，问题往往不是“卖点不够多”，而是内容缺少真实使用感：
            商品参数堆得很满，用户为什么会相信却没有被说清楚；正文能把产品夸出来，
            评论区却只剩几句很薄的回应，接不住用户对效果、适用人群和使用风险的追问。
          </p>
          <p>
            所以这个原型先把输入压缩成少数必要材料：商品信息、平台和人群、原始草稿、
            评论反馈与证据材料。它不追求把关键词铺满，而是帮助创作者判断哪些话该保留、
            哪些话需要证据，哪些内容应该转成脚本画面或评论区回应。
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
          <p className="seedingKicker">02 证据链构建</p>
          <h2>把卖点、疑问和依据对齐</h2>
          <p>
            这套流程不是直接改写一篇更顺的文案，而是先把草稿里的主张拆开：
            哪些是商品卖点，哪些是用户疑问，哪些需要参数、评价或画面来支撑。
            证据链建立后，系统再决定表达应该保留、降调、补充说明，还是转成更适合拍摄的脚本。
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
        <figure className="seedingWorkflowFigure">
          <img src={withSiteBasePath("/images/seeding-copilot/workflow.png")} alt="种草文案优化 Copilot 的 Coze 工作流截图" />
          <figcaption>
            Coze 工作流截图：从广告感诊断、用户疑虑与证据链、低广告感文案优化，到发布前质量评分和最终结果汇总。
          </figcaption>
        </figure>
      </section>

      <section className="seedingSection seedingValidation">
        <div>
          <p className="seedingKicker">03 输出形式</p>
          <h2>按不同需求生成可对比方案</h2>
          <p>
            我用“护眼学习台灯”做验证，是因为这个品类很容易同时触发卖点表达和信任质疑：
            商家想强调护眼，家长会追问频闪、亮度和长期使用体验。这个案例更适合检验工具能不能
            根据不同需求产出合适的文案、脚本和评论区回应，并让修改前后的变化可以被比较。
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
          <h2>从草稿到发布材料</h2>
          <p>
            输出结果不只是一版“更顺”的正文，而是一组可以进入发布准备的材料：
            正文负责降低广告感，脚本负责把证据变成可拍画面，评论区回应负责承接用户追问。
            这样修改前后的差异不只体现在措辞上，也体现在信息密度和可信度上。
          </p>
        </div>
        <div className="seedingOutputPanel">
          <div>
            <Target size={22} weight="bold" />
            <strong>正文改写</strong>
            <p>减少绝对承诺，补充适用场景、依据和表达边界。</p>
          </div>
          <div>
            <NotePencil size={22} weight="bold" />
            <strong>脚本分镜</strong>
            <p>把“护眼、舒服、适合学习”转成能拍出来的动作和场景。</p>
          </div>
          <div>
            <PresentationChart size={22} weight="bold" />
            <strong>评论承接</strong>
            <p>围绕常见疑问准备回应方向，避免评论区信息过薄。</p>
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
          <img src={withSiteBasePath("/images/seeding-copilot/report-preview.png")} alt="种草文案优化 Copilot 一页报告预览" />
          <figcaption>One-page product report</figcaption>
        </figure>
      </section>

      <ProjectAccess work={work} />
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

  const evidenceSamples = [
    {
      title: "图片理解",
      src: withSiteBasePath("/images/wechat-bot/sample-vision-cropped-redacted.jpg"),
      alt: "脱敏后的微信图片理解样例",
      body: "群聊里直接发图并 @ bot，系统需要识别图片内容，同时保留引用关系和多人触发语境。"
    },
    {
      title: "文件理解",
      src: withSiteBasePath("/images/wechat-bot/sample-file-redacted.jpg"),
      alt: "脱敏后的微信文件理解样例",
      body: "文档作为消息进入聊天后，Agent 可以提取任务要求，输出可读摘要，而不是只处理纯文本问答。"
    }
  ];

  const stackSteps = [
    {
      title: "Wechaty",
      body: "接入微信，监听聊天消息。"
    },
    {
      title: "Message Store",
      body: "保存上下文、引用和历史。"
    },
    {
      title: "Command Router",
      body: "判断触发条件，分发任务。"
    },
    {
      title: "LLM Provider",
      body: "调用不同模型或服务。"
    },
    {
      title: "Chat Reply",
      body: "把结果发回微信对话。"
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
        <figure className="wechatScenarioCapture">
          <img src={withSiteBasePath("/images/wechat-bot/sample-trigger-clean-redacted.jpg")} alt="脱敏后的微信群聊长文本触发样例" />
          <figcaption>群聊长文本触发：保留 @、引用和消息结构，隐藏群名与具体身份。</figcaption>
        </figure>
      </section>

      <section className="wechatSection">
        <div className="wechatSectionHeader">
          <p className="wechatKicker">System</p>
          <h2>从消息入口到可控回复</h2>
          <p>
            项目可以拆成四个模块：接收微信消息，判断是否应该响应，构造上下文与记忆，
            再把请求路由到指定模型或 Pi agent。核心不是“自动回复”，而是让回复发生在可控范围内。
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
        <div className="wechatStack">
          {stackSteps.map((item, index) => (
            <div key={item.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{item.title}</strong>
              <p>{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="wechatSection">
        <div className="wechatSectionHeader">
          <p className="wechatKicker">Evidence</p>
          <h2>文本、图片和文件都在同一个 IM 场景里</h2>
          <p>
            下面两张样例展示了更复杂的输入形态：图片识别和文件理解。它们都来自真实聊天界面，
            已经隐去群名、头像和具体用户身份。
          </p>
        </div>
        <div className="wechatEvidenceGallery">
          {evidenceSamples.map((item) => (
            <figure className="wechatEvidenceCard" key={item.title}>
              <img src={item.src} alt={item.alt} />
              <figcaption>
                <strong>{item.title}</strong>
                <p>{item.body}</p>
              </figcaption>
            </figure>
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

      <ProjectAccess work={work} />
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
      src: withSiteBasePath("/images/beergame/reward_decomposition.png"),
      alt: "各企业利润分解图",
      caption: "把最终结果拆开，看收入和几类成本分别把利润推向哪里。"
    },
    {
      title: "长链路压力测试",
      src: withSiteBasePath("/images/beergame/chain_length_heatmap.png"),
      alt: "长链路压力测试热力图",
      caption: "当企业节点从 3 个扩到 5、7 个，压力开始在不同位置堆积。"
    },
    {
      title: "需求稳健性",
      src: withSiteBasePath("/images/beergame/demand_robustness.png"),
      alt: "不同需求强度下的策略稳健性",
      caption: "外部需求变强或变弱时，比较策略是否还能维持链路收益。"
    },
    {
      title: "牛鞭效应",
      src: withSiteBasePath("/images/beergame/bullwhip_comparison.png"),
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
          <img src={withSiteBasePath("/images/beergame/chain_map.png")} alt="啤酒游戏企业链路图" />
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
          <img src={withSiteBasePath("/images/beergame/local_global_tradeoff.png")} alt="局部利润与全链路利润对比" />
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

      <ProjectAccess work={work} />
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

function PokerCase({
  otherWorks,
  work
}: {
  otherWorks: typeof works;
  work: NonNullable<ReturnType<typeof getWork>>;
}) {
  const systemBlocks = [
    {
      title: "规则引擎",
      body: "先把游戏规则做硬：发牌、盲注、下注轮、all-in、摊牌和分池都由 Python 引擎统一处理，界面不替规则兜底。",
      icon: Scales
    },
    {
      title: "策略决策",
      body: "AI 不是看见大牌就冲。它会综合胜率、位置、底池赔率、SPR 和 fold equity，再选择 fold / call / raise / all-in。",
      icon: Robot
    },
    {
      title: "对手建模",
      body: "玩家不会总按教科书出牌。系统记录 VPIP、PFR、AF、fold-to-cbet 等指标，用行为反推对手范围。",
      icon: Database
    },
    {
      title: "离线训练",
      body: "CMA-ES 负责离线调参，自博弈结果保存为 JSON；Web 和 CLI 只加载冠军参数，不把训练压力带进对局。",
      icon: TrendUp
    }
  ];

  const flow = [
    {
      title: "Game Engine",
      body: "规则引擎生成牌局状态"
    },
    {
      title: "Decision Context",
      body: "整理底池、位置、可用动作"
    },
    {
      title: "Advanced AI",
      body: "估算胜率并选择行动"
    },
    {
      title: "Flask Web UI",
      body: "把结果反馈到牌桌界面"
    }
  ];

  const highlights = [
    "这不是一张会动的牌桌，而是一套从发牌到结算都能自洽运行的 heads-up 系统。",
    "AI 决策没有停在固定 if-else，而是把胜率、收益、对手范围和历史风格放到同一张决策桌上。",
    "训练和对局解耦：慢活交给离线 self-play，玩家看到的是已经加载好的策略版本。"
  ];

  const screens = [
    {
      title: "模式选择",
      src: withSiteBasePath("/images/poker/poker-start.png"),
      alt: "德州扑克 AI 项目的模式选择页面截图"
    },
    {
      title: "对局行动",
      src: withSiteBasePath("/images/poker/poker-table.png"),
      alt: "玩家与 AI 对战的牌桌页面截图"
    },
    {
      title: "翻牌阶段",
      src: withSiteBasePath("/images/poker/poker-flop.png"),
      alt: "带公共牌和下注按钮的德州扑克对局截图"
    }
  ];

  return (
    <main className="casePage pokerCasePage">
      <Link className="backLink" href="/#work">
        <ArrowLeft size={18} weight="bold" />
        返回作品
      </Link>

      <section className="pokerHero">
        <div className="pokerHeroCopy">
          <p className="pokerKicker">
            <Target size={18} weight="bold" />
            {work.label}
          </p>
          <h1>{work.title}</h1>
          <p className="lead">{work.summary}</p>
          <p className="pokerIntro">
            德州扑克好玩的地方在于：你永远看不全牌，却必须做一个像样的决定。这个项目把这件事拆成两层：
            底层是一套不讲情面的规则引擎，负责每一手牌的合法流程；上层是一套可训练的 AI 策略，
            在牌力、位置、赔率和对手行为之间做取舍。
          </p>
          <div className="pokerActions">
            <a
              className="button primary"
              href="https://github.com/Huangxuanming0911/poker"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
              <ArrowRight size={18} weight="bold" />
            </a>
            <a className="button secondary" href="#poker-system">
              查看系统
              <ArrowRight size={18} weight="bold" />
            </a>
          </div>
        </div>
        <div className="pokerTableVisual" aria-label="德州扑克 AI 对战示意">
          <div className="pokerOpponent">AI stack 4820</div>
          <div className="pokerBoard">
            {["A♠", "K♥", "8♣", "4♦", "J♠"].map((card) => (
              <span key={card}>{card}</span>
            ))}
          </div>
          <div className="pokerPot">Pot 360</div>
          <div className="pokerHand">
            <span>Q♠</span>
            <span>10♠</span>
          </div>
          <div className="pokerActionLog">
            <span>equity 0.61</span>
            <span>SPR 2.8</span>
            <strong>raise 3x</strong>
          </div>
        </div>
      </section>

      <section className="pokerSection pokerScreens">
        <div className="pokerSectionHeader">
          <h2>界面截图</h2>
          <p>
            下面是实际运行界面：模式选择、实时牌桌、玩家行动按钮、公共牌和行动日志都已经跑通。
            对一个扑克 AI 来说，最基本的诚意是牌局真的能打完。
          </p>
        </div>
        <div className="pokerScreenGrid">
          {screens.map((item) => (
            <figure key={item.title}>
              <img src={item.src} alt={item.alt} />
              <figcaption>{item.title}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section id="poker-system" className="pokerSection">
        <div className="pokerSectionHeader">
          <h2>系统结构</h2>
          <p>
            我把“能玩起来”和“会做决策”分开处理：先让规则闭环可靠，再把可调策略接到同一个行动接口。
            这样 AI 可以换，牌桌不会跟着散架。
          </p>
        </div>
        <div className="pokerSystemGrid">
          {systemBlocks.map((item) => {
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

      <section className="pokerSection pokerFlowSection">
        <div className="pokerSectionHeader">
          <h2>决策链路</h2>
          <p>
            每次轮到 AI 行动，引擎会打包可用动作、底池、下注额、位置、公共牌和对手快照。
            AI 只负责在约束内做选择，不能凭空发明一个“不合规但很聪明”的动作。
          </p>
        </div>
        <div className="pokerFlow">
          {flow.map((item, index) => (
            <div key={item.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{item.title}</strong>
              <p>{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="pokerSection pokerEvidence">
        <div>
          <h2>可展示亮点</h2>
          <ul>
            {highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="pokerEvidenceGrid">
          {work.evidence.slice(1).map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </section>

      <section className="pokerSection pokerRunbook">
        <div>
          <h2>运行方式</h2>
          <p>本地启动后可以直接在浏览器里进行玩家 vs AI 对局，适合复现一手牌的完整流程。</p>
        </div>
        <pre>
          <code>{`cd C:\\homework\\poker_github_repo
.\\.venv\\Scripts\\activate
python server.py

# 训练 AI 参数
python train.py --generations 5 --lambda 6 --hands 800 --workers 4`}</code>
        </pre>
      </section>

      <ProjectAccess work={work} />
      <section className="pokerRelated">
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

function BlackFlowCase({
  otherWorks,
  work
}: {
  otherWorks: typeof works;
  work: NonNullable<ReturnType<typeof getWork>>;
}) {
  const pipeline = [
    { title: "读取画面", body: "等待画面稳定，判断地图、部件箱或移动选择状态。", icon: MagnifyingGlass },
    { title: "还原地图", body: "提取节点、路径与文字语义，生成可复核的无向图。", icon: GitBranch },
    { title: "评估路线", body: "结合行动点、移动部件、节点偏好和奖励预期比较方案。", icon: Path },
    { title: "回收证据", body: "识别结算页面，经人工确认后沉淀为结构化奖励数据。", icon: Database }
  ];

  const figures = [
    {
      title: "路径识别",
      body: "青色区域是从半透明路径 UI 中提取的直接证据；节点和边仍保留待复核状态。",
      src: withSiteBasePath("/images/black-flow/path-recognition.png"),
      alt: "黑流树海地图路径识别标注结果"
    },
    {
      title: "统一图结构",
      body: "识别结果被转换为稳定节点 ID、语义标签、邻接关系与连通性诊断，供规划层读取。",
      src: withSiteBasePath("/images/black-flow/unified-map-graph.png"),
      alt: "黑流树海统一地图图结构"
    },
    {
      title: "桌面陪伴界面",
      body: "对话、路线工具、知识检索和模型设置被收进同一个置顶桌面窗口。",
      src: withSiteBasePath("/images/black-flow/companion-ui.png"),
      alt: "Black Flow Companion 桌面应用界面"
    }
  ];

  return (
    <main className="casePage blackFlowCasePage">
      <Link className="backLink" href="/#work">
        <ArrowLeft size={18} weight="bold" />
        返回作品
      </Link>

      <section className="blackFlowHero">
        <div>
          <p className="blackFlowLabel">{work.label}</p>
          <h1>{work.title}</h1>
          <p className="lead">{work.summary}</p>
          <p className="blackFlowIntro">
            地图上看得见节点和道路，真正困难的是把它们变成一次可解释的选择。
            这个原型把局内画面逐层转换为图结构、路线约束和奖励证据，让路线建议不只给答案，也保留答案从哪里来。
          </p>
        </div>
        <figure className="blackFlowHeroFigure">
          <img src={withSiteBasePath("/images/black-flow/unified-map-graph.png")} alt="带节点编号和路径标注的黑流树海地图" />
          <figcaption>从画面证据到规划层可读取的统一地图</figcaption>
        </figure>
      </section>

      <section className="blackFlowSection blackFlowContext">
        <div>
          <h2>决策场景</h2>
          <p>
            “黑流树海”的路线并不是简单选一条最短路。行动点会消耗，移动部件会改变可达范围，
            节点奖励又带有不确定性。玩家需要在推进、撤退、探索和资源收益之间持续取舍。
          </p>
        </div>
        <aside>
          <MapTrifold size={26} weight="duotone" />
          <strong>只读辅助</strong>
          <p>系统读取截图并输出建议，不点击、不控制、不修改游戏，也不会把低置信度结果包装成确定答案。</p>
        </aside>
      </section>

      <section className="blackFlowSection">
        <div className="blackFlowSectionHeader">
          <h2>分析链路</h2>
          <p>把一个模糊的“往哪走”拆成四个可以单独检查的环节。</p>
        </div>
        <div className="blackFlowPipeline">
          {pipeline.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.title}>
                <Icon size={24} weight="duotone" />
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="blackFlowSection">
        <div className="blackFlowSectionHeader">
          <h2>系统输出</h2>
          <p>三个界面分别回答：系统看见了什么、如何组织证据，以及玩家最终在哪里使用。</p>
        </div>
        <div className="blackFlowGallery">
          {figures.map((item) => (
            <figure key={item.title}>
              <img src={item.src} alt={item.alt} />
              <figcaption>
                <strong>{item.title}</strong>
                <span>{item.body}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="blackFlowSection blackFlowEvidence">
        <div>
          <h2>验证与边界</h2>
          <p>
            当前版本先建立可信的基线，而不是追求“看起来全自动”。六张校准截图用于人工验收和回归；
            识别层会输出置信度、冲突和复核标记，只有证据足够时才允许结果进入规划层。
          </p>
        </div>
        <ul>
          {work.evidence.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </section>

      <section className="blackFlowSection blackFlowNext">
        <h2>下一步</h2>
        <p>{work.nextStep}</p>
      </section>

      <ProjectAccess work={work} />
      <section className="pokerRelated">
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

function ProjectAccess({
  work
}: {
  work: NonNullable<ReturnType<typeof getWork>>;
}) {
  if (!work.links?.length && !work.quickStart?.length) {
    return null;
  }

  return (
    <div className="projectAccess">
      <div className="projectAccessHeader">
        <div>
          <h2>项目入口</h2>
          <p>先看运行结果，或进入仓库了解实现细节。</p>
        </div>
        <div className="projectAccessLinks">
          {work.links?.map((link) => {
            const Icon = link.kind === "demo" ? Globe : GithubLogo;
            return (
              <a href={link.href} key={link.href} rel="noreferrer" target="_blank">
                <Icon size={18} weight="bold" />
                {link.label}
                <ArrowSquareOut size={15} weight="bold" />
              </a>
            );
          })}
        </div>
      </div>
      {work.quickStart?.length ? (
        <div className="projectQuickStart">
          <TerminalWindow size={24} weight="duotone" />
          <div>
            <strong>快速开始</strong>
            <ol>
              {work.quickStart.map((step) => <li key={step}>{step}</li>)}
            </ol>
          </div>
        </div>
      ) : null}
    </div>
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
