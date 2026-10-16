const strengths = [
  {
    title: "ディレクション・デザイン・\nコーディングを横断",
    text: "制作会社・事業会社で、ディレクター・デザイナー・エンジニアと連携しながら制作してきました。直近ではコーディングに加えて、Webサイトのディレクションや、ロゴ・資料・展示ブースの背景などのデザインも担当しました。",
  },
  {
    title: "データにもとづく\n改善の提案と実装",
    text: "Ptengineの行動データやGA4・GTM・GSCをもとに、UIや導線の改善案を出し、実装まで行ってきました。Google Apps Scriptで、社内の作業を自動化するツールも作成しています。",
  },
  {
    title: "ヒアリングから運用まで\n一人で進められる",
    text: "個人の案件では、ヒアリング・構成設計・デザイン・実装・公開設定までを一人で担当しています。サイトの目的と更新のしかたに合わせて、WordPressとNext.jsを使い分けています。",
  },
];

export default function HomeStrength() {
  return (
    <section className="reason" id="strength">
      <div className="inner inner--lg">
        <div className="ttl"><p className="ttl__en">STRENGTHS</p><h2 className="ttl__jp">わたしの強み</h2></div>
        <ol className="reason__list js-stagger">
          {strengths.map((item, i) => (
            <li key={item.title}>
              <span className="reason__num">{String(i + 1).padStart(2, "0")}</span>
              <h3>
                {item.title.split("\n").map((line, j) => (
                  <span key={line}>{j > 0 ? <br className="pc" /> : null}{line}</span>
                ))}
              </h3>
              <p>{item.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
