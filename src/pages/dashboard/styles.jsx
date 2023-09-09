import { styled } from '@mui/material/styles';

export const MainContainer = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 'calc(100vh - 64px)'
})

export const CardsContainer = styled('div')({
    width: '100%',
    height: '100%',
    maxWidth: '1200px',
    maxHeight: '1000px',
    padding: '50px 0',
    display: 'grid',
    gap: '20px',
    gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))',
    gridTemplateRows: 'repeat(2, 1fr)'
})