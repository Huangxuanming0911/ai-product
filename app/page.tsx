import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  EnvelopeSimple,
  ReadCvLogo
} from "@phosphor-icons/react/dist/ssr";
import { practices, profile, works } from "./data/portfolio";
import { withSiteBasePath } from "./utils/site-path";

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
          <p className="eyebrow">{profile.nameEn}</p>
          <h1>
            {profile.name}
          </h1>
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
        </div>
      </section>

      <section className="signalStrip" aria-label="个人实践方向">
        {profile.focus.map((item) => (
          <div key={item}>
            <strong>{item}</strong>
            <span>作品方向</span>
          </div>
        ))}
      </section>

      <section id="work" className="section workSection">
        <div className="sectionIntro">
          <h2>Selected Work</h2>
          <p>
            几个近期项目，覆盖内容工具、供应链决策实验、扑克 AI 和微信 Agent。
          </p>
        </div>
        <div className="workGrid">
          {works.map((work, index) => (
            <Link
              className={`workCard workCard${index + 1}`}
              href={`/work/${work.slug}/`}
              key={work.slug}
            >
              <div className="workMeta">
                <span>{work.label}</span>
                <span>{work.status}</span>
              </div>
              <div>
                <h3>{work.title}</h3>
                <p>{work.summary}</p>
              </div>
              <div className="tagRow">
                {work.tags.slice(0, 4).map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
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
          {practices.map((item) => {
            const Icon = item.icon;
            return (
              <article className="practiceItem" key={item.title}>
                <Icon size={26} weight="bold" />
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section id="about" className="section aboutSection">
        <div className="aboutCopy">
          <h2>About</h2>
          <p>
            我是{profile.name}。这个站点集中放置我做过的原型、实验和工具，覆盖内容工具、供应链决策、游戏 AI 和微信 Agent 等方向。
          </p>
          <p>
            目前内容还在持续补齐：在线 Demo、项目截图、方法说明和复盘文章会逐步更新。
          </p>
          <p className="contactLine">
            邮箱：<a href={`mailto:${profile.email}`}>{profile.email}</a>
          </p>
          <p className="contactLine">
            电话：<a href={`tel:${profile.phone}`}>{profile.phone}</a>
          </p>
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
