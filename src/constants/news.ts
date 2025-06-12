export interface NewsItem {
  id: number;
  category: string;
  date: string;
  title: string;
  link?: string;
}

export const newsList: NewsItem[] = [
  { id: 1, category: "お知らせ", date: "2024年12月12日", title: "ホームページを作成しました", link: "/news/new-site" },
]; 