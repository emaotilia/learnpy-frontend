import { useState } from 'react';

import { useDispatch } from 'react-redux';

import { URL } from '../../constants/url-constants';
import { SEVERITY } from '../../constants/severity-constants';

import { register } from '../../features/auth/slice';
import { showToastr } from '../../features/toastr/slice';
import { useRegisterHook } from '../../features/auth/hooks';

import {
    EMAIL_ERRORS,
    PASSWORD_ERRORS,
    LAST_NAME_ERRORS,
    FIRST_NAME_ERRORS,
    PASSWORDS_NOT_THE_SAME,
    CONFIRM_PASSWORD_ERRORS
} from './constants';

import {
    Form,
    Title,
    LoginLink,
    InputField,
    FormWrapper,
    LinkWrapper,
    LinkDivider,
    SubmitButton,
    MainContainer,
    FieldsContainer,
    SubmitButtonWrapper,
    LoadingSubmitButton
} from './styles';

function Register() {
    console.log('RENDER REGISTER PAGE')

    const dispatch = useDispatch()

    const { isLoading } = useRegisterHook()

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const [firstNameErrorText, setFirstNameErrorText] = useState('')
    const [lastNameErrorText, setLastNameErrorText] = useState('')
    const [emailErrorText, setEmailErrorText] = useState('')
    const [passwordErrorText, setPasswordErrorText] = useState('')
    const [confirmPasswordErrorText, setConfirmPasswordErrorText] = useState('')

    const isSubmitButtonDisabled =
        firstName === '' ||
        lastName === '' ||
        email === '' ||
        password === '' ||
        confirmPassword === '' ||
        firstNameErrorText !== '' ||
        lastNameErrorText !== '' ||
        emailErrorText !== '' ||
        passwordErrorText !== '' ||
        confirmPasswordErrorText !== '';

    const handleChangeFirstName = (event) => {
        setFirstName(event.target.value)

        if (event.target.value.length === 0) {
            setFirstNameErrorText(FIRST_NAME_ERRORS.required)
            return;
        }

        if (event.target.value.length < 2) {
            setFirstNameErrorText(FIRST_NAME_ERRORS.minLength)
            return;
        }

        if (event.target.value.length > 30) {
            setFirstNameErrorText(FIRST_NAME_ERRORS.maxLength)
            return;
        }

        if (event.target.value.trim().length === 0) {
            setFirstNameErrorText(FIRST_NAME_ERRORS.onlySpaces)
            return;
        }

        if (!/^[a-zA-Z ]+$/.test(event.target.value)) {
            setFirstNameErrorText(FIRST_NAME_ERRORS.onlyLetters)
            return;
        }

        setFirstNameErrorText('')
    }

    const handleChangeLastName = (event) => {
        setLastName(event.target.value)

        if (event.target.value.length === 0) {
            setLastNameErrorText(LAST_NAME_ERRORS.required)
            return;
        }

        if (event.target.value.length < 2) {
            setLastNameErrorText(LAST_NAME_ERRORS.minLength)
            return;
        }

        if (event.target.value.length > 30) {
            setLastNameErrorText(LAST_NAME_ERRORS.maxLength)
            return;
        }

        if (event.target.value.trim().length === 0) {
            setLastNameErrorText(LAST_NAME_ERRORS.onlySpaces)
            return;
        }

        if (!/^[a-zA-Z]+$/.test(event.target.value)) {
            setLastNameErrorText(LAST_NAME_ERRORS.onlyLetters)
            return;
        }

        setLastNameErrorText('')
    }

    const handleChangeEmail = (event) => {
        setEmail(event.target.value);

        if (event.target.value.length === 0) {
            setEmailErrorText(EMAIL_ERRORS.required);
            return;
        }

        if (event.target.value.length < 6) {
            setEmailErrorText(EMAIL_ERRORS.minLength);
            return;
        }

        if (event.target.value.length > 100) {
            setEmailErrorText(EMAIL_ERRORS.maxLength);
            return;
        }

        if (event.target.value.trim().length === 0) {
            setEmailErrorText(EMAIL_ERRORS.onlySpaces);
            return;
        }

        if (!/^(.+)@(.+)\.(.+)$/.test(event.target.value)) {
            setEmailErrorText(EMAIL_ERRORS.INVALID);
            return;
        }

        setEmailErrorText('');
    }

    const handleChangePassword = (event) => {
        setPassword(event.target.value)

        if (event.target.value.length === 0) {
            setPasswordErrorText(PASSWORD_ERRORS.required)
            return;
        }

        if (event.target.value.length < 6) {
            setPasswordErrorText(PASSWORD_ERRORS.minLength)
            return;
        }

        if (event.target.value.length > 30) {
            setPasswordErrorText(PASSWORD_ERRORS.maxLength)
            return;
        }

        if (event.target.value.trim().length === 0) {
            setPasswordErrorText(PASSWORD_ERRORS.onlySpaces)
            return;
        }

        if (!/[a-z]/.test(event.target.value)) {
            setPasswordErrorText(PASSWORD_ERRORS.lowerCaseLetter)
            return;
        }

        if (!/[A-Z]/.test(event.target.value)) {
            setPasswordErrorText(PASSWORD_ERRORS.upperCaseLetter)
            return;
        }

        if (!/[0-9]/.test(event.target.value)) {
            setPasswordErrorText(PASSWORD_ERRORS.digit)
            return;
        }

        setPasswordErrorText('')
    }

    const handleChangeConfirmPassword = (event) => {
        setConfirmPassword(event.target.value)

        if (event.target.value.length === 0) {
            setConfirmPasswordErrorText(CONFIRM_PASSWORD_ERRORS.required)
            return;
        }

        if (event.target.value.length < 6) {
            setConfirmPasswordErrorText(CONFIRM_PASSWORD_ERRORS.minLength)
            return;
        }

        if (event.target.value.length > 30) {
            setConfirmPasswordErrorText(CONFIRM_PASSWORD_ERRORS.maxLength)
            return;
        }

        if (event.target.value.trim().length === 0) {
            setConfirmPasswordErrorText(CONFIRM_PASSWORD_ERRORS.onlySpaces)
            return;
        }

        if (!/[a-z]/.test(event.target.value)) {
            setConfirmPasswordErrorText(CONFIRM_PASSWORD_ERRORS.lowerCaseLetter)
            return;
        }

        if (!/[A-Z]/.test(event.target.value)) {
            setConfirmPasswordErrorText(CONFIRM_PASSWORD_ERRORS.upperCaseLetter)
            return;
        }

        if (!/[0-9]/.test(event.target.value)) {
            setConfirmPasswordErrorText(CONFIRM_PASSWORD_ERRORS.digit)
            return;
        }

        setConfirmPasswordErrorText('')
    }

    const handleSubmitForm = (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            dispatch(showToastr({ message: PASSWORDS_NOT_THE_SAME, severity: SEVERITY.error }))
        }
        else {
            dispatch(register({ firstName, lastName, email, password }));
        }
    }

    return (
        <MainContainer>
            <FormWrapper>
                <Form onSubmit={handleSubmitForm}>
                    <Title>
                        Inregistrare
                    </Title>
                    <FieldsContainer>
                        <InputField
                            variant='standard'
                            error={lastNameErrorText.length !== 0}
                            onChange={handleChangeLastName}
                            label='Nume'
                            helperText={lastNameErrorText}
                        />
                        <InputField
                            variant='standard'
                            error={firstNameErrorText.length !== 0}
                            onChange={handleChangeFirstName}
                            label='Prenume'
                            helperText={firstNameErrorText}
                        />
                        <InputField
                            variant='standard'
                            type='email'
                            error={emailErrorText.length !== 0}
                            onChange={handleChangeEmail}
                            label='E-mail'
                            helperText={emailErrorText}
                        />
                        <InputField
                            variant='standard'
                            type='password'
                            error={passwordErrorText.length !== 0}
                            onChange={handleChangePassword}
                            label='Parola'
                            helperText={passwordErrorText}
                        />
                        <InputField
                            variant='standard'
                            type='password'
                            error={confirmPasswordErrorText.length !== 0}
                            onChange={handleChangeConfirmPassword}
                            label='Confirmare parola'
                            helperText={confirmPasswordErrorText}
                        />
                    </FieldsContainer>
                    <SubmitButtonWrapper>
                        {
                            isLoading ?
                                <LoadingSubmitButton
                                    loading
                                    loadingPosition='center'
                                    variant='outlined'
                                />
                                :
                                <SubmitButton type='submit' disabled={isSubmitButtonDisabled}>
                                    Inregistrare
                                </SubmitButton>
                        }
                    </SubmitButtonWrapper>
                    <LinkWrapper>
                        <LinkDivider>
                            <LoginLink to={URL.login}>
                                Ai deja cont?
                            </LoginLink>
                        </LinkDivider>
                    </LinkWrapper>
                </Form>
            </FormWrapper>
        </MainContainer>
    )
}

export default Register;