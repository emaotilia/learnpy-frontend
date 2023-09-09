import EmailSection from '../../components/account-details/email-section';
import GeneralSection from '../../components/account-details/general-section';
import PasswordSection from '../../components/account-details/password-section';

import { URL } from '../../constants/url-constants';

import { getSearchParam } from '../../utils/search-params';

import { useSearchParams } from 'react-router-dom';

import {
    SECTION,
    SECTIONS
} from '../../constants/settings-section-constants';

import {
    List,
    Text,
    ListItemLink,
    MainContainer,
    NavigationList,
    InnerContainer
} from './styles';

function AccountSettings() {
    console.log('RENDER ACCOUNT SETTINGS PAGE')

    const [searchParams] = useSearchParams();

    const activeSection = getSearchParam(searchParams, 'sectiune', SECTIONS, SECTION.general);

    const isGeneralSectionActive = activeSection === SECTION.general;
    const isEmailSectionActive = activeSection === SECTION.email;
    const isPasswordSectionActive = activeSection === SECTION.password;

    return (
        <MainContainer>
            <InnerContainer>
                <NavigationList>
                    <List>
                        <ListItemLink active={isGeneralSectionActive} to={`${URL.accountSettingsSection}${SECTION.general}`} >
                            <Text active={isGeneralSectionActive}>
                                General
                            </Text>
                        </ListItemLink>
                        <ListItemLink active={isEmailSectionActive} to={`${URL.accountSettingsSection}${SECTION.email}`} >
                            <Text active={isEmailSectionActive}>
                                E-mail
                            </Text>
                        </ListItemLink>
                        <ListItemLink active={isPasswordSectionActive} to={`${URL.accountSettingsSection}${SECTION.password}`}>
                            <Text active={isPasswordSectionActive}>
                                Parola
                            </Text>
                        </ListItemLink>
                    </List>
                </NavigationList>
                {isGeneralSectionActive ? <GeneralSection /> : undefined}
                {isEmailSectionActive ? <EmailSection /> : undefined}
                {isPasswordSectionActive ? <PasswordSection /> : undefined}
            </InnerContainer>
        </MainContainer>
    )
}

export default AccountSettings;