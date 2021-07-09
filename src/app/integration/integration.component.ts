import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RxFormBuilder } from '@rxweb/reactive-form-validators';
import { ApiIntegration } from './app.integration.model';


@Component({
  selector: 'app-integration',
  templateUrl: './integration.component.html',
  styleUrls: ['./integration.component.scss']
})
export class IntegrationComponent implements OnInit {


  integration: ApiIntegration;
  integrationForm: FormGroup;
  isSubmitted: boolean = false;
  hide = true;
  constructor(private formBuilder: RxFormBuilder) {

    this.integration = new ApiIntegration();
  }

  ngOnInit(): void {
    this.integrationForm = this.formBuilder.formGroup(this.integration);
  }

  addApi() {

    this.validate();
    if (this.integrationForm.invalid) return;


  }

  editApi() {

    this.validate();
    if (this.integrationForm.invalid) return;

  }

  validate() {
    this.integration.fname = this.integration.fname?.trim() || '';
    this.integration.okta_url = this.integration.okta_url?.trim() || '';
    this.integration.okta_key = this.integration.okta_key?.trim() || '';
    this.isSubmitted = true;
    const signon_enable = this.integrationForm.controls['signon_enable'] as FormControl;
    const sso_type = this.integrationForm.controls['sso_type'] as FormControl;
    const clientId = this.integrationForm.controls['client_id'] as FormControl;
    const entityId = this.integrationForm.controls['entity_id'] as FormControl;

    if (!this.integration.signon_enable) {
      entityId.clearValidators();
      clientId.clearValidators();
      signon_enable.clearValidators();
      sso_type.clearValidators();
      clientId.updateValueAndValidity();
      entityId.updateValueAndValidity();
      signon_enable.updateValueAndValidity();
      sso_type.updateValueAndValidity();
      this.integration.sso_type = 'default';
    }
    else
      if (this.integration.sso_type == "sso") {
        clientId.setValidators([Validators.required]);
        clientId.updateValueAndValidity();
        entityId.clearValidators();
        entityId.updateValueAndValidity();

      }
      else
        if (this.integration.sso_type == "saml") {
          entityId.setValidators([Validators.required]);
          entityId.updateValueAndValidity();
          clientId.clearValidators();
          clientId.updateValueAndValidity();
        }
  }


}
