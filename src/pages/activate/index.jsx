import { useActivateHook } from '../../features/auth/hooks';

import { CircularProgress } from '@mui/material';

import {
    Wrapper,
    Container
} from './styles';

function Activate() {
    console.log('RENDER ACTIVATE PAGE');

    const params = new URLSearchParams(window.location.search);

    const token = params.get('token');

    const { isLoading } = useActivateHook(token);

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

export default Activate;