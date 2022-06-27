import { Component, OnInit } from "@angular/core";
import { Person } from 'src/app/shared/models/person';
import { PersonsService } from 'src/app/shared/services/persons.service';
import { MessageService } from 'src/app/shared/services/message.service';
import { MessageType } from 'src/app/shared/models/message';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
    personsList: Person[] = [];

    /**
     * determines whether any persons available to be displayed
     */
    get showPersons() {
        return this.personsList && this.personsList.length > 0;
    }

    constructor(
        private personsService: PersonsService, 
        private messageService: MessageService
    ) {}

    ngOnInit() {
        this.loadInitialData();
    }

    /**
     * Calls the API to fetch list of persons 
     */
    loadInitialData() {
        // Calls API to fetch persons data
        this.personsService.getPersonsList().subscribe((resp: Person[]) => {
            this.personsList = resp;
            this.messageService.showMessage$.next({text: 'Successfully fetched persons.', type: MessageType.Success});
        }, error => {
            // displays error message
            this.messageService.showMessage$.next({text: 'Something went wrong.', type: MessageType.Error});
        });
    }

    /**
     * deletes the person based on the id sent
     * @param id id of the person to be deleted
     */
    deletePerson(id: number){
        this.personsList = this.personsList.filter(person => person.id !== id);
    }
}