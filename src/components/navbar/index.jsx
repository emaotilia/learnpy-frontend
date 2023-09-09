import logoImage from '../../assets/images/logo.png';

import AccountMenu from './account-menu';

import { URL } from '../../constants/url-constants';

import { useState } from 'react';

import { useSelector } from 'react-redux';

import {
    Avatar,
    Toolbar,
    Tooltip,
    IconButton
} from '@mui/material';

import {
    NavBar,
    Wrapper,
    LogoText,
    HomeLink,
    LogoImage,
    Container,
    FlexGrowContainer
} from './styles';

function Navbar() {
    console.log('RENDER NAVBAR COMPONENT')

    const [isOpenMenu, setIsOpenMenu] = useState(false);

    const { firstName, lastName, avatarUri } = useSelector((state) => state.auth.user);

    const [anchorElement, setAnchorElement] = useState(undefined);

    const handleOpenMenu = (event) => {
        setIsOpenMenu(true);
        setAnchorElement(event.currentTarget)
    }

    const handleCloseMenu = () => {
        setIsOpenMenu(false);
        setAnchorElement(undefined)
    }

    return (
        <NavBar position='static'>
            <Toolbar>
                <HomeLink to={URL.app}>
                    <LogoImage alt='App logo' src={logoImage} />
                    <LogoText>LearnPy</LogoText>
                </HomeLink>
                <FlexGrowContainer />
                <Container>
                    <Wrapper>
                        <Tooltip arrow title='Profil utilizator'>
                            <IconButton
                                size='large'
                                edge='end'
                                color='inherit'
                                onClick={handleOpenMenu}
                            >
                                <Avatar
                                    alt={`${lastName} ${firstName}`}
                                    src={avatarUri && `${URL.staticImages}${avatarUri}`}
                                >
                                    {lastName[0]}
                                </Avatar>
                            </IconButton>
                        </Tooltip>
                        <AccountMenu
                            isOpen={isOpenMenu}
                            anchorElement={anchorElement}
                            handleCloseMenu={handleCloseMenu}
                        />
                    </Wrapper>
                </Container>
            </Toolbar>
        </NavBar>
    )
}

export default Navbar;