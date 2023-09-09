import ChartWrapper from '../../components/statistics/chart-wrapper';
import CorrectTrainingChart from '../../components/statistics/correct-training-chart';
import IncorrectTrainingChart from '../../components/statistics/incorrect-training-chart';
import CorrectLaboratoriesChart from '../../components/statistics/correct-laboratories-chart';
import IncorrectLaboratoriesChart from '../../components/statistics/incorrect-laboratories-chart';

import {
    Wrapper,
    MainContainer,
    ChartsContainer,
    ChartsInnerContainer,
} from './styles';

function Statistics() {
    console.log('RENDER STATISTICS PAGE');

    return (
        <MainContainer>
            <Wrapper>
                <ChartsContainer>
                    <ChartsInnerContainer>
                        <ChartWrapper title="Statistici legate de exercitiile rezolvate corect din sectiunea laboratoare">
                            <CorrectLaboratoriesChart />
                        </ChartWrapper>
                        <ChartWrapper title="Statistici legate de exercitiile rezolvate corect din sectiunea antrenament">
                            <CorrectTrainingChart />
                        </ChartWrapper>
                    </ChartsInnerContainer>
                    <ChartsInnerContainer>
                        <ChartWrapper title="Statistici legate de exercitiile rezolvate gresit din sectiunea laboratoare">
                            <IncorrectLaboratoriesChart />
                        </ChartWrapper>
                        <ChartWrapper title="Statistici legate de exercitiile rezolvate gresit din sectiunea antrenament">
                            <IncorrectTrainingChart />
                        </ChartWrapper>
                    </ChartsInnerContainer>
                </ChartsContainer>
            </Wrapper>
        </MainContainer>
    )
}

export default Statistics;