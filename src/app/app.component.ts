import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <ul>
        <li *ngFor="let message of mail.messages">{{message}}</li>
      </ul>
      <app-simple-form 
        *ngFor="let message of mail.messages"
        [message]="message"
        (update)="onUpdate($event)"
        >
      </app-simple-form>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  onUpdate(e) {
    console.log(e);
  }
  constructor(@Inject('mail') private mail) {}
}
