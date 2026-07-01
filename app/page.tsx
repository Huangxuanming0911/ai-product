import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  EnvelopeSimple,
  GithubLogo,
  ReadCvLogo
} from "@phosphor-icons/react/dist/ssr";
import { notes, practices, profile, works } from "./data/portfolio";

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
          <a href="#notes">Notes</a>
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
              View Work
              <ArrowRight size={18} weight="bold" />
            </a>
            <a className="button secondary" href="#about">
              About
              <ArrowRight size={18} weight="bold" />
            </a>
          </div>
        </div>
        <div className="heroVisual">
          <Image
            src="/images/hero-workbench.png"
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
            <span>长期关注</span>
          </div>
        ))}
      </section>

      <section id="work" className="section workSection">
        <div className="sectionIntro">
          <h2>Selected Work</h2>
          <p>
            这些项目来自真实实践：有算法实验，有 IM agent，有本地桥接工具，也有这个站点本身。
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
          <h2>Practice</h2>
          <p>
            我更关心想法如何被验证：从问题、流程、界面到代码，让复杂能力变成可体验的系统。
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

      <section id="notes" className="section notesSection">
        <div className="sectionIntro">
          <h2>Notes</h2>
          <p>一些还在展开的观察和写作主题。它们记录我如何理解 AI、产品和系统。</p>
        </div>
        <div className="notesList">
          {notes.map((note) => (
            <article className="noteItem" key={note.title}>
              <div>
                <h3>{note.title}</h3>
                <p>{note.summary}</p>
              </div>
              <ArrowRight size={18} weight="bold" />
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="section aboutSection">
        <div className="aboutCopy">
          <h2>About</h2>
          <p>
            我是{profile.name}，目前把个人项目当作一种学习方式：用代码验证想法，用文字整理判断，用作品连接技术和真实场景。
          </p>
          <p>
            这个站点会持续更新，逐步补充项目截图、Demo、文章和复盘。它不只是简历，也是我整理实践脉络的地方。
          </p>
        </div>
        <div className="aboutActions">
          <a className="button primary" href={`mailto:${profile.email}`}>
            联系我
            <EnvelopeSimple size={18} weight="bold" />
          </a>
          <a className="button secondary" href={profile.github} target="_blank">
            GitHub
            <GithubLogo size={18} weight="bold" />
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
