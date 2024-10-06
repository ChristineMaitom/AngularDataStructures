import { Component } from '@angular/core';

@Component({
  selector: 'app-phone-contact-list',
  templateUrl: './phone-contact-list.component.html',
  styleUrl: './phone-contact-list.component.css'
})
export class PhoneContactListComponent {
  newContact: string = '';
  contacts: string[] = [];

  addContact() {
    if (this.newContact.trim()) {
      this.contacts.push(this.newContact.trim());
      this.newContact = ''; // Clear the input field
    }
  }
}
