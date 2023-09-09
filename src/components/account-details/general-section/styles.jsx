import { styled } from '@mui/material/styles';

import { forwardRef } from 'react';

import { LoadingButton } from "@mui/lab";

import {
    Avatar,
    Button,
    TextField
} from "@mui/material";

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

export const BottomContainer = styled('div')({
    display: 'flex'
})

export const Spacer = styled('div')({
    flex: '0 0 33.33%'
})

export const UpdateAvatarContainer = styled('div')({
    flex: '0 0 33.33%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '40px',
    gap: '15px'
})

export const Label = styled('label')({
    position: 'relative',
    width: '128px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    borderRadius: '50%',
    cursor: 'pointer'
})

export const HoverAvatarWrapper = styled("div")(({ opacity }) => ({
    position: "absolute",
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    transition: "opacity 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    opacity: opacity,
    zIndex: "1",
    color: "#fff",
    backgroundColor: "rgb(22, 28, 36)"
}))

export const Text = styled("p")({
    fontSize: "12px",
    marginTop: "5px"
})

export const InputField = styled(TextField)({
    flexGrow: "1",
    "& .MuiOutlinedInput-root": {
        borderRadius: "4px"
    }
})

export const SubmitButtonWrapper = styled("div")({
    flex: "0 0 33.33%",
    display: "flex",
    justifyContent: "end",
    alignItems: "end"
})

export const SubmitLoadingButton = styled(LoadingButton)({
    borderRadius: "4px",
    backgroundColor: "rgba(200, 200, 200, 0.6)",
    textTransform: "none",
    width: "150px",
    height: "36px",
    fontSize: "13px",
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

export const UserAvatar = styled(forwardRef((props, ref) => (<Avatar {...props} ref={ref} />)))({
    width: "128px",
    height: "128px",
    zIndex: "0"
})

export const InfoText = styled("p")({
    textAlign: "center",
    color: "rgb(99, 115, 129)",
    fontSize: "12px",
    margin: "0",
    display: "flex",
    flexDirection: "column"
})

export const InfoTextSpan = styled("span")({
})

export const Input = styled('input')({
})