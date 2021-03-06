import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Article } from '../interfaces/article';
import { ArticleService } from './article.service';

const url = '/api/articles';

@Injectable({
  providedIn: 'root',
})
export class HttpArticleService extends ArticleService {
  constructor(private http: HttpClient) {
    super();
    console.log('instantiated http article service');
    this.retrieveAll();
  }

  retrieveAll() {
    this.http.get<Article[]>(url).subscribe({
      next: (articles) => {
        this.articles = articles;
        this.save();
      },
      error: (err) => {
        console.log('err: ', err);
      },
      complete: () => {
        console.log('complete');
      },
    });
  }

  override add(a: Article): void {
    super.add(a);
    this.http.post<void>(url, a).subscribe({
      next: () => {
        this.retrieveAll();
      },
      error: (err) => {
        console.log('err: ', err);
      },
      complete: () => {
        console.log('complete');
      },
    });
  }

  override remove(selectedArticles: Set<Article>): void {
    super.remove(selectedArticles);
    const ids = [...selectedArticles].map((a) => a.id);
    this.http
      .delete(url, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
        body: JSON.stringify(ids),
      })
      .subscribe({
        next: () => {
          this.retrieveAll();
        },
        error: (err) => {
          console.log('err: ', err);
        },
        complete: () => {
          console.log('complete');
        },
      });
  }
}
