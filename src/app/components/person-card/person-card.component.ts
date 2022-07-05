import { Component, EventEmitter, Input, Output } from "@angular/core";
import { MessageType } from '../../shared/models/message';
import { Person } from '../../shared/models/person';
import { MessageService } from '../../shared/services/message.service';

@Component({
    selector: 'app-person-card',
    templateUrl: './person-card.component.html',
    styleUrls: ['./person-card.component.css']
})
export class PersonCardComponent {
    @Input() person!: Person;
    @Output() deletePerson: EventEmitter<number> = new EventEmitter<number>();

    constructor(private messageService: MessageService){}

    /**
     * deletes the person selected
     */
    delete() {
        this.deletePerson.emit(this.person.id);
        // displays the success message
        this.messageService.showMessage$.next({text: `Successfully deleted ${this.person.name}`, type: MessageType.Success});
    }
}