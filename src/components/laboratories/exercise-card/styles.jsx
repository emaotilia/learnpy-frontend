import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { CircleOutlined, CircleRounded } from '@mui/icons-material';

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

export const CircleIcon = styled(CircleOutlined)({
    color: 'rgba(103,114,229,.3)'
})

export const CircleRoundedIcon = styled(CircleRounded)(({ color }) => ({
    color: color,
}))

export const QueryLink = styled(Link)({
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