import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-icon-set',
  templateUrl: './icon-set.component.html',
  styleUrls: ['./icon-set.component.css']
})
export class IconSetComponent {
  @Input() iconName: string;
  @Input() description: string;
  @Input() value = '';
}
