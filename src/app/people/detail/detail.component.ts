import { Component, Input } from '@angular/core';

/**
 * For displaying label: value data side-by-side
 */
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  @Input()
  label = '';

  @Input()
  value = '';

}
