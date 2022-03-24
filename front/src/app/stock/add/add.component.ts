import { ArticleService } from './../../services/article.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from 'src/app/interfaces/article';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent {
  f = new FormGroup({
    name: new FormControl('qwerqwer'),
    price: new FormControl(45),
    qty: new FormControl(12),
  });

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private articleService: ArticleService
  ) {}

  submit() {
    console.log('submit');
    this.articleService.add(this.f.value as Article);
    this.router.navigate(['..'], { relativeTo: this.route });
  }
}
