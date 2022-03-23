import { Injectable } from '@angular/core';
import { Article } from '../interfaces/article';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  articles = this.getArticles();

  constructor() {}

  getArticles(): Article[] {
    const str = localStorage.getItem('articles');
    if (!str) {
      return [
        {
          name: 'Tournevis',
          price: 2.34,
          qty: 145,
        },
        {
          name: 'Marteau',
          price: 4.5,
          qty: 23,
        },
        {
          name: 'Pince',
          price: 6,
          qty: 12,
        },
      ];
    }
    return JSON.parse(str) as Article[];
  }

  save() {
    localStorage.setItem('articles', JSON.stringify(this.articles));
  }

  add(a: Article) {
    this.articles.push(a);
    this.save();
  }
}
