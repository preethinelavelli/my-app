import { Component, OnDestroy, OnInit } from '@angular/core';
import { MessageService } from 'src/app/shared/services/message.service';
import { Subscription } from 'rxjs';
import { Message } from 'src/app/shared/models/message';

@Component({
    selector: 'app-messages',
    templateUrl: './message.component.html',
    styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit, OnDestroy{
    messages: Message[] = [];
    subscription!: Subscription;

    constructor(public messageService: MessageService) {
        this.subscription = new Subscription();
    }

    ngOnInit() {
        this.listenToNotifications();
    }

    /**
     * unsubscribes all subscriptions when the component is destroyed
     */
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    /**
     * Subscribes to notifications service to display success/error messages 
     */
    listenToNotifications() {
        this.subscription.add(this.messageService.showMessage$.subscribe((newMessage: Message) => {
            this.messages.push(newMessage);
        }));
    }

    /**
     * removes the notification message on timeout or click of closenotification
     */
    remove(message: Message) {
        this.messages = this.messages.filter(item => item !== message);
    }
}