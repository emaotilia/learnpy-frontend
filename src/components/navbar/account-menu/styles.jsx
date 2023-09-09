import MuiMenu from '@mui/material/Menu';

import MuiMenuItem from '@mui/material/MenuItem';

import { Link } from 'react-router-dom';

import { styled } from '@mui/material/styles';

import { ListItemIcon } from '@mui/material';

export const Menu = styled(MuiMenu)({
    '& .MuiPaper-root': {
        minWidth: '200px',
        overflow: 'visible',
        '&:before': {
            content: '""',
            display: 'block',
            position: 'absolute',
            top: 0,
            right: 'calc((64px / 2) - (15px / 2))',
            width: 10,
            height: 10,
            backgroundColor: '#02203c',
            borderTop: '1px solid rgb(45, 55, 72)',
            borderLeft: '1px solid rgb(45, 55, 72)',
            transform: 'translateY(-50%) rotate(45deg)',
            zIndex: 1,
        },
        '& .MuiList-root': {
            background: '#02203c',
            border: '1px solid rgb(45, 55, 72)',
            color: '#fff',
            padding: '12px 0'
        },
        '& .MuiMenuItem-root:first-of-type': {
            pointerEvents: 'none'
        }
    }
})

export const MenuItem = styled(MuiMenuItem)({
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    padding: '0',
    '& .MuiListItemIcon-root': {
        minWidth: 'auto'
    },
    ':first-of-type': {
        padding: '8px 16px'
    }
})

export const UserDetails = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
})

export const FullName = styled('span')({
    lineHeight: '1.2'
})

export const Email = styled('span')({
    lineHeight: '1.2',
    fontSize: '14px',
    color: 'rgb(160, 174, 192)'
})

export const Divider = styled('hr')({
    borderColor: 'rgb(45, 55, 72)'
})

export const LinkItem = styled(Link)({
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    textDecoration: 'none',
    color: '#fff',
    padding: '8px 16px',
    width: '100%',
    ':hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.04)'
    }
})

export const ItemIcon = styled(ListItemIcon)({
    color: 'rgb(156, 163, 175)'
})

export const ItemText = styled('span')({
    lineHeight: 'normal',
    marginTop: '1px'
})