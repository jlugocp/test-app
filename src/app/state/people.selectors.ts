import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Person } from '../models/person.model';
 
export const selectPeople = createFeatureSelector<ReadonlyArray<Person>>('people');
 
export const selectCollectionState = createFeatureSelector<
  ReadonlyArray<number>
>('collection');
 
export const selectPeopleCollection = createSelector(
  selectPeople,
  selectCollectionState,
  (people, collection) => {
    return collection.map((id) => people.find((person) => person?.id === id)!);
  }
);