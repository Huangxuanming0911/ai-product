import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  EnvelopeSimple,
  Phone,
  ReadCvLogo
} from "@phosphor-icons/react/dist/ssr";
import { practices, profile, works } from "./data/portfolio";
import { withSiteBasePath } from "./utils/site-path";

const workCovers: Record<string, { src: string; alt: string }> = {
  "seeding-copilot": {
    src: "/images/seeding-copilot/workflow.png",
    alt: "种草文案优化 Copilot 工作流"
  },
  "beergame-dqn": {
    src: "/images/beergame/chain_map.png",
    alt: "Beer Game 供应链链路图"
  },
  "wechat-bot": {
    src: "/images/wechat-bot/sample-trigger-clean-redacted.jpg",
    alt: "微信机器人真实对话示例"
  },
  "black-flow-companion": {
    src: "/images/black-flow/unified-map-graph.png",
    alt: "黑流树海地图节点与路径识别结果"
  },
  "poker-ai": {
    src: "/images/poker/poker-table.png",
    alt: "德州扑克智能体对战界面"
  }
};

export default function Home() {
  return (
    <main>
      <nav className="nav">
        <a className="brand" href="#top" aria-label="回到首页">
          {profile.nameEn}
        </a>
        <div className="navLinks" aria-label="主导航">
          <a href="#work">Work</a>
          <a href="#practice">Practice</a>
          <a href="#about">About</a>
        </div>
      </nav>

      <section id="top" className="hero">
        <div className="heroCopy">
          <h1>{profile.name}</h1>
          <p className="heroNameEn">{profile.nameEn}</p>
          <p className="heroTitle">{profile.title}</p>
          <p className="lead">{profile.summary}</p>
          <div className="heroActions">
            <a className="button primary" href="#work">
              查看作品
              <ArrowRight size={18} weight="bold" />
            </a>
            <a className="button secondary" href="#about">
              联系方式
              <ArrowRight size={18} weight="bold" />
            </a>
          </div>
        </div>
        <div className="heroVisual">
          <Image
            src={withSiteBasePath("/images/hero-workbench.png")}
            alt="AI 产品与系统原型工作台"
            width={1400}
            height={875}
            priority
          />
          <p>Ideas become clearer when they can be opened, tested and questioned.</p>
        </div>
      </section>

      <section id="work" className="section workSection">
        <div className="sectionIntro">
          <h2>Selected Work</h2>
          <p>
            几个近期项目，覆盖内容工具、复杂系统决策、视觉识别、游戏 AI 和微信 Agent。
          </p>
        </div>
        <div className="workGrid">
          {works.map((work, index) => (
            <Link
              className={`workCard workCard${index + 1}`}
              href={`/work/${work.slug}/`}
              key={work.slug}
            >
              <figure className="workCover">
                <Image
                  src={withSiteBasePath(workCovers[work.slug].src)}
                  alt={workCovers[work.slug].alt}
                  width={1200}
                  height={760}
                />
              </figure>
              <div className="workMeta">
                <span>{work.label}</span>
                <ArrowRight size={18} weight="bold" aria-hidden="true" />
              </div>
              <div className="workCardCopy">
                <h3>{work.title}</h3>
                <p>{work.summary}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section id="practice" className="section practiceSection">
        <div className="sectionIntro">
          <h2>Working Style</h2>
          <p>
            项目通常从一个具体问题开始，再进入原型、指标、界面和部署。
          </p>
        </div>
        <div className="practiceGrid">
          {practices.map((item, index) => {
            const Icon = item.icon;
            return (
              <article className="practiceItem" key={item.title}>
                <span className="practiceIndex">0{index + 1}</span>
                <Icon size={24} weight="regular" aria-hidden="true" />
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section id="about" className="section aboutSection">
        <div className="aboutCopy">
          <h2>About</h2>
          <p>
            我是{profile.name}。这个站点集中放置我做过的原型、实验和工具，关注内容工作流、复杂系统决策、视觉识别与智能体交互。
          </p>
          <div className="contactList">
            <a href={`mailto:${profile.email}`}>
              <EnvelopeSimple size={20} weight="regular" />
              {profile.email}
            </a>
            <a href={`tel:${profile.phone}`}>
              <Phone size={20} weight="regular" />
              {profile.phone}
            </a>
          </div>
        </div>
        <div className="aboutActions">
          <a className="button primary" href={`mailto:${profile.email}`}>
            联系我
            <EnvelopeSimple size={18} weight="bold" />
          </a>
          <Link className="button secondary" href={profile.resumeHref}>
            Resume
            <ReadCvLogo size={18} weight="bold" />
          </Link>
        </div>
      </section>
    </main>
  );
}
