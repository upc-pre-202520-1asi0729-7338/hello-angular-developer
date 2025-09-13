import {Component, computed, EventEmitter, Output, Signal, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';

/**
 * Developer registration component.
 * Collects first name and last name of a developer and emits events on registration or deferral.
 *
 */
@Component({
  selector: 'app-developer-registration',
  imports: [FormsModule],
  templateUrl: './developer-registration.html',
  styleUrl: './developer-registration.css'
})
export class DeveloperRegistration {
  firstName = signal<string>('');
  lastName  = signal<string>('');
  isFormValid: Signal<boolean>  = computed(() =>
  this.firstName().trim().length >= 2 && this.lastName().trim().length >= 2);

  @Output() public developerRegistered =
    new EventEmitter<{ firstName: string, lastName: string }>();
  @Output() public registrationDeferred = new EventEmitter<void>();

  /**
   * Submits the registration request if the form is valid.
   * Emits the developerRegistered event with the first and last name.
   * Clears the input fields after submission.
   */
  public submitRegistrationRequest(): void {
    if (this.isFormValid())
      this.developerRegistered.emit({firstName: this.firstName(), lastName: this.lastName()});
    this.clearFields();
  }

  /**
   * Defers the registration process.
   * Emits the registrationDeferred event and clears the input fields.
   */
  public deferRegistration(): void {
    this.clearFields();
    this.registrationDeferred.emit();
  }

  /**
   * Clears the input fields for first name and last name.
   * Resets the signals to empty strings.
   */
  public clearFields(): void {
    this.firstName.set('');
    this.lastName.set('');
  }
}
