import { styled } from '@mui/material/styles';

import { Checkbox } from '@mui/material';

export const Container = styled('div')({
    backgroundColor: '#fff',
    padding: '0 0 0 10px',
    gap: '5px',
    display: 'flex',
    alignItems: 'center',
    width: '200px',
    boxShadow: '0 2px 4px rgb(50 50 93 / 10%)'
})

export const FilterName = styled('span')({
    flex: '1 1 auto',
    fontSize: '15px'
})

export const CircleCheckbox = styled(({ fillColor, ...rest }) => <Checkbox {...rest} />)(({ fillColor }) => ({
    color: fillColor,
    '&.Mui-checked': {
        color: fillColor
    },
    '& .MuiSvgIcon-root': {
        fontSize: '20px'
    }
}))