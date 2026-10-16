import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowSquareOut } from "@phosphor-icons/react/dist/ssr";
import HomeEffects, { HomeNoScriptStyle } from "@/components/content/home/home-effects";
import "@/components/content/home/home.css";
import { detailWorks } from "@/constants/works";
import { SITE_NAME } from "@/constants/site-info";

type PageParams = {
  slug: string;
};

export function generateStaticParams() {
  return detailWorks.map((work) => ({ slug: work.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<PageParams>;
}): Promise<Metadata> {
  const { slug } = await params;
  const work = detailWorks.find((item) => item.slug === slug);
  if (!work) return {};
  return {
    title: `${work.title} | ${SITE_NAME}`,
    description: work.lead,
    robots: {
      index: false,
      follow: false,
    },
  };
}

export default async function WorkPage({
  params,
}: {
  params: Promise<PageParams>;
}) {
  const { slug } = await params;
  const index = detailWorks.findIndex((item) => item.slug === slug);
  if (index === -1) notFound();
  const work = detailWorks[index];
  const prev = detailWorks[index - 1];
  const next = detailWorks[index + 1];

  return (
    // スタイルは home.css（.tp の中だけに効く）
    <div className="tp">
      <HomeNoScriptStyle />
      <article className="work">
        <div className="inner inner--lg">
          <p className="work__back"><Link href="/#works">← 制作実績の一覧へ</Link></p>

          <header className="work__head js-fade">
            <p className="ttl__en">WORKS</p>
            <h1 className="work__ttl">{work.title}</h1>
            <p className="work__lead">{work.lead}</p>
            <ul className="works__tags">
              {work.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </header>

          {work.mockup ? (
            <figure className="work__mock js-fade">
              <Image
                src={work.mockup}
                alt={`${work.title}のPC・スマホでの表示`}
                width={2000}
                height={1260}
                sizes="(max-width: 1100px) 90vw, 1000px"
                priority
              />
            </figure>
          ) : null}

          <div className="work__body">
            <dl className="work__facts js-fade">
              {work.facts?.map((fact) => (
                <div key={fact.label}>
                  <dt>{fact.label}</dt>
                  <dd>{fact.value}</dd>
                </div>
              ))}
              {work.url ? (
                <div>
                  <dt>サイトURL</dt>
                  <dd>
                    <a href={work.url} target="_blank" rel="noopener noreferrer">{work.url}</a>
                  </dd>
                </div>
              ) : null}
            </dl>

            <div className="work__main">
              {work.intro ? <p className="work__intro js-fade">{work.intro}</p> : null}

              {work.points ? (
                <section className="work__sec js-fade">
                  <h2 className="work__h2"><span className="ttl__en">POINT</span>工夫したポイント</h2>
                  <ol className="work__points">
                    {work.points.map((point, i) => (
                      <li key={point.title}>
                        <span className="num">{String(i + 1).padStart(2, "0")}</span>
                        <h3>{point.title}</h3>
                        <p>{point.text}</p>
                      </li>
                    ))}
                  </ol>
                </section>
              ) : null}

              {work.tech ? (
                <section className="work__sec js-fade">
                  <h2 className="work__h2"><span className="ttl__en">TECHNOLOGY</span>技術を選んだ理由</h2>
                  <p className="work__text">{work.tech}</p>
                </section>
              ) : null}

              {work.results ? (
                <section className="work__sec js-fade">
                  <h2 className="work__h2"><span className="ttl__en">RESULT</span>成果</h2>
                  <ul className="work__results">
                    {work.results.map((result) => (
                      <li key={result}>{result}</li>
                    ))}
                  </ul>
                </section>
              ) : null}

              {work.url ? (
                <p className="work__visit js-fade">
                  <a className="btn btn--main" href={work.url} target="_blank" rel="noopener noreferrer">
                    制作したサイトを見る
                    <i className="is-out" aria-hidden="true"><ArrowSquareOut weight="bold" /></i>
                  </a>
                </p>
              ) : null}
            </div>
          </div>

          <nav className="work__pager" aria-label="ほかの制作実績">
            {prev ? (
              <Link href={`/works/${prev.slug}`}><span>PREV</span>{prev.title}</Link>
            ) : null}
            {next ? (
              <Link href={`/works/${next.slug}`}><span>NEXT</span>{next.title}</Link>
            ) : null}
          </nav>
        </div>
      </article>
      <HomeEffects />
    </div>
  );
}
