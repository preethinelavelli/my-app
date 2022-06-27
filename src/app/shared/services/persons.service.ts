import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { Person } from '../models/person';

@Injectable({
    providedIn: 'root',
})
export class PersonsService {
    baseUrl = `https://jsonplaceholder.typicode.com`;

    constructor(private httClient: HttpClient){}

    /**
     * Retrieves the list of persons
     */
    getPersonsList(): Observable<Person[]> {
        return this.httClient
            .get<Person[]>(
            `${this.baseUrl}/users`
            )
            .pipe(take(1));
    }
}