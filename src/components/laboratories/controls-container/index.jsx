import Filter from '../filter';

import { DIFFICULTY } from '../../../constants/difficulty-constants';

import {
    FilterList,
    FilterListOff
} from '@mui/icons-material'

import {
    Spacer,
    MainContainer,
    ButtonsContainer,
    ChangeViewButton,
    FiltersContainer,
    ToggleFiltersButton,
    ChangeViewButtonWrapper,
} from './styles';

function ControlsContainer(props) {
    console.log('RENDER LABORATORIES CONTROLS CONTAINER COMPONENT');

    const { setOneColumnView, showFilters, setShowFilters } = props;

    return (
        <MainContainer>
            <ButtonsContainer>
                <Spacer />
                <ChangeViewButtonWrapper>
                    <ChangeViewButton onClick={() => setOneColumnView(currentOneColumnView => !currentOneColumnView)}>
                        Schimba modul de afisare
                    </ChangeViewButton>
                </ChangeViewButtonWrapper>
                <ToggleFiltersButton
                    startIcon={showFilters ? <FilterListOff /> : <FilterList />}
                    onClick={() => setShowFilters(currentShow => !currentShow)}
                >
                    {showFilters ? 'Ascunde' : 'Afiseaza'} filtre
                </ToggleFiltersButton>
            </ButtonsContainer>
            {
                showFilters ?
                    <FiltersContainer>
                        <Filter difficulty={DIFFICULTY.easy} />
                        <Filter difficulty={DIFFICULTY.medium} />
                        <Filter difficulty={DIFFICULTY.hard} />
                        <Filter difficulty={DIFFICULTY.veryHard} />
                    </FiltersContainer>
                    : null
            }
        </MainContainer>
    )
}

export default ControlsContainer;