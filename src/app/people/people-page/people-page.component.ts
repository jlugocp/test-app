import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/models/person.model';
import { PeopleService } from 'src/app/services/people.service';
import { CookieService } from 'ngx-cookie-service';
import { Store } from '@ngrx/store';
import { PeopleApiActions } from 'src/app/state/people.actions';
import { selectPeopleCollection, selectPeople } from 'src/app/state/people.selectors';

/**
 * Displays a list of people in car format from an internet data source
 */
@Component({
  selector: 'app-people-page',
  templateUrl: './people-page.component.html',
  styleUrls: ['./people-page.component.css']
})
export class PeoplePageComponent implements OnInit {

  people$ = this.store.select(selectPeople);
  peopleCollection$ = this.store.select(selectPeopleCollection);

  userMessage = `Showing 0 records`;

  // people:Person[] = [];

  isErrorMessage = false;

  ERR_MSG = 'Could not retrieve people data';

  constructor(private peopleService: PeopleService,
    private cookieService: CookieService,
    private store: Store) {
  }

  /**
   * Sets up the data store
   */
  ngOnInit(): void {
    this.setUserMessage('Loading people data ...');

    // TODO Consider persisting the people list
    this.peopleService
      .getPeople()
      .subscribe((people) => {
        this.store.dispatch(PeopleApiActions.retrievedPeopleList({ people }))
      }, (error) => {
        this.setUserMessage('Failed to load people data');
      });
      this.people$.subscribe((people) => {
        this.setUserMessage(`Showing ${people.length} Records`);
      });
  }

  /**
   * Sets the user message, only if a string is provided
   * @param msg The message to display to the user
   * @returns 
   */
  setUserMessage(msg: string, isErrorMsg: boolean = false) {
    if (typeof msg !== 'string') return;
    this.isErrorMessage = isErrorMsg;
    this.userMessage = msg;
  }

}
