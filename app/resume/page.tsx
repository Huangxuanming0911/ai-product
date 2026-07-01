import Link from "next/link";
import { ArrowLeft, EnvelopeSimple } from "@phosphor-icons/react/dist/ssr";

const resumeBlocks = [
  {
    title: "求职方向",
    items: ["AI 产品经理", "Agent / RAG 产品", "大模型应用增长与评估"]
  },
  {
    title: "能力关键词",
    items: ["需求拆解", "提示词与评估", "产品指标", "原型设计", "技术协作"]
  },
  {
    title: "项目证据",
    items: ["AI 简历优化助手", "企业知识库问答", "Agent 任务协作台"]
  }
];

export default function ResumePage() {
  return (
    <main className="resumePage">
      <Link className="backLink" href="/">
        <ArrowLeft size={18} weight="bold" />
        返回作品集
      </Link>
      <section className="resumeHero">
        <p className="eyebrow">ONLINE RESUME</p>
        <h1>你的名字</h1>
        <p className="lead">
          这里替换成你的真实经历摘要：用 2-3 句话说明你为什么适合 AI 产品岗位。
        </p>
        <a className="button primary" href="mailto:hello@example.com">
          联系我
          <EnvelopeSimple size={18} weight="bold" />
        </a>
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
    </main>
  );
}
