import { createReducer, on } from '@ngrx/store';

import { PeopleApiActions } from './people.actions';
import { Person } from '../models/person.model';

export const initialState: ReadonlyArray<Person> = [];

export const peopleReducer = createReducer(
  initialState,
  on(PeopleApiActions.retrievedPeopleList, (_state, { people }) => people),
  on(PeopleApiActions.deletePerson, (state, { personId }) =>
    state.filter((person) => person.id !== personId)
  )
);