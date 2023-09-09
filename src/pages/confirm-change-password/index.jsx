import { useConfirmChangePasswordHook } from '../../features/auth/hooks';

import { CircularProgress } from '@mui/material';

import {
    Wrapper,
    Container
} from './styles';

function ConfirmChangePassword() {
    console.log('RENDER CONFIRM CHANGE PASSWORD PAGE');

    const params = new URLSearchParams(window.location.search);

    const token = params.get('token');

    console.log(token);

    const { isLoading } = useConfirmChangePasswordHook(token);

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

export default ConfirmChangePassword;