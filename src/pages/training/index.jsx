import ExercisesSection from '../../components/training/exercises-section';
import ControlsContainer from '../../components/training/controls-container';

import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { resetResult } from '../../features/code/slice';
import { useGetTrainingExercisesHook } from '../../features/training/hooks';

import {
    MainContainer,
    CircularSpinner,
    ExercisesContainer,
    CircularSpinnerWrapper
} from './styles';

function Training() {
    console.log('RENDER TRAINING PAGE');

    const dispatch = useDispatch();

    const [showFilters, setShowFilters] = useState(false);
    const [oneColumnView, setOneColumnView] = useState(false);

    const { trainingExercises, isLoading } = useGetTrainingExercisesHook();

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
                            Object.entries(trainingExercises).map(([title, exercises]) => (
                                exercises.length > 0 ?
                                    <ExercisesSection
                                        key={title}
                                        title={title}
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

export default Training;