export class ContactInformation {
    static readonly VALID_EMAIL_REGEX: string = "/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/";
    static readonly VALID_PHONE_NUMBER_REGEX: string = "^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$";

    static readonly ERROR_INVALID_FORMAT_EMAIL: string = "The email does not have a valid format."
    static readonly ERROR_INVALID_FORMAT_PHONE_NUMBER: string = "The phone number does not have a valid format."

    private _email: string;
    private _phoneNumber: string;
    private _linkedIn: string;

    static with(email: string, phoneNumber: string, linkedIn: string){
        this.assertValidEmail(email);
        return new this(email, phoneNumber, linkedIn);
    }

    static assertValidEmail(email: string){
        if(!email.match(this.VALID_EMAIL_REGEX)) throw new Error(this.ERROR_INVALID_FORMAT_EMAIL);
    }

    static assertValidPhoneNumber(phoneNumber: string){
        if(!phoneNumber.match(this.VALID_PHONE_NUMBER_REGEX)) throw new Error(this.ERROR_INVALID_FORMAT_PHONE_NUMBER);
    }

    constructor(email: string, phoneNumber: string, linkedIn: string) {
        this._email = email;
        this._phoneNumber = phoneNumber;
        this._linkedIn = linkedIn;
    }

    public get email(): string {
        return this._email;
    }

    public get phoneNumber(): string {
        return this._phoneNumber;
    }

    public get linkedIn(): string {
      return this._linkedIn;
  }
}
