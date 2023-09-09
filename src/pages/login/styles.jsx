import { Link } from 'react-router-dom';

import { styled } from '@mui/material/styles';

import { LoadingButton } from '@mui/lab';

import {
    Button,
    Divider,
    TextField
} from '@mui/material';

export const MainContainer = styled('div')({
    background: 'linear-gradient(-90deg,#02203c,#001528)'
})

export const FormWrapper = styled('div')({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh'
})

export const Form = styled('form')({
    backgroundColor: '#02203c',
    width: '450px',
    padding: '40px 0 40px 0',
    borderRadius: '4px',
    boxShadow: '0 45px 30px -17px rgb(0 0 0 / 40%), 45px 37px 30px -17px rgb(0 0 0 / 40%)',
    display: 'flex',
    flexDirection: 'column',
    gap: '30px'
})

export const Title = styled('h2')({
    color: '#fff',
    textAlign: 'center',
    fontWeight: '500',
    fontSize: '22px',
    margin: '0'
})

export const FieldsContainer = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '0 50px',
    marginTop: '-10px',
    '& .MuiTextField-root': {
        margin: '5px 0'
    }
})

export const InputField = styled(TextField)({
    width: '100%',
    '& .MuiInputLabel-root': {
        color: 'rgba(255, 255, 255, 0.7)'
    },
    '& .MuiInputLabel-root:has(.Mui-error)': {
        color: '#d32f2f'
    },
    '& .MuiInputLabel-root.Mui-error:not(.Mui-focused):not(.MuiFormLabel-filled)': {
        transform: 'translate(0, 5px) scale(1)'
    },
    '& .MuiInputLabel-root.Mui-error:not(.Mui-focused):not(.MuiFormLabel-filled) + div': {
        marginTop: '0px'
    },
    '& .MuiInput-root:before': {
        borderBottomColor: 'rgba(255, 255, 255, 0.7)'
    },
    '& .MuiInput-root:hover:not(.Mui-disabled):before': {
        borderBottomColor: '#fff'
    },
    '& .MuiInput-input': {
        color: '#fff'
    }
})

export const SubmitButtonWrapper = styled('div')({
    display: 'flex',
    justifyContent: 'center'
})

export const LoadingSubmitButton = styled(LoadingButton)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '4px',
    fontSize: '12px',
    height: '36px',
    width: '130px',
    backgroundColor: '#f0f0f0',
    border: '0',
    gap: '10px',
    '&.Mui-disabled': {
        color: '#000'
    },
    '& .MuiLoadingButton-loadingIndicator': {
        color: '#000'
    }
})

export const SubmitButton = styled(Button)({
    height: '36px',
    width: '130px',
    border: '0',
    fontSize: '12px',
    color: '#000',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    lineHeight: '1',
    '&:disabled': {
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
        color: '#000',
        cursor: 'default'
    },
    '&:not(:disabled):hover': {
        backgroundColor: '#1976d2',
        color: '#fff'
    }
})

export const LinkWrapper = styled('div')({
    padding: '0 50px 0px'
})

export const ForgotPasswordLinkWrapper = styled('div')({
    padding: "0 50px",
    display: "flex",
    justifyContent: "flex-end",
    marginTop: "-25px"
})

export const ForgotPasswordLink = styled(Link)({
    color: "#fff",
    fontSize: "16px",
    textDecoration: "none"
})

export const LinkDivider = styled(Divider)({
    '&::before, &::after': {
        borderColor: 'rgba(255, 255, 255, 0.7)'
    }
})

export const RegisterLink = styled(Link)({
    color: "#fff",
    fontSize: "16px",
    textDecoration: "none"
})