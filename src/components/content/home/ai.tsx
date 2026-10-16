const tools = ["Claude Code", "Codex", "Agent Skills", "MCP", "Playwright", "Context7"];

const practices = [
  {
    title: "制作の工程を「スキル」にして、\n毎回同じ品質で回す",
    text: "要件定義と参考サイトの洗い出し、参考サイトの構成を読み取ったモックの作成、SEO記事の作成などを、Claude Code のスキル（手順書とスクリプト）にしています。その場の指示に頼らず、決めた手順どおりに進められます。",
  },
  {
    title: "「確かめる」ところまで\n手順に組み込む",
    text: "モックの作成では、Playwright で参考サイトと作ったページのスクリーンショットを並べ、違いがなくなるまで直す比較を必ず行います。文言は元のサイトの記載と照らし合わせ、載せ漏れを自動で確かめます。",
  },
  {
    title: "指摘をためて、\nスキルを育てる",
    text: "使うたびに振り返り、受けた指摘や気づいたことを、スキルの「知見集」に書き足しています。一度直されたことを二度繰り返さないための仕組みです。",
  },
  {
    title: "AIが迷わない\nルールを先に書く",
    text: "デザインの判断基準やコーディング・SEOのルールを文書にして、AIエージェントが実装の前に読む前提でリポジトリに置いています。ライブラリは Context7 で最新のドキュメントを参照させています。",
  },
  {
    title: "複数のエージェントを\n衝突させずに並行で動かす",
    text: "別々の案件でエージェントを同時に動かすため、作業フォルダとローカルサーバーのポートを案件ごとに分け、Git でコミットする範囲を自分の案件だけに限るなどのルールを決めて運用しています。",
  },
  {
    title: "AIの出力を\n確かめやすくする",
    text: "「サイトに書いていない事実は書かない」「推測で埋めた項目には（推定）と付ける」など、出力を人が確かめやすくする決まりも手順に入れています。",
  },
];

export default function HomeAi() {
  return (
    <section className="ai" id="ai">
      <div className="inner inner--lg">
        <div className="ttl"><p className="ttl__en">AI-DRIVEN DEVELOPMENT</p><h2 className="ttl__jp">AIを活用した開発</h2></div>
        <p className="sec-lead js-fade">Claude Code と Codex を、ただ使うのではなく、制作の手順として組み込んでいます。<br className="pc" />個人の制作で実際に運用している仕組みです。</p>
        <ul className="works__tags ai__tools js-fade">
          {tools.map((tool) => (
            <li key={tool}>{tool}</li>
          ))}
        </ul>
        <ol className="ai__list js-stagger">
          {practices.map((item, i) => (
            <li key={item.title}>
              <span className="num">{String(i + 1).padStart(2, "0")}</span>
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
