import ExercisesSection from '../../components/laboratories/exercises-section';
import ControlsContainer from '../../components/laboratories/controls-container';

import { useDispatch } from 'react-redux';
import { resetResult } from '../../features/code/slice';
import { useEffect, useState } from 'react';
import { useGetLaboratoryExercisesHook } from '../../features/laboratories/hooks';

import {
    MainContainer,
    CircularSpinner,
    ExercisesContainer,
    CircularSpinnerWrapper
} from './styles';

function Laboratories() {
    console.log('RENDER LABORATORIES PAGE');

    const dispatch = useDispatch();

    const [showFilters, setShowFilters] = useState(false);
    const [oneColumnView, setOneColumnView] = useState(false);

    const { laboratoryExercises, isLoading } = useGetLaboratoryExercisesHook();

    useEffect(() => {
        dispatch(resetResult());
    }, []);

    return (
        <MainContainer>
            <ControlsContainer
                setOneColumnView={setOneColumnView}
                showFilters={showFilters}
                setShowFilters={setShowFilters}
            />
            {
                isLoading ?
                    <CircularSpinnerWrapper showFilters={showFilters}>
                        <CircularSpinner size={100} />
                    </CircularSpinnerWrapper>
                    :
                    <ExercisesContainer oneColumnView={oneColumnView}>
                        {
                            Object.entries(laboratoryExercises).map(([laboratory, exercises]) => (
                                exercises.length > 0 ?
                                    <ExercisesSection
                                        key={laboratory}
                                        title={laboratory}
                                        exercises={exercises}
                                        hasStarIcon={true}
                                    />
                                    : undefined
                            ))
                        }
                    </ExercisesContainer>
            }
        </MainContainer>
    )
}

export default Laboratories;