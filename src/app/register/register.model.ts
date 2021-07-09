import { required, email, alpha, requiredTrue } from "@rxweb/reactive-form-validators";

export class Register {
    @required()
    @email()
    email: string;

    @required()
    firstname: string;

    @required()
    lastname: string;

    @required()
    @alpha({ allowWhiteSpace: false })
    company: string;

    @requiredTrue()
    isChecked: boolean;

}
