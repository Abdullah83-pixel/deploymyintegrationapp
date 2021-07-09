import { required, maxLength, notEmpty } from '@rxweb/reactive-form-validators';

export class ApiIntegration {
    id: number;
    name: string;
    access_key: string;
    company_id: number;
    company_name: string;
    ssoType: string;
    sso_enable: boolean;
    sso_id: number;
    url: string;
    @maxLength({ value: 50 })
    @notEmpty()
    @required()
    fname: string;

    @required()
    @notEmpty()
    okta_url: string;

    @required()
    okta_key: string;
    @required()
    signon_enable: boolean;

    @required()
    sso_type: string;
    @required()
    client_id: string;
    @required()
    entity_id: string;
    user_id: number;
}
