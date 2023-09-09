import Card from '../../components/dashboard/card';

import {
    MainContainer,
    CardsContainer
} from './styles';

import {
    School,
    Computer,
    Psychology,
    Leaderboard
} from '@mui/icons-material';

function Dashboard() {
    return (
        <MainContainer>
            <CardsContainer>
                <Card name='Cursuri' icon={<Computer />} href='/app/cursuri' tooltipTitle='Sectiunea de cursuri' />
                <Card name='Laboratoare' icon={<School />} href='/app/laboratoare' tooltipTitle='Sectiunea de exercitii' />
                <Card name='Antrenament' icon={<Psychology />} href='/app/antrenament' tooltipTitle='Sectiunea de antrenament' />
                <Card name='Statistici' icon={<Leaderboard />} href='/app/statistici' tooltipTitle='Sectiunea de statistici' />
            </CardsContainer>
        </MainContainer>
    )
}

export default Dashboard;