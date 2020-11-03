import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages: string[] = [];

  constructor() { }

  // tslint:disable-next-line:typedef
  add(message: string) {
    this.messages.push(message);
  }

  // tslint:disable-next-line:typedef
  clear() {
    this.messages = [];
  }

}
