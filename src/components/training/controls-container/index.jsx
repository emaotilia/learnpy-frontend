import Filter from '../filter';

import { GROUP_BY } from './constants';
import { setGroupBy } from '../../../features/training/slice';
import { DIFFICULTY } from '../../../constants/difficulty-constants';
import { useNavigate } from 'react-router-dom';

import {
    useDispatch,
    useSelector
} from 'react-redux';

import {
    Shuffle,
    FilterList,
    FilterListOff
} from '@mui/icons-material'

import {
    GroupButton,
    MainContainer,
    ButtonsContainer,
    PickRandomButton,
    ChangeViewButton,
    FiltersContainer,
    ToggleFiltersButton,
    GroupButtonsContainer,
    ChangeViewButtonWrapper
} from './styles';

function ControlsContainer(props) {
    console.log('RENDER TRAINING TOP CONTAINER COMPONENT');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { showFilters, setShowFilters, setOneColumnView } = props;

    const groupBy = useSelector(state => state.training.groupBy);

    const trainingExercises = useSelector(state => state.training.trainingExercises);

    const randomExerciseId = () => {
        const randomCategory = Object.keys(trainingExercises)[Math.floor(Math.random() * Object.keys(trainingExercises).length)];
        const randomExercise = trainingExercises[randomCategory][Math.floor(Math.random() * trainingExercises[randomCategory].length)];
        return randomExercise.id;
    }

    return (
        <MainContainer>
            <ChangeViewButtonWrapper>
                <ChangeViewButton onClick={() => setOneColumnView(currentOneColumnView => !currentOneColumnView)}>
                    Schimba modul de afisare
                </ChangeViewButton>
            </ChangeViewButtonWrapper>
            <ButtonsContainer>
                <PickRandomButton
                    variant="text"
                    onClick={() => { navigate(`/app/exercitii/${randomExerciseId()}`) }}
                    startIcon={<Shuffle />}
                >
                    Alege aleatoriu
                </PickRandomButton>
                <GroupButtonsContainer>
                    <GroupButton
                        selected={groupBy === GROUP_BY.difficulty}
                        onClick={() => { dispatch(setGroupBy(GROUP_BY.difficulty)) }}
                    >
                        Grupeaza dupa dificultate
                    </GroupButton>
                    <GroupButton
                        selected={groupBy === GROUP_BY.category}
                        onClick={() => { dispatch(setGroupBy(GROUP_BY.category)) }}
                    >
                        Grupeaza dupa categorie
                    </GroupButton>
                    <GroupButton
                        selected={groupBy === GROUP_BY.random}
                        onClick={() => { dispatch(setGroupBy(GROUP_BY.random)) }}
                    >
                        Grupeaza aleatoriu
                    </GroupButton>
                </GroupButtonsContainer>
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
        </MainContainer >
    )
}

export default ControlsContainer;