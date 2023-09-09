import { useEffect } from "react";

import { getExerciseById } from "./slice";

import {
    hideToastr,
    showToastr
} from "../toastr/slice";

import {
    useDispatch,
    useSelector
} from "react-redux";

export const useGetExerciseById = (id) => {
    const dispatch = useDispatch();

    const exercise = useSelector((state) => state.workspace.exercise);
    const message = useSelector((state) => state.workspace.message);
    const severity = useSelector((state) => state.workspace.severity);
    const status = useSelector((state) => state.workspace.status);

    const isError = status === 'rejected';
    const isLoading = status === 'pending';

    useEffect(() => {
        if (id) {
            dispatch(getExerciseById({ id }));
        }
    }, [id, dispatch]);

    useEffect(() => {
        if (isError) {
            dispatch(showToastr({ message, severity }));
            dispatch(hideToastr())
        }
    }, [message, severity, isError, dispatch]);

    return { exercise, isLoading };
}