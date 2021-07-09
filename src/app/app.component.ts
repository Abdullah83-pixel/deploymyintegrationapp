import { Component } from '@angular/core';
import { ReactiveFormConfig } from '@rxweb/reactive-form-validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  ngOnInit() {
    ReactiveFormConfig.set({
      validationMessage: {
        required: 'This field is required.',
        requiredTrue: 'Please check the checkboxe.',
        minLength: 'Enter minimum length of 6 characters.',
        maxLength: 'Enter maximum length of 50 characters.',
        compare: 'The value should be matched Password.',
        alpha: 'you can only enter alphabets.',
        email: 'Invalid email format',
        requireCheckbox: 'Atleast one required.',
        maxNumber: 'must be between',
        minNumber: 'must be between',
        extension: 'Invalid file format',
        alphaNumeric: 'No white spaces allowed',
        notEmpty: 'This field is required.',
        minDate: "Date value must be either today's or greater"
      },
      "internationalization":
      {
        "dateFormat": "ymd",
        "seperator": "-"
      }
    });
  }
}
