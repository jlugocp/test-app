import { Component, Input } from '@angular/core';
import { Person } from 'src/app/models/person.model';
import { Store } from '@ngrx/store';
import { PeopleApiActions } from 'src/app/state/people.actions';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent {

  @Input() people: ReadonlyArray<Person> = [];
  
  constructor(private store: Store) {}

  onRemove(personId: number) {
    this.store.dispatch(PeopleApiActions.deletePerson({personId}));
  }
}
