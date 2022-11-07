import { ContactInformation } from "./contact-information";


export class ContactInformationBuilder {
   
    public readonly EMPTY_STRING : string = "";

    private _email: string;
    private _phoneNumber: string;

    constructor() {
        this._email = this.EMPTY_STRING;
        this._phoneNumber = this.EMPTY_STRING;
    }

    withEmail(email: string) {
        this._email = email;
    }
    withPhoneNumber(phoneNumber: string) {
        this._phoneNumber = phoneNumber;
    }

    build(): ContactInformation {
        return new ContactInformation(this._email, this._phoneNumber);
    }

}