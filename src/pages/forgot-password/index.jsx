import { URL } from '../../constants/url-constants';

import { useState } from 'react';

import { useDispatch } from 'react-redux';

import { forgotPassword } from '../../features/auth/slice';
import { useForgotPasswordHook } from '../../features/auth/hooks';

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

function ForgotPassword() {
    console.log('RENDER FORGOT PASSWORD PAGE')

    const { isLoading } = useForgotPasswordHook();

    const dispatch = useDispatch();

    const [email, setEmail] = useState('');

    const handleChangeEmail = (event) => setEmail(event.target.value)

    const handleSubmitForm = (event) => {
        event.preventDefault();
        dispatch(forgotPassword({ email }));
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
                                <SubmitButton type='submit' disabled={email === ''}>
                                    Afla parola
                                </SubmitButton>
                        }
                    </SubmitButtonWrapper>
                    <LinkWrapper>
                        <LinkDivider>
                            <LoginLink to={URL.login}>
                                Stii parola?
                            </LoginLink>
                        </LinkDivider>
                    </LinkWrapper>
                </Form>
            </FormWrapper>
        </MainContainer >
    )
}

export default ForgotPassword;