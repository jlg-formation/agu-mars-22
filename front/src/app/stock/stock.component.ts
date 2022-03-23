import { Component, OnInit } from '@angular/core';
import { Article } from '../interfaces/article';
import { ArticleService } from '../services/article.service';
import { faPlus, faTrashCan } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss'],
})
export class StockComponent implements OnInit {
  faPlus = faPlus;
  faTrashCan = faTrashCan;
  selectedArticles = new Set<Article>();
  constructor(public articleService: ArticleService) {}

  ngOnInit(): void {}

  toggle(a: Article) {
    if (this.selectedArticles.has(a)) {
      this.selectedArticles.delete(a);
      return;
    }
    this.selectedArticles.add(a);
  }

  remove() {
    this.articleService.remove(this.selectedArticles);
    this.selectedArticles.clear();
  }
}
