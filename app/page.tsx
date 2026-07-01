import Image from "next/image";
import {
  ArrowRight,
  DownloadSimple,
  EnvelopeSimple,
  FileText,
  GithubLogo,
  Sparkle,
  Target,
  TreeStructure
} from "@phosphor-icons/react/dist/ssr";

const projects = [
  {
    title: "AI 简历优化助手",
    type: "LLM 产品设计",
    summary:
      "把岗位 JD、候选人经历和简历结构化评分结合，输出可解释的修改建议和面试追问点。",
    proof: ["结构化评分", "提示词评估", "风险提示"]
  },
  {
    title: "企业知识库问答",
    type: "RAG 场景落地",
    summary:
      "围绕引用、权限、幻觉兜底和检索质量，设计一套面向内部员工的问答工作流。",
    proof: ["检索链路", "引用可信度", "权限边界"]
  },
  {
    title: "Agent 任务协作台",
    type: "人机协同流程",
    summary:
      "把复杂任务拆成计划、工具调用、人工确认和失败回滚，让 AI 从聊天变成可控执行。",
    proof: ["任务拆解", "工具调用", "人工确认"]
  }
];

const strengths = [
  {
    icon: Target,
    title: "产品判断",
    copy: "把模型能力翻译成场景、指标和取舍，不停在功能清单。"
  },
  {
    icon: TreeStructure,
    title: "技术理解",
    copy: "能解释 RAG、Agent、提示词评估、成本、延迟和幻觉边界。"
  },
  {
    icon: FileText,
    title: "面试证据",
    copy: "每个项目都沉淀为问题、方案、权衡、结果和复盘。"
  }
];

const writings = [
  "为什么 AI 产品不能只写「接入大模型」",
  "RAG 产品的 6 个验收问题",
  "Agent 工作流里最容易被忽略的人工确认"
];

export default function Home() {
  return (
    <main>
      <nav className="nav">
        <a className="brand" href="#top" aria-label="回到首页">
          AI Product Portfolio
        </a>
        <div className="navLinks" aria-label="主导航">
          <a href="#projects">项目</a>
          <a href="#method">方法</a>
          <a href="#writing">文章</a>
          <a href="mailto:hello@example.com">联系</a>
        </div>
      </nav>

      <section id="top" className="hero">
        <div className="heroCopy">
          <p className="eyebrow">AI PRODUCT CANDIDATE</p>
          <h1>把大模型能力转化为能被面试官看懂的产品证据。</h1>
          <p className="lead">
            作品集围绕 AI 产品设计、RAG、Agent 和评估方法展开，服务简历初筛和深度面试。
          </p>
          <div className="heroActions">
            <a className="button primary" href="#projects">
              查看项目
              <ArrowRight size={18} weight="bold" />
            </a>
            <a className="button secondary" href="/resume">
              查看简历
              <DownloadSimple size={18} weight="bold" />
            </a>
          </div>
        </div>
        <div className="heroVisual">
          <Image
            src="/images/hero-workbench.png"
            alt="AI 产品作品集工作台"
            width={1400}
            height={875}
            priority
          />
        </div>
      </section>

      <section className="signalStrip" aria-label="作品集核心信号">
        <div>
          <strong>3</strong>
          <span>核心 AI 项目</span>
        </div>
        <div>
          <strong>4</strong>
          <span>面试追问角度</span>
        </div>
        <div>
          <strong>1</strong>
          <span>可下载简历入口</span>
        </div>
      </section>

      <section id="projects" className="section projects">
        <div className="sectionIntro">
          <h2>精选项目</h2>
          <p>
            先放最能证明 AI 产品能力的三个项目。每个项目都要能支撑面试官继续追问。
          </p>
        </div>
        <div className="projectGrid">
          {projects.map((project, index) => (
            <article className={`project project${index + 1}`} key={project.title}>
              <div>
                <span>{project.type}</span>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
              </div>
              <ul>
                {project.proof.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section id="method" className="section method">
        <div className="methodPanel">
          <Sparkle size={28} weight="fill" />
          <h2>项目详情页模板</h2>
          <p>
            每个案例固定回答：背景、用户、目标、方案、AI 能力边界、产品取舍、结果复盘。
          </p>
        </div>
        <div className="methodList">
          {strengths.map((item) => {
            const Icon = item.icon;
            return (
              <div className="methodItem" key={item.title}>
                <Icon size={24} weight="bold" />
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section id="writing" className="section writing">
        <div className="sectionIntro">
          <h2>产品思考</h2>
          <p>文章不追求数量，重点展示你如何判断 AI 产品是否真的值得做。</p>
        </div>
        <div className="writingList">
          {writings.map((title) => (
            <a href="#" key={title}>
              <span>{title}</span>
              <ArrowRight size={18} weight="bold" />
            </a>
          ))}
        </div>
      </section>

      <footer className="footer">
        <div>
          <h2>下一步，把真实经历填进去。</h2>
          <p>
            先用这个站点跑通结构，再逐步替换项目内容、简历 PDF、Demo 链接和文章。
          </p>
        </div>
        <div className="footerActions">
          <a className="button primary" href="mailto:hello@example.com">
            联系我
            <EnvelopeSimple size={18} weight="bold" />
          </a>
          <a className="button secondary" href="https://github.com/" target="_blank">
            GitHub
            <GithubLogo size={18} weight="bold" />
          </a>
        </div>
      </footer>
    </main>
  );
}
