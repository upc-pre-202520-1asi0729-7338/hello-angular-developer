import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {DeveloperRegistration} from './greetings/presentation/components/developer-registration/developer-registration';
import {DeveloperGreeting} from './greetings/presentation/components/developer-greeting/developer-greeting';

@Component({
  selector: 'app-root',
  imports: [
    DeveloperRegistration,
    DeveloperGreeting
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('hello-angular-developer');
  public firstName: string = '';
  public lastName: string = '';

  public updateRegisteredDeveloperInfo(developer: { firstName: string; lastName: string }) {
    this.firstName = developer.firstName;
    this.lastName = developer.lastName;
  }

  public resetRegisteredDeveloperInfo() {
    this.firstName = '';
    this.lastName = '';
  }
}
