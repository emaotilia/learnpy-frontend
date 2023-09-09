import { styled } from '@mui/material/styles';

export const MainContainer = styled('div')({
    background: 'linear-gradient(-90deg,#02203c,#001528)',
})

export const MaskContainer = styled('div')({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
})

export const ContentSection = styled('section')({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff'
})

export const Title = styled('h2')({
    margin: '0 0 10px 0',
    fontSize: '55px'
})

export const Divider = styled('hr')({
    width: '100%',
    borderTop: '1px solid #fff'
})

export const SubTitle = styled('h5')({
    margin: '10px 0 0 0',
    fontSize: '25px',
    fontWeight: '400'
})

export const LinksContainer = styled('div')({
    marginTop: '20px',
    display: 'flex',
    gap: '20px'
})

export const Link = styled('a')({
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    justifyContent: 'center',
    border: '2px solid #fff',
    width: '150px',
    height: '36px',
    color: '#fff',
    textTransform: 'uppercase',
    fontSize: '12px',
    fontWeight: '600',
    cursor: 'pointer',
    position: 'relative',
    transition: 'color 500ms ease-in-out',
    ':before': {
        content: '""',
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        zIndex: -1,
        backgroundColor: '#fff',
        transition: 'transform 500ms ease-in-out',
        transform: 'scaleX(0)',
    },
    ':hover:before': {
        transform: 'scaleX(1)',
    },
    ':hover': {
        color: '#000',
    },
    zIndex: 0,
})

export const RegisterLink = styled(Link)({
    ':before': {
        transformOrigin: 'left',
    }
})

export const LoginLink = styled(Link)({
    ':before': {
        transformOrigin: 'right',
    }
})