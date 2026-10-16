import { preload } from "react-dom";
import { ArrowDown } from "@phosphor-icons/react/dist/ssr";

// スマホには軽い動画（360p）、それ以外には 720p を出す。
// React は video の muted 属性を HTML に書き出さず、iPhone ではそれだと自動再生が始まらないことがあるため、
// 動画のタグは HTML の文字列で入れる（再生のやり直しは home-effects.tsx）
const heroVideoHtml =
  '<video class="hero__video" autoplay muted loop playsinline preload="auto" poster="/home/hero-poster.jpg" aria-hidden="true" tabindex="-1" disablepictureinpicture>' +
  '<source src="/home/hero-sp.mp4" type="video/mp4" media="(max-width: 767px)">' +
  '<source src="/home/hero.mp4" type="video/mp4">' +
  "</video>";

export default function HomeHero() {
  preload("/home/hero-poster.jpg", { as: "image", fetchPriority: "high" });
  return (
    <section className="hero">
      <div dangerouslySetInnerHTML={{ __html: heroVideoHtml }} />
      <div className="hero__inner">
        <p className="hero__en">WEB DEVELOPER PORTFOLIO</p>
        <h1 className="hero__catch">
          <span className="line"><span>コーディングを軸に、<br />デザインとディレクションまで</span></span>
        </h1>
        <p className="hero__lead">制作会社・事業会社で、コーポレートサイト・LP・ECサイトの制作に携わってきました。CMS構築やUI改善、GA4・GTM・GSCを使った改善提案まで対応しています。個人の案件では、ヒアリングから公開・運用までを一人で担当しています。</p>
        <ul className="hero__btns">
          <li><a className="btn btn--white" href="#works">制作実績を見る<i className="is-down" aria-hidden="true"><ArrowDown weight="bold" /></i></a></li>
          <li><a className="btn btn--ghost" href="#career">経歴を見る<i className="is-down" aria-hidden="true"><ArrowDown weight="bold" /></i></a></li>
        </ul>
      </div>
    </section>
  );
}
