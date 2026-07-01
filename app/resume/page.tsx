import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  EnvelopeSimple,
  GithubLogo
} from "@phosphor-icons/react/dist/ssr";
import { profile, resumeBlocks, works } from "../data/portfolio";

export default function ResumePage() {
  return (
    <main className="resumePage">
      <Link className="backLink" href="/">
        <ArrowLeft size={18} weight="bold" />
        返回首页
      </Link>
      <section className="resumeHero">
        <p className="eyebrow">ABOUT / RESUME</p>
        <h1>{profile.name}</h1>
        <p className="heroTitle">{profile.nameEn}</p>
        <p className="lead">
          我关注 AI 产品、复杂系统体验和自动化工作流，习惯用原型、代码和复盘把想法落到可讨论的作品里。
        </p>
        <div className="heroActions">
          <a className="button primary" href={`mailto:${profile.email}`}>
            联系我
            <EnvelopeSimple size={18} weight="bold" />
          </a>
          <a className="button secondary" href={profile.github} target="_blank">
            GitHub
            <GithubLogo size={18} weight="bold" />
          </a>
        </div>
      </section>

      <section className="resumeGrid" aria-label="简历摘要">
        {resumeBlocks.map((block) => (
          <article className="resumeBlock" key={block.title}>
            <h2>{block.title}</h2>
            <ul>
              {block.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className="resumeWorks" aria-label="作品入口">
        <h2>作品入口</h2>
        <div className="miniWorkList">
          {works.map((work) => (
            <Link href={`/work/${work.slug}/`} key={work.slug}>
              <span>{work.title}</span>
              <ArrowRight size={17} weight="bold" />
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
