import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {ArticleService} from '../article.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  items: Observable<any[]>;
  constructor(articleService: ArticleService) {
    this.items = articleService.getArticles();
  }
}
