import { useConfirmChangeEmailHook } from '../../features/auth/hooks';

import { CircularProgress } from '@mui/material';

import {
    Wrapper,
    Container
} from './styles';

function ConfirmChangeEmail() {
    console.log('RENDER CONFIRM CHANGE EMAIL PAGE');

    const params = new URLSearchParams(window.location.search);

    const token = params.get('token');

    const { isLoading } = useConfirmChangeEmailHook(token);

    return (
        <Container>
            <Wrapper>
                {
                    isLoading
                        ? <CircularProgress size={75} />
                        : undefined
                }
            </Wrapper>
        </Container>
    )
}

export default ConfirmChangeEmail;