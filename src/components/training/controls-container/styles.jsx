import { styled } from '@mui/material/styles';

import { Button } from '@mui/material'

export const MainContainer = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    gap: '30px',
})

export const ButtonsContainer = styled('div')({
    display: 'flex',
    justifyContent: 'space-between',
    height: '50px'
})

export const GroupButtonsContainer = styled('div')({
    display: 'flex',
    gap: '20px'
})

export const ChangeViewButtonWrapper = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    height: '50px'
})

export const FiltersContainer = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    gap: '20px'
})

export const StyledButton = styled(Button)({
    width: '160px',
    textTransform: 'none',
    fontWeight: 600,
    lineHeight: '1.25',
    fontSize: '15px',
    padding: '0',
    '& .MuiButton-startIcon svg': {
        fontSize: '30px'
    },
    '&:hover': {
        background: 'none',
        color: '#02203c'
    }
})

export const ChangeViewButton = styled(StyledButton)({
    backgroundColor: '#fff',
    boxShadow: '0 2px 4px rgb(50 50 93 / 10%)',
    width: '260px',
    '&:hover': {
        backgroundColor: '#fff'
    }
})

export const GroupButton = styled(StyledButton)(({ selected }) => ({
    backgroundColor: selected ? '#fff' : 'none',
    boxShadow: selected ? '0 2px 4px rgb(50 50 93 / 10%)' : 'none',
    width: '260px',
    '&:hover': {
        backgroundColor: selected ? '#fff' : 'none',
    }
}))

export const PickRandomButton = styled(StyledButton)({
})

export const ToggleFiltersButton = styled(StyledButton)({
})