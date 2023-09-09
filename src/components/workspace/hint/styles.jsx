import MuiAccordion from '@mui/material/Accordion';

import { styled } from '@mui/material/styles';

export const HintAccordion = styled(MuiAccordion)({
    background: '#15314B',
    '&.Mui-expanded': {
        margin: '0'
    },
    '& .MuiTypography-root': {
        color: '#fff',
        fontWeight: '500',
        fontSize: '16px'
    },
    '& .MuiSvgIcon-root': {
        color: '#fff'
    }
})

export const HintTitleText = styled('p')({
    margin: '0',
    color: '#fff'
})

export const HintText = styled('p')({
    margin: '0',
    color: '#fff'
})