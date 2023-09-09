import { Link } from 'react-router-dom';

import { AppBar } from '@mui/material';

import { styled } from '@mui/material/styles';


export const NavBar = styled(AppBar)({
    background: 'linear-gradient(-90deg,#02203c,#001528)'
})

export const HomeLink = styled(Link)({
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
    textDecoration: 'none',
    color: '#fff'
})

export const LogoImage = styled('img')({
    height: '30px',
    width: '30px'
})

export const LogoText = styled('h3')({
    margin: "0",
    fontSize: "20px",
    fontWeight: "500"
})

export const FlexGrowContainer = styled('div')({
    flexGrow: 1
})

export const Container = styled('div')({
    display: 'flex'
})

export const Wrapper = styled('div')({
    display: 'inline-flex'
})