import {Component, Input} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';

import {Article} from '../article';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent {
  @Input() article: Article;
}
