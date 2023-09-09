export const FIRST_NAME_ERRORS = Object.freeze({
    required: 'Prenumele este obligatoriu',
    minLength: 'Prenumele trebuie sa aiba minim 2 litere',
    maxLength: 'Prenumele trebuie sa aiba maxim 30 litere',
    onlyLetters: 'Prenumele trebuie sa contina doar litere',
    onlySpaces: 'Prenumele nu poate contine doar spatii'
});

export const LAST_NAME_ERRORS = Object.freeze({
    required: 'Numele este obligatoriu',
    minLength: 'Numele trebuie sa aiba minim 2 litere',
    maxLength: 'Numele trebuie sa aiba maxim 30 litere',
    onlyLetters: 'Numele trebuie sa contina doar litere',
    onlySpaces: 'Numele nu poate contine doar spatii'
});

export const EMAIL_ERRORS = Object.freeze({
    required: 'Email-ul este obligatoriu',
    minLength: 'Email-ul trebuie sa aiba minim 6 caractere',
    maxLength: 'Email-ul trebuie sa aiba maxim 100 caractere',
    onlySpaces: 'Email-ul nu poate contine doar spatii',
    INVALID: 'Email-ul nu este valid'
});

export const PASSWORD_ERRORS = Object.freeze({
    required: 'Parola este obligatorie',
    minLength: 'Parola trebuie sa aiba minim 6 caractere',
    maxLength: 'Parola trebuie sa aiba maxim 30 caractere',
    onlySpaces: 'Parola nu poate contine doar spatii',
    lowerCaseLetter: 'Parola trebuie sa contina macar o litera mica',
    upperCaseLetter: 'Parola trebuie sa contina macar o litera mare',
    digit: 'Parola trebuie sa contina macar o cifra'
});

export const CONFIRM_PASSWORD_ERRORS = Object.freeze({
    required: 'Confirmarea parolei este obligatorie',
    minLength: 'Confirmarea parolei trebuie sa aiba minim 6 caractere',
    maxLength: 'Confirmarea parolei trebuie sa aiba maxim 30 caractere',
    onlySpaces: 'Confirmarea parolei nu poate contine doar spatii',
    lowerCaseLetter: 'Confirmarea parolei trebuie sa contina macar o litera mica',
    upperCaseLetter: 'Confirmarea parolei trebuie sa contina macar o litera mare',
    digit: 'Confirmarea parolei trebuie sa contina macar o cifra'
});

export const PASSWORDS_NOT_THE_SAME = 'Parolele nu coincid';