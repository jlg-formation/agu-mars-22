import { Component, OnInit } from '@angular/core';
import { Article } from '../interfaces/article';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss'],
})
export class StockComponent implements OnInit {
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

  ngOnInit(): void {}
}
