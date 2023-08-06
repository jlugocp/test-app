/**
 * Actions
 * - Delete a deletePerson
 */
import { createActionGroup, props } from "@ngrx/store";
import { Person } from "../models/person.model";

export const PeopleApiActions = createActionGroup({
    source: 'People API',
    events: {
        'Retrieved People List': props<{people: ReadonlyArray<Person>}>(),
        'Delete Person': props<{personId: number}>()
    }
});
