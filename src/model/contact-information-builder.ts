import { ContactInformation } from "./contact-information";


export class ContactInformationBuilder {

    public readonly EMPTY_STRING : string = "";

    private _email: string;
    private _phoneNumber: string;
    private _linkedIn: string;

    constructor() {
        this._email = this.EMPTY_STRING;
        this._phoneNumber = this.EMPTY_STRING;
        this._linkedIn = this.EMPTY_STRING;
    }

    withEmail(email: string) {
        this._email = email;
        return this;
    }
    withPhoneNumber(phoneNumber: string) {
        this._phoneNumber = phoneNumber;
        return this;
    }

    withLinkedIn(linkedIn: string) {
      this._linkedIn = linkedIn;
      return this;
  }

    build(): ContactInformation {
        return new ContactInformation(this._email, this._phoneNumber, this._linkedIn);
    }

}
