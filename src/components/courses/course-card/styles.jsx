import { Link } from 'react-router-dom';

import { Avatar } from '@mui/material';

import { styled } from '@mui/material/styles';

export const Container = styled('div')({
    boxShadow: 'rgb(0 0 0 / 20%) 0px 1px 2px 0px',
    height: '50px',
    borderRadius: '4px',
    fontWeight: '600',
    backgroundColor: '#fff',
    display: 'flex',
    alignItems: 'center',
    padding: '0 0 0 15px',
    gap: '10px'
})

export const CourseLink = styled(Link)({
    fontSize: '15px',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    color: '#1976d2',
    '&:hover': {
        color: '#02203c'
    }
})

export const Spacer = styled('div')({
    flexGrow: 1
})

export const ProfessorAvatar = styled(Avatar)({
    width: '30px',
    height: '30px',
    fontSize: '12px',
    fontWeight: '600',
    backgroundColor: '#15314b',
    color: '#fff',
    '&:hover': {
        backgroundColor: '#02203c'
    }
})