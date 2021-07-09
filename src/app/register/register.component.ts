import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { RxFormBuilder } from '@rxweb/reactive-form-validators';
import { Register } from './register.model';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  register: Register;
  copyrightYear = new Date().getFullYear();
  isSubmitted: boolean = false;
  registerForm: FormGroup;

  constructor(
    private formBuilder: RxFormBuilder) {
    this.register = new Register();
  }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.formGroup(this.register);
  }

  registerUser() {
    this.isSubmitted = true;
    if (this.registerForm.invalid) { return; }



  }
}
