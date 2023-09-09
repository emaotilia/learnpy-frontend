import { CircularProgress } from '@mui/material';

import { useLogoutHook } from '../../features/auth/hooks';

import {
    Wrapper,
    Container
} from './styles';

function Logout() {
    const { isLoading } = useLogoutHook();

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

export default Logout;