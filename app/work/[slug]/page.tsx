import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react/dist/ssr";
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
