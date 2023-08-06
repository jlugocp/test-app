import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { Person } from "../models/person.model";

/**
 * Performs network related functions related to person data
 */
@Injectable({
    providedIn: 'root'
  })
  export class PeopleService {

    constructor(private httpClient: HttpClient){}

    public getPeople(): Observable<Array<Person>> {
      return this.httpClient.get<Array<Person>>('https://jsonplaceholder.typicode.com/users');
  }
}