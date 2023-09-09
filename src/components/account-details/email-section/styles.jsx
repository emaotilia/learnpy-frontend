import { styled } from '@mui/material/styles';

import { LoadingButton } from '@mui/lab';

import {
    Button,
    TextField
} from '@mui/material';


export const Section = styled('section')({
    backgroundColor: '#fff',
    borderRadius: '4px',
    boxShadow: 'rgb(140 152 164 / 13%) 0px 6px 24px 0px',
    flexGrow: 1,
    padding: '24px'
})

export const Title = styled('h2')({
    fontSize: '20px',
    fontWeight: 500,
    marginTop: 0,
    marginBottom: '40px',
    color: 'rgb(52, 71, 103)'
})

export const Form = styled('form')({
})

export const FieldsContainer = styled('div')({
    display: 'flex',
    gap: '20px',
    marginBottom: '35px'
})

export const SubmitButtonWrapper = styled('div')({
    display: 'flex',
    justifyContent: 'flex-end'
})

export const SubmitLoadingButton = styled(LoadingButton)({
    borderRadius: '4px',
    backgroundColor: 'rgba(200, 200, 200, 0.6)',
    textTransform: 'none',
    width: '150px',
    height: '36px',
    fontSize: '13px',
    '&.Mui-disabled': {
        color: '#001528'
    },
    '& .MuiLoadingButton-loadingIndicator': {
        color: '#001528'
    }
})

export const SubmitButton = styled(Button)({
    height: '36px',
    width: '150px',
    border: '0',
    fontSize: '13px',
    color: '#fff',
    backgroundColor: '#064C8C',
    lineHeight: '1',
    textTransform: 'none',
    '&:disabled': {
        backgroundColor: 'rgba(200, 200, 200, 0.6)',
        color: '#001528',
        cursor: 'default'
    },
    '&:not(:disabled):hover': {
        backgroundColor: '#064C8C',
        opacity: '0.8'
    }
})

export const InputField = styled(TextField)({
    flexGrow: '1',
    '& .MuiOutlinedInput-root': {
        borderRadius: '4px'
    }
})