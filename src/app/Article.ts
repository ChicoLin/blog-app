export interface Article {
  title: string;
  publishDate: Date;
  lastUpdateDate: Date;
  content: string;

  getTimePast(): number;
}

export class TechArticle implements Article {
  getTimePast(): number {
    return Date.now() - this.lastUpdateDate;
  }
}
