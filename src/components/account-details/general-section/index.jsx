import defaultUserAvatar from '../../../assets/images/user-avatar.png'

import { URL } from '../../../constants/url-constants';

import { SEVERITY } from '../../../constants/severity-constants';

import { AddAPhoto } from "@mui/icons-material";

import { useDispatch } from 'react-redux';

import { showToastr } from "../../../features/toastr/slice";
import { useUpdateHook } from "../../../features/auth/hooks";

import {
    update
} from "../../../features/auth/slice";

import {
    useState
} from "react";

import {
    BottomContainer,
    FieldsContainer,
    Form,
    HoverAvatarWrapper,
    Input,
    InputField,
    Label,
    Section,
    Spacer,
    Title,
    UpdateAvatarContainer,
    UserAvatar,
    Text,
    InfoText,
    InfoTextSpan,
    SubmitButtonWrapper,
    SubmitLoadingButton,
    SubmitButton
} from './styles';

function GeneralSection() {
    console.log('RENDER GENERAL SECTION COMPONENT')

    const dispatch = useDispatch();

    const { user, isLoading } = useUpdateHook();

    const [lastName, setLastName] = useState(user.lastName);
    const [firstName, setFirstName] = useState(user.firstName);
    const [avatarFile, setAvatarFile] = useState(undefined);
    const [avatarOpacity, setAvatarOpacity] = useState(0);

    const [avatarUri, setAvatarUri] = useState(
        user.avatarUri
            ? `${URL.staticImages}${user.avatarUri}`
            : defaultUserAvatar
    )

    const isSubmitButtonDisabled = lastName === user.lastName && firstName === user.firstName && avatarFile === undefined

    const handleChangeLastName = (event) => {
        setLastName(event.target.value);
    }

    const handleChangeFirstName = (event) => {
        setFirstName(event.target.value);
    }

    const setImageSrc = (event) => {
        if (!event.target) {
            return;
        }
        setAvatarUri(event.target.result);
    }

    const verifyUploadPhoto = (file) => {
        if (!file) {
            return false;
        }
        if (!['image/png', 'image/jpeg', 'image/gif'].includes(file.type)) {
            dispatch(showToastr({
                message: 'Tipul fisierului incarcat nu face parte din cele admise!',
                severity: SEVERITY.error
            }));
            return false;
        }
        if (file.size > 6 * 1000 * 1000) {
            dispatch(showToastr({
                message: 'Dimensiunea fisierului incarcat depaseste limita admisa!',
                severity: SEVERITY.error
            }));
            return false;
        }
        return true;
    }

    const previewProfileImage = (event) => {
        const file = event.target.files && event.target.files[0];
        if (file && verifyUploadPhoto(file)) {
            const reader = new FileReader();
            reader.onload = setImageSrc;
            reader.readAsDataURL(file);
            setAvatarFile(file);
        }
    }

    const handleSubmitForm = (event) => {
        event.preventDefault();

        const requestPayload = new FormData(event.currentTarget);

        requestPayload.append('id', user.id);

        dispatch(update(requestPayload));
    }

    return (
        <Section>
            <Title>
                Schimbare date personale
            </Title>
            <Form onSubmit={handleSubmitForm}>
                <FieldsContainer>
                    <InputField
                        label='Nume'
                        placeholder='Introdu nume'
                        value={lastName}
                        onChange={handleChangeLastName}
                        name="lastName"
                        size='small'
                    />
                    <InputField
                        label='Prenume'
                        placeholder='Introdu prenume'
                        value={firstName}
                        onChange={handleChangeFirstName}
                        name="firstName"
                        size='small'
                    />
                </FieldsContainer>
                <BottomContainer>
                    <Spacer />
                    <UpdateAvatarContainer>
                        <Label
                            htmlFor='file-icon-button'
                            onMouseEnter={() => setAvatarOpacity(.7)}
                            onMouseLeave={() => setAvatarOpacity(0)}
                        >
                            <Input
                                accept='image/*'
                                id='file-icon-button'
                                type='file'
                                onChange={previewProfileImage}
                                name='avatarFile'
                            />
                            <UserAvatar
                                component='span'
                                src={avatarUri}
                                imgProps={{ onError: () => setAvatarUri(defaultUserAvatar) }}
                            />
                            <HoverAvatarWrapper opacity={avatarOpacity}>
                                <AddAPhoto />
                                <Text>Update photo</Text>
                            </HoverAvatarWrapper>
                        </Label>
                        <InfoText>
                            <InfoTextSpan>Permis *.jpeg, *.jpg, *.png, *.gif</InfoTextSpan>
                            <InfoTextSpan>Dimensiune maxima 6 MB</InfoTextSpan>
                        </InfoText>
                    </UpdateAvatarContainer>
                    <SubmitButtonWrapper>
                        {
                            isLoading ?
                                <SubmitLoadingButton loading loadingPosition="center" variant="outlined" />
                                :
                                <SubmitButton type='submit' disabled={isSubmitButtonDisabled}>
                                    Salveaza modificari
                                </SubmitButton>
                        }
                    </SubmitButtonWrapper>
                </BottomContainer>
            </Form>
        </Section>
    )
}

export default GeneralSection;