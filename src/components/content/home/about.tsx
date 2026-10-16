import Image from "next/image";

const greeting = [
  "はじめまして、天野広揮です。",
  "経理の仕事を経てWeb制作の道に進み、制作会社・事業会社で約5年、コーポレートサイトやLP、ECサイトの制作に携わってきました。",
  "コーディングを軸に、CMS構築・UI改善・運用保守までを担当し、直近ではディレクションやデザイン、アクセス解析にもとづく改善提案にも取り組んできました。",
  "新しい環境でも、制作の全体を見渡しながら、チームの一員として貢献したいと考えています。",
  "どうぞよろしくお願いいたします。",
];

export default function HomeAbout() {
  return (
    <section className="about" id="about">
      <div className="inner inner--lg">
        <p className="about__ttl js-fade"><span className="ttl__en">ABOUT</span>わたしについて</p>
        <h2 className="about__catch js-fade">「つくるだけでなく、<br className="pc" />良くするところまで。」</h2>
        <div className="about__body">
          <figure className="about__photo js-fade"><Image src="/top/about.jpg" alt="天野広揮の写真" width={1200} height={800} sizes="(max-width: 767px) 62vw, 380px" /></figure>
          <div className="about__text js-fade">
            <h3>ご覧いただきありがとうございます</h3>
            {greeting.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
