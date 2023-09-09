import { useEffect } from "react";

import { getLaboratoryExercises } from "./slice";

import {
    hideToastr,
    showToastr
} from "../toastr/slice";

import {
    useDispatch,
    useSelector
} from "react-redux";

export const useGetLaboratoryExercisesHook = () => {
    const dispatch = useDispatch();

    const user = useSelector((state) => state.auth.user);
    const laboratoryExercises = useSelector((state) => state.laboratories.laboratoryExercises);
    const difficulties = useSelector((state) => state.laboratories.difficulties);
    const message = useSelector((state) => state.laboratories.message);
    const severity = useSelector((state) => state.laboratories.severity);
    const status = useSelector((state) => state.laboratories.status);

    const isError = status === 'rejected';
    const isLoading = status === 'pending';

    useEffect(() => {
        dispatch(getLaboratoryExercises({ studentId: user.id, difficulties }));
    }, [difficulties, dispatch]);

    useEffect(() => {
        if (isError) {
            dispatch(showToastr({ message, severity }));
            dispatch(hideToastr())
        }
    }, [message, severity, isError, dispatch]);

    return { laboratoryExercises, isLoading };
}