type Skill = {
  name: string;
  years: string;
  level: string;
};

// 職務経歴書（2026年9月）の「使用言語/ライブラリ/その他ツール」と同じ内容
const skillGroups: Array<{ label: string; items: Skill[] }> = [
  {
    label: "言語",
    items: [
      { name: "HTML", years: "5年", level: "SEOを意識したマークアップが可能" },
      { name: "CSS", years: "5年", level: "FLOCSSやBEMを使った構造的な実装が可能" },
      { name: "JavaScript / TypeScript", years: "5年", level: "新規構築/既存コードの改修が可能" },
      { name: "PHP", years: "3年", level: "新規構築/既存コードの改修が可能" },
    ],
  },
  {
    label: "ライブラリ",
    items: [
      { name: "SCSS", years: "5年", level: "FLOCSSやBEMを使った構造的な実装が可能" },
      { name: "jQuery", years: "2年", level: "基本的な文法の理解/既存コードの改修が可能" },
      { name: "Node.js", years: "2年", level: "環境構築やツール実行が可能" },
      { name: "React、Next.js", years: "1年", level: "基本的な文法の理解/既存コードの改修が可能" },
    ],
  },
  {
    label: "CMS・\n開発環境",
    items: [
      { name: "WordPress", years: "5年", level: "スクラッチでWebサイト制作が可能" },
      { name: "microCMS", years: "4ヶ月", level: "環境構築が可能" },
      { name: "Adobe AEM", years: "6ヶ月", level: "基本的な操作が可能" },
      { name: "Gulp", years: "2年", level: "タスクの実装が可能" },
      { name: "Git", years: "1年", level: "基本的な操作が可能" },
      { name: "Vercel", years: "1年", level: "デプロイが可能" },
    ],
  },
  {
    label: "デザイン",
    items: [
      { name: "Figma", years: "1年", level: "コーディングが可能・プロトタイプが作成可能" },
      { name: "Adobe XD", years: "3年", level: "コーディング時に必要な操作が可能" },
      { name: "Adobe Photoshop", years: "2年", level: "コーディング時に必要な操作が可能" },
      { name: "Adobe Illustrator", years: "6ヶ月", level: "コーディング時に必要な操作・ロゴ制作が可能" },
    ],
  },
  {
    label: "解析・\nその他",
    items: [
      { name: "Google Analytics 4", years: "4ヶ月", level: "基本的な設定内容の理解が可能" },
      { name: "Google Tag Manager", years: "4ヶ月", level: "基本的な設定内容の理解が可能" },
      { name: "Google Search Console", years: "4ヶ月", level: "基本的な設定内容の理解が可能" },
      { name: "Google Apps Script", years: "1年", level: "基本的な文法の理解・実行が可能" },
      { name: "楽天RMS・GOLD", years: "1年", level: "ページの改修が可能" },
      { name: "Yahoo!ショッピング", years: "1年", level: "ページの改修が可能" },
    ],
  },
];

export default function HomeSkills() {
  return (
    <section className="skills" id="skills">
      <div className="inner inner--lg skills__grid">
        <div className="skills__head">
          <div className="ttl"><p className="ttl__en">SKILLS</p><h2 className="ttl__jp">使用言語・ツール</h2></div>
          <p className="skills__lead js-fade">コーディングを軸に、<br className="sp" />CMS・デザイン・解析まで。</p>
          <p className="skills__text js-fade">それぞれの経験年数と、できることの目安です。</p>
        </div>
        <dl className="skills__types js-stagger">
          {skillGroups.map((group) => (
            <div key={group.label}>
              <dt>
                {group.label.split("\n").map((line, i) => (
                  <span key={line}>{i > 0 ? <br className="pc" /> : null}{line}</span>
                ))}
              </dt>
              <dd>
                <ul>
                  {group.items.map((item) => (
                    <li key={item.name}>
                      <span className="skills__name">{item.name}</span>
                      <span className="skills__years">{item.years}</span>
                      <span className="skills__level">{item.level}</span>
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
