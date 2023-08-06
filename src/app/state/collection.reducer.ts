import { createReducer, on } from '@ngrx/store';
import { PeopleApiActions } from './people.actions';
 
export const initialState: ReadonlyArray<number> = [];
 
export const collectionReducer = createReducer(
  initialState,
  on(PeopleApiActions.deletePerson, (state, { personId }) =>
    state.filter((id) => id !== personId)
  )
);