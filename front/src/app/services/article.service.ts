import { Injectable } from '@angular/core';
import { Article } from '../interfaces/article';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  articles: Article[] = [
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

  constructor() {}
}
