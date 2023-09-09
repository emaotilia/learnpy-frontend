import { styled } from '@mui/material/styles';


export const Section = styled('section')({
})

export const Title = styled('h2')({
    fontWeight: 400,
    fontSize: 22,
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap'
})

export const Container = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    gap: 5
})