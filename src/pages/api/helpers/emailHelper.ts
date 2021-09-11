import * as EmailValidator from 'email-validator';

export function validateEmail(email: string): string {
    const emailIsValid: boolean = EmailValidator.validate(email);

    if(emailIsValid) return email;

    throw new Error("Email is not valid");
}