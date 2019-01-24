import { Component } from '@angular/core';

import { User } from '../user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent {

  submitted = false;

  hairColor = ['Blond', 'Brun',
    'Chatain', 'Roux', 'Autre'];

  model = new User(18, 'Pierre' , 'LeBlond',  'pierre@cailloux.fr', 'AeR755YYY' , this.hairColor[0]);

  newUser() {
    this.model = new User(42, '', '', '', '', '');
  }

  onSubmit() { this.submitted = true; }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }
}
