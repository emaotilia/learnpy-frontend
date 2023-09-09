import { useEffect } from 'react';

import { showToastr } from '../toastr/slice';

import { CODE_FUNCTIONALITY } from '../../constants/functionality-constants';

import {
    useDispatch,
    useSelector
} from 'react-redux';

import {
    reset,
    resetMessage,
    selectMessageByFunctionality,
    selectSeverityByFunctionality,
    selectStatusByFunctionality
} from './slice';

export const useRunCodeHook = () => {
    const dispatch = useDispatch();

    const message = useSelector((state) => selectMessageByFunctionality(state, CODE_FUNCTIONALITY.run));
    const severity = useSelector((state) => selectSeverityByFunctionality(state, CODE_FUNCTIONALITY.run));
    const status = useSelector((state) => selectStatusByFunctionality(state, CODE_FUNCTIONALITY.run));

    const isLoading = status === 'pending';
    const isError = status === 'rejected';
    const isSuccess = status === 'fulfilled';

    useEffect(() => {
        if ((isError || isSuccess) && (message !== undefined)) {
            dispatch(showToastr({ message, severity }));
        }

        if (isError) {
            dispatch(reset(CODE_FUNCTIONALITY.run));
        }

        if (isSuccess) {
            dispatch(resetMessage(CODE_FUNCTIONALITY.run));
        }
    }, [message, severity, isError, isSuccess, dispatch])

    return { isLoading, isSuccess };
}

export const useSubmitCodeHook = () => {
    const dispatch = useDispatch();

    const message = useSelector((state) => selectMessageByFunctionality(state, CODE_FUNCTIONALITY.submit));
    const severity = useSelector((state) => selectSeverityByFunctionality(state, CODE_FUNCTIONALITY.submit));
    const status = useSelector((state) => selectStatusByFunctionality(state, CODE_FUNCTIONALITY.submit));

    const isLoading = status === 'pending';
    const isSuccess = status === 'fulfilled';
    const isError = status === 'rejected';

    useEffect(() => {
        if (isSuccess || isError) {
            dispatch(showToastr({ message, severity }));
            dispatch(reset(CODE_FUNCTIONALITY.submit));
        }
    }, [message, severity, isSuccess, isError, dispatch])

    return { isLoading };
}