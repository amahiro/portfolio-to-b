type Career = {
  period: string;
  employment: string;
  title: string;
  company: string;
  tasks: string[];
  env: string[];
  team: string;
};

// 職務経歴書（2026年9月）の Web 制作の職歴。会社名は伏せ、事業内容で書く
const careers: Career[] = [
  {
    period: "2026年2月〜2026年10月",
    employment: "業務委託",
    title: "大手製薬会社向けWebサイトのディレクション・コーディング",
    company: "企業の情報戦略に関するコンサルティング会社",
    tasks: [
      "既存Webサイトの改修",
      "GA4・GTM・GSCの設定を確認し、分析や改善提案",
      "自社サービスのロゴ・資料の作成",
      "展示会のブース背景など、印刷物のデザイン",
    ],
    env: ["HTML", "CSS / SCSS", "JavaScript", "jQuery", "GA4", "GTM", "GSC", "Figma", "Photoshop", "Illustrator", "AEM"],
    team: "30名",
  },
  {
    period: "2025年8月〜2026年1月",
    employment: "業務委託",
    title: "自社サービスのECパッケージのコーディング",
    company: "ECサイト構築事業の会社",
    tasks: [
      "支給されたデザインをもとに、レスポンシブで実装",
      "改善案にもとづくUI・構成の改修",
      "Google Apps Scriptを用いた業務の自動化",
    ],
    env: ["HTML", "CSS / SCSS", "JavaScript", "jQuery", "Google Apps Script", "Backlog", "Photoshop", "Adobe XD"],
    team: "全18名（フロント3名）",
  },
  {
    period: "2024年12月〜2025年6月",
    employment: "契約社員",
    title: "自社サービスのコーディング・CMS構築",
    company: "エンジニアリングサービスの会社",
    tasks: [
      "求人サイトの新規開発で、FigmaのデザインをもとにHTMLを作成し、エンジニアに共有",
      "Webサイト制作で、フロントの実装からmicroCMSとの連携・デプロイまで対応",
      "自社サービスの管理画面で、UIデザインの改善提案と実装を担当",
    ],
    env: ["HTML", "CSS / SCSS", "JavaScript", "Next.js", "microCMS", "Vercel", "EJS", "Git", "Gulp", "Figma"],
    team: "全9名（コーダー2名）",
  },
  {
    period: "2022年9月〜2024年5月",
    employment: "正社員",
    title: "美容医療・再生医療などのWebサイト・LP制作",
    company: "医療施設の運営サポート・広告代理業の会社",
    tasks: [
      "支給されたデザインをもとに、WordPressのサイトをレスポンシブで実装",
      "改善案にもとづくUI・構成の改修",
      "Ptengineでユーザーの行動データを分析し、UIや導線の改善案を提案",
      "社内フローを自動化するため、Google Apps Scriptで簡易ツールを作成",
    ],
    env: ["HTML", "CSS / SCSS", "JavaScript", "jQuery", "PHP", "Google Apps Script", "WordPress", "Ptengine", "Gulp", "EJS", "Git"],
    team: "全18名（フロント6名）",
  },
  {
    period: "2021年10月〜2022年6月",
    employment: "正社員",
    title: "飲食店・美容脱毛のWebサイト・LP制作",
    company: "Web・映像などの制作会社",
    tasks: [
      "支給されたデザインをもとに、レスポンシブで実装",
      "自社サイトのリニューアルで、要件整理・ワイヤーフレーム・デザインカンプ（XD）・実装・保守運用まですべて担当",
      "保守・運用のための管理マニュアルを作成",
    ],
    env: ["HTML", "CSS / SCSS", "JavaScript", "jQuery", "PHP", "Photoshop", "Adobe XD"],
    team: "全4名（フロント2名）",
  },
];

export default function HomeCareer() {
  return (
    <section className="career" id="career">
      <div className="inner inner--lg">
        <div className="ttl"><p className="ttl__en">CAREER</p><h2 className="ttl__jp">経歴</h2></div>
        <p className="sec-lead js-fade">制作会社・事業会社でのWeb制作の経歴です。<br className="pc" />あわせて個人の案件で、ヒアリングから公開・運用までを担当しています。</p>
        <ol className="career__list">
          {careers.map((career) => (
            <li key={career.period} className="js-fade">
              <div className="career__side">
                <p className="career__period">{career.period}</p>
                <p className="career__type">{career.employment}</p>
              </div>
              <div className="career__main">
                <h3>{career.title}</h3>
                <p className="career__company">{career.company}<span>チーム規模：{career.team}</span></p>
                <ul className="career__tasks">
                  {career.tasks.map((task) => (
                    <li key={task}>{task}</li>
                  ))}
                </ul>
                <ul className="works__tags">
                  {career.env.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
