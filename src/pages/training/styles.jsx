import { styled } from '@mui/material/styles';

import { CircularProgress } from '@mui/material';

export const MainContainer = styled('div')({
    padding: '40px 30px',
    display: 'flex',
    flexDirection: 'column',
    gap: '30px',
    backgroundColor: '#F6F9FC',
    minHeight: 'calc(100vh - 64px)'
})

export const CircularSpinnerWrapper = styled('div')(({ showFilters }) => ({
    height: `${showFilters ? 'calc(100vh - 64px - 80px - 240px)' : 'calc(100vh - 64px - 80px - 160px)'}`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}))

export const CircularSpinner = styled(CircularProgress)({
})

export const ExercisesContainer = styled('div')(({ oneColumnView }) => ({
    display: `${oneColumnView ? 'flex' : 'grid'}`,
    flexDirection: 'column',
    gridTemplateColumns: 'repeat(auto-fit, minmax(700px, 1fr))',
    gap: '20px'
}))