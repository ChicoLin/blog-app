import {Component, Input} from '@angular/core';

import {Article} from '../article';
import {TimeService} from '../time.service';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent {
  @Input() article: Article;

  constructor(public readonly timeService: TimeService) {}
}
