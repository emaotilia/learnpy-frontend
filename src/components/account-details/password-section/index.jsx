import { useDispatch } from 'react-redux';

import { useChangePasswordHook } from '../../../features/auth/hooks';

import {
    changePassword
} from '../../../features/auth/slice';

import {
    Visibility,
    VisibilityOff
} from '@mui/icons-material';

import { useState } from 'react';

import {
    hasDigit,
    hasLowerCase,
    hasUpperCase
} from '../../../utils/string-utils';

import {
    InputLabel,
    IconButton,
    OutlinedInput,
    InputAdornment
} from '@mui/material';

import {
    List,
    Form,
    Item,
    Section,
    ListTitle,
    SectionTitle,
    SubmitButton,
    FieldsContainer,
    BottomContainer,
    CircleOutlinedIcon,
    OutlinedFormControl,
    SubmitButtonWrapper,
    SubmitLoadingButton,
    CheckCircleOutlineIcon
} from './styles';

function PasswordSection() {
    console.log('RENDER PASSWORD SECTION COMPONENT')

    const dispatch = useDispatch();

    const { user, isLoading } = useChangePasswordHook();

    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');

    const [showOldPassword, setShowOldPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);

    const [passwordHasMinSix, setPasswordHasMinSix] = useState(false);
    const [passwordHasLower, setPasswordHasLower] = useState(false);
    const [passwordHasUpper, setPasswordHasUpper] = useState(false);
    const [passwordHasDigit, setPasswordHasDigit] = useState(false);

    const isSubmitButtonDisabled = oldPassword === ''
        || newPassword === ''
        || !passwordHasMinSix
        || !passwordHasLower
        || !passwordHasUpper
        || !passwordHasDigit;

    const handleChangeNewPassword = (event) => {
        setPasswordHasMinSix(event.target.value.length >= 6);
        setPasswordHasLower(hasLowerCase(event.target.value));
        setPasswordHasUpper(hasUpperCase(event.target.value));
        setPasswordHasDigit(hasDigit(event.target.value));
        setNewPassword(event.target.value);
    }

    const handleSubmitForm = (event) => {
        event.preventDefault();

        const requestChangePassword = {
            userId: user.id,
            oldPassword,
            newPassword
        }

        dispatch(changePassword(requestChangePassword));
    }

    return (
        <Section>
            <SectionTitle>
                Schimbare parola
            </SectionTitle>
            <Form onSubmit={handleSubmitForm}>
                <FieldsContainer>
                    <OutlinedFormControl size='small'>
                        <InputLabel>Parola veche</InputLabel>
                        <OutlinedInput
                            type={showOldPassword ? 'text' : 'password'}
                            value={oldPassword}
                            onChange={(e) => setOldPassword(e.target.value)}
                            endAdornment={
                                <InputAdornment position='end'>
                                    <IconButton
                                        aria-label='Toggle old password visibility'
                                        onClick={() => setShowOldPassword(!showOldPassword)}
                                        onMouseDown={(e) => e.preventDefault}
                                        edge='end'
                                    >
                                        {showOldPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label='Parola veche'
                            size='small'
                        />
                    </OutlinedFormControl>
                    <OutlinedFormControl size='small'>
                        <InputLabel>Parola noua</InputLabel>
                        <OutlinedInput
                            type={showNewPassword ? 'text' : 'password'}
                            value={newPassword}
                            onChange={handleChangeNewPassword}
                            endAdornment={
                                <InputAdornment position='end'>
                                    <IconButton
                                        aria-label='Toggle new password visibility'
                                        onClick={() => setShowNewPassword(!showNewPassword)}
                                        onMouseDown={(e) => e.preventDefault}
                                        edge='end'
                                    >
                                        {showNewPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label='Parola noua'
                            size='small'
                        />
                    </OutlinedFormControl>
                </FieldsContainer>
                <BottomContainer>
                    <List>
                        <ListTitle>Cerinte parola</ListTitle>
                        <Item>
                            {passwordHasMinSix ? <CheckCircleOutlineIcon /> : <CircleOutlinedIcon />}
                            Minim 6 caractere
                        </Item>
                        <Item>
                            {passwordHasLower ? <CheckCircleOutlineIcon /> : <CircleOutlinedIcon />}
                            Minim o litera mica
                        </Item>
                        <Item>
                            {passwordHasUpper ? <CheckCircleOutlineIcon /> : <CircleOutlinedIcon />}
                            Minim o litera mare
                        </Item>
                        <Item>
                            {passwordHasDigit ? <CheckCircleOutlineIcon /> : <CircleOutlinedIcon />}
                            Minim o cifra
                        </Item>
                    </List>
                    <SubmitButtonWrapper>
                        {
                            isLoading ?
                                <SubmitLoadingButton loading loadingPosition="center" variant="outlined" />
                                :
                                <SubmitButton type='submit' disabled={isSubmitButtonDisabled}>Schimba parola</SubmitButton>
                        }
                    </SubmitButtonWrapper>
                </BottomContainer>
            </Form>
        </Section>
    )
}

export default PasswordSection;