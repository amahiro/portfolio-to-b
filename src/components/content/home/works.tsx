import Image from "next/image";
import Link from "next/link";
import { works, type Work } from "@/constants/works";

function WorkCard({ work }: { work: Work }) {
  return (
    <>
      <div className="works__img">
        <Image
          src={work.image}
          alt={work.title}
          width={1080}
          height={600}
          sizes="(max-width: 767px) 50vw, (max-width: 1023px) 33vw, 25vw"
        />
      </div>
      <h3>{work.title}</h3>
      <p>{work.lead}</p>
      <ul className="works__tags">
        {work.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
      {work.slug ? <span className="works__more">詳しく見る →</span> : null}
    </>
  );
}

export default function HomeWorks() {
  return (
    <section className="works" id="works">
      <div className="inner inner--lg">
        <div className="ttl">
          <p className="ttl__en">WORKS</p>
          <h2 className="ttl__jp">制作実績</h2>
        </div>
        <p className="sec-lead js-fade">店舗・企業の公式サイトや採用サイト、Web制作会社様のサンプルテンプレートなど、ご依頼いただいた案件です。<br className="pc" />各実績の詳細ページで、担当範囲・工夫したポイント・技術を選んだ理由をまとめています。</p>
        <ul className="works__list">
          {works.map((work) => (
            <li key={work.title} className="js-fade">
              {work.slug ? (
                <Link href={`/works/${work.slug}`}>
                  <WorkCard work={work} />
                </Link>
              ) : (
                <div>
                  <WorkCard work={work} />
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
