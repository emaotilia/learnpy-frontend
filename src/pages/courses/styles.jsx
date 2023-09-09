import { styled } from '@mui/material/styles';

export const Section = styled('section')({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: 'calc(100vh - 64px)',
    backgroundColor: '#F6F9FC',
    padding: '40px 30px'
})

export const Title = styled('h1')({
    fontSize: '30px',
    fontWeight: '600',
    textAlign: 'center',
    margin: '10px 0 30px 0'
})

export const CoursesCardsContainer = styled('div')({
    width: '1200px',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
})