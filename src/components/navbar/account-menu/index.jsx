import { URL } from '../../../constants/url-constants';
import { SECTION } from '../../../constants/settings-section-constants';

import { Avatar } from '@mui/material';

import { useSelector } from 'react-redux';

import {
    Logout,
    Security,
    AccountCircle,
    EmailOutlined
} from '@mui/icons-material';

import {
    Menu,
    Email,
    Divider,
    MenuItem,
    FullName,
    LinkItem,
    ItemIcon,
    ItemText,
    UserDetails
} from './styles';

function AccountMenu(props) {
    const { isOpen, anchorElement, handleCloseMenu } = props;

    const { firstName, lastName, email, avatarUri } = useSelector((state) => state.auth.user);

    return (
        <Menu
            open={isOpen}
            anchorEl={anchorElement}
            onClose={handleCloseMenu}
            keepMounted
        >
            <MenuItem>
                <Avatar
                    alt={`${lastName} ${firstName}`}
                    src={avatarUri && `${URL.staticImages}${avatarUri}`}
                >
                    {lastName[0]}
                </Avatar>
                <UserDetails >
                    <FullName>
                        {`${lastName} ${firstName}`}
                    </FullName>
                    <Email>
                        {email}
                    </Email>
                </UserDetails>
            </MenuItem>
            <Divider />
            <MenuItem>
                <LinkItem
                    to={`${URL.accountSettingsSection}${SECTION.general}`}
                    onClick={handleCloseMenu}
                >
                    <ItemIcon>
                        <AccountCircle fontSize='small' />
                    </ItemIcon>
                    <ItemText>
                        Schimbare date generale
                    </ItemText>
                </LinkItem>
            </MenuItem>
            <MenuItem >
                <LinkItem
                    to={`${URL.accountSettingsSection}${SECTION.email}`}
                    onClick={handleCloseMenu}
                >
                    <ItemIcon>
                        <EmailOutlined fontSize='small' />
                    </ItemIcon>
                    <ItemText>
                        Schimbare email
                    </ItemText>
                </LinkItem>
            </MenuItem>
            <MenuItem >
                <LinkItem
                    to={`${URL.accountSettingsSection}${SECTION.password}`}
                    onClick={handleCloseMenu}
                >
                    <ItemIcon>
                        <Security fontSize='small' />
                    </ItemIcon>
                    <ItemText>
                        Schimbare parola
                    </ItemText>
                </LinkItem>
            </MenuItem>
            <Divider />
            <MenuItem>
                <LinkItem to={URL.logout} >
                    <ItemIcon>
                        <Logout fontSize='small' />
                    </ItemIcon>
                    <ItemText>
                        Iesire din aplicatie
                    </ItemText>
                </LinkItem>
            </MenuItem>
        </Menu>
    )
}

export default AccountMenu;