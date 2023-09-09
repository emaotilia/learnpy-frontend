import { useEffect } from "react";

import { getCourses } from "./slice";

import {
    hideToastr,
    showToastr
} from "../toastr/slice";

import {
    useDispatch,
    useSelector
} from "react-redux";

export const useGetCoursesHook = () => {
    const dispatch = useDispatch();

    const courses = useSelector((state) => state.courses.courses);
    const message = useSelector((state) => state.courses.message);
    const severity = useSelector((state) => state.courses.severity);
    const status = useSelector((state) => state.courses.status);

    const isError = status === 'rejected';
    const isLoading = status === 'pending';

    useEffect(() => {
        dispatch(getCourses());
    }, [dispatch]);

    useEffect(() => {
        if (isError) {
            dispatch(showToastr({ message, severity }));
            dispatch(hideToastr())
        }
    }, [message, severity, isError, dispatch]);

    return { courses, isLoading };
}