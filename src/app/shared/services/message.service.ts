import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Message } from '../models/message';

@Injectable({
    providedIn: 'root',
})
export class MessageService {
    showMessage$ = new Subject<Message>();
}