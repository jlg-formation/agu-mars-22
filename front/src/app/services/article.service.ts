import { Injectable } from '@angular/core';
import { Article } from '../interfaces/article';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  articles = this.getArticles();

  constructor() {}

  add(a: Article) {
    this.articles.push(a);
    this.save();
  }

  getArticles(): Article[] {
    const str = localStorage.getItem('articles');
    if (!str) {
      return [];
    }
    return JSON.parse(str) as Article[];
  }

  remove(selectedArticles: Set<Article>) {
    this.articles = this.articles.filter((a) => !selectedArticles.has(a));
    this.save();
  }

  save() {
    localStorage.setItem('articles', JSON.stringify(this.articles));
  }
}
