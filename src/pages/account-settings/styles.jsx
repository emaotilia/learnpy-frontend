import { Link } from 'react-router-dom';

import { styled } from '@mui/material/styles';

export const MainContainer = styled('div')({
    height: 'calc(100vh - 64px)',
    backgroundColor: '#F4F7FA'
})

export const InnerContainer = styled('div')({
    display: 'flex',
    gap: '20px',
    maxWidth: '1600px',
    padding: '50px 0',
    margin: '0 auto 0'
})

export const NavigationList = styled('div')({
    flex: '0 0 275px',
    borderRadius: '4px',
    boxShadow: 'rgb(140 152 164 / 13%) 0px 6px 24px 0px',
    alignSelf: 'flex-start'
})

export const List = styled('ul')({
    backgroundColor: '#fff',
    padding: '32px 0',
    borderRadius: '4px',
    margin: '0'
})

export const Text = styled('p')(({ active }) => ({
    color: `${active ? '#000' : 'rgb(103, 119, 136)'}`,
    margin: '0'
}));

export const ListItemLink = styled((
    { to, active, children, ...rest }
) => <Link to={to} {...rest}>{children}</Link>)(({ active }) => ({
    borderLeft: `2px solid ${active ? '#064C8C' : 'transparent'}`,
    padding: '10px 0 10px 24px',
    cursor: 'pointer',
    listStyleType: 'none',
    textDecoration: 'none',
    display: 'block',
    '&:hover p': {
        color: '#000'
    }
}))