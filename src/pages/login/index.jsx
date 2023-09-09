import { URL } from '../../constants/url-constants';

import { useState } from 'react';

import { useDispatch } from 'react-redux';

import { login } from '../../features/auth/slice';
import { useLoginHook } from '../../features/auth/hooks';

import {
    Form,
    Title,
    InputField,
    FormWrapper,
    LinkDivider,
    LinkWrapper,
    SubmitButton,
    RegisterLink,
    MainContainer,
    FieldsContainer,
    ForgotPasswordLink,
    SubmitButtonWrapper,
    LoadingSubmitButton,
    ForgotPasswordLinkWrapper
} from './styles';

function Login() {
    console.log('RENDER LOGIN PAGE')

    const dispatch = useDispatch();

    const { isLoading } = useLoginHook();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChangeEmail = (event) => {
        setEmail(event.target.value);
    }

    const handleChangePassword = (event) => {
        setPassword(event.target.value);
    }

    const handleSubmitForm = (event) => {
        event.preventDefault();
        dispatch(login({ email, password }));
    }

    return (
        <MainContainer>
            <FormWrapper>
                <Form onSubmit={handleSubmitForm}>
                    <Title>
                        Autentificare
                    </Title>
                    <FieldsContainer>
                        <InputField
                            variant='standard'
                            type='email'
                            onChange={handleChangeEmail}
                            label='E-mail'
                        />
                        <InputField
                            variant='standard'
                            type='password'
                            onChange={handleChangePassword}
                            label='Parola'
                        />
                    </FieldsContainer>
                    <ForgotPasswordLinkWrapper>
                        <ForgotPasswordLink to={URL.forgotPassword}>
                            Ai uitat parola?
                        </ForgotPasswordLink>
                    </ForgotPasswordLinkWrapper>
                    <SubmitButtonWrapper>
                        {
                            isLoading ?
                                <LoadingSubmitButton
                                    loading
                                    loadingPosition='center'
                                    variant='outlined'
                                />
                                :
                                <SubmitButton type='submit' disabled={email === '' || password === ''}>
                                    Autentificare
                                </SubmitButton>
                        }
                    </SubmitButtonWrapper>
                    <LinkWrapper>
                        <LinkDivider>
                            <RegisterLink to={URL.register}>
                                Nu ai cont?
                            </RegisterLink>
                        </LinkDivider>
                    </LinkWrapper>
                </Form>
            </FormWrapper>
        </MainContainer>
    )
}

export default Login;