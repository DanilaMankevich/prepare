import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  loginForm = new FormGroup({
    user: new FormControl(''),
    password: new FormControl(''),
  });

  loginUser() {
    console.log(this.loginForm.value);
  }
}
