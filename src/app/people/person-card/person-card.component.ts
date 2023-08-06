import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Person } from '../../models/person.model';

/**
 * A card showing data about a person
 */
@Component({
  selector: 'app-person-card',
  templateUrl: './person-card.component.html',
  styleUrls: ['./person-card.component.css']
})
export class PersonCardComponent {
  
  @Output() remove: EventEmitter<number> = new EventEmitter<number>();

  @Input()
  person = new Person();

  /*@Input()
  index = -1;*/

  /*deleteUser() {
    console.log('deleting index ', this.index);
    this.remove.emit(this.person.id);
  }*/
}
