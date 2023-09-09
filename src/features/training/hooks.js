import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { getTrainingExercises } from "./slice";

import {
    hideToastr,
    showToastr
} from "../toastr/slice";

export const useGetTrainingExercisesHook = () => {
    const dispatch = useDispatch();

    const user = useSelector((state) => state.auth.user);
    const trainingExercises = useSelector((state) => state.training.trainingExercises);
    const difficulties = useSelector((state) => state.training.difficulties);
    const groupBy = useSelector((state) => state.training.groupBy);
    const message = useSelector((state) => state.training.message);
    const severity = useSelector((state) => state.training.severity);
    const status = useSelector((state) => state.training.status);

    const isError = status === 'rejected';
    const isLoading = status === 'pending';

    useEffect(() => {
        dispatch(getTrainingExercises({ studentId: user.id, groupBy, difficulties }));
    }, [groupBy, difficulties, dispatch]);

    useEffect(() => {
        if (isError) {
            dispatch(showToastr({ message, severity }));
            dispatch(hideToastr())
        }
    }, [message, severity, isError, dispatch]);

    return { trainingExercises, isLoading };
}