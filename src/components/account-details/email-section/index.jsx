import { useDispatch } from 'react-redux';

import { changeEmail } from '../../../features/auth/slice';
import { useChangeEmailHook } from '../../../features/auth/hooks';

import {
    useState
} from 'react';

import {
    FieldsContainer,
    Form,
    InputField,
    Section,
    SubmitButton,
    SubmitButtonWrapper,
    SubmitLoadingButton,
    Title
} from './styles';

function EmailSection() {
    console.log('RENDER EMAIL SECTION COMPONENT')

    const dispatch = useDispatch();

    const { user, isLoading } = useChangeEmailHook();

    const [newEmail, setNewEmail] = useState('');

    const handleChangeNewEmail = (event) => setNewEmail(event.target.value);

    const handleSubmitForm = (event) => {
        event.preventDefault();

        const requestChangeEmail = {
            userId: user.id,
            newEmail
        }

        dispatch(changeEmail(requestChangeEmail));
    }

    return (
        <Section>
            <Title>
                Schimbare e-mail
            </Title>
            <Form onSubmit={handleSubmitForm}>
                <FieldsContainer>
                    <InputField
                        label='Email'
                        type='email'
                        defaultValue={user.email}
                        disabled={true}
                        name='email'
                        size='small'
                    />
                    <InputField
                        label='Noul email'
                        type='email'
                        placeholder='example@gmail.com'
                        onChange={handleChangeNewEmail}
                        name='newEmail'
                        size='small'
                    />
                </FieldsContainer>
                <SubmitButtonWrapper>
                    {
                        isLoading ?
                            <SubmitLoadingButton loading loadingPosition="center" variant="outlined" />
                            :
                            <SubmitButton type='submit' disabled={newEmail === ''}>Schimba e-mail</SubmitButton>
                    }
                </SubmitButtonWrapper>
            </Form>
        </Section>
    )
}

export default EmailSection;