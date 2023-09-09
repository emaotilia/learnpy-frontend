import { useEffect } from 'react';

import { showToastr } from '../toastr/slice';

import { STATISTICS_FUNCTIONALITY } from '../../constants/functionality-constants';

import {
    useDispatch,
    useSelector
} from 'react-redux';

import {
    reset,
    selectStatusByFunctionality,
    getCorrectTrainingStatistics,
    selectMessageByFunctionality,
    selectSeverityByFunctionality,
    getIncorrectTrianingStatistics,
    getCorrectLaboratoriesStatistics,
    getIncorrectLaboratoriesStatistics
} from './slice';

export const useGetCorrectLaboratoriesStatisticsHook = () => {
    const dispatch = useDispatch();

    const user = useSelector((state) => state.auth.user);
    const correctLaboratoriesStatistics = useSelector((state) => state.statistics.correctLaboratoriesStatistics);
    const status = useSelector((state) => selectStatusByFunctionality(state, STATISTICS_FUNCTIONALITY.getCorrectLaboratories));
    const message = useSelector((state) => selectMessageByFunctionality(state, STATISTICS_FUNCTIONALITY.getCorrectLaboratories));
    const severity = useSelector((state) => selectSeverityByFunctionality(state, STATISTICS_FUNCTIONALITY.getCorrectLaboratories));

    const isError = status === 'rejected'
    const isLoading = status === 'pending'
    const isSuccess = status === 'fulfilled'

    useEffect(() => {
        user && dispatch(getCorrectLaboratoriesStatistics({ userId: user.id }));
    }, [user, dispatch])

    useEffect(() => {
        if (isError) {
            dispatch(showToastr({ message, severity }))
            dispatch(reset(STATISTICS_FUNCTIONALITY.getCorrectLaboratories))
        }
    }, [message, severity, isSuccess, isError, dispatch])

    return { correctLaboratoriesStatistics, isLoading }
}

export const useGetIncorrectLaboratoriesStatisticsHook = () => {
    const dispatch = useDispatch();

    const user = useSelector((state) => state.auth.user);
    const incorrectLaboratoriesStatistics = useSelector((state) => state.statistics.incorrectLaboratoriesStatistics);
    const status = useSelector((state) => selectStatusByFunctionality(state, STATISTICS_FUNCTIONALITY.getIncorrectLaboratories));
    const message = useSelector((state) => selectMessageByFunctionality(state, STATISTICS_FUNCTIONALITY.getIncorrectLaboratories));
    const severity = useSelector((state) => selectSeverityByFunctionality(state, STATISTICS_FUNCTIONALITY.getIncorrectLaboratories));

    const isError = status === 'rejected'
    const isLoading = status === 'pending'
    const isSuccess = status === 'fulfilled'

    useEffect(() => {
        user && dispatch(getIncorrectLaboratoriesStatistics({ userId: user.id }));
    }, [user, dispatch])

    useEffect(() => {
        if (isError) {
            dispatch(showToastr({ message, severity }))
            dispatch(reset(STATISTICS_FUNCTIONALITY.getIncorrectLaboratories))
        }
    }, [message, severity, isSuccess, isError, dispatch])

    return { incorrectLaboratoriesStatistics, isLoading }
}

export const useGetCorrectTrainingStatisticsHook = () => {
    const dispatch = useDispatch();

    const user = useSelector((state) => state.auth.user);
    const correctTrainingStatistics = useSelector((state) => state.statistics.correctTrainingStatistics);
    const status = useSelector((state) => selectStatusByFunctionality(state, STATISTICS_FUNCTIONALITY.getCorrectTraining));
    const message = useSelector((state) => selectMessageByFunctionality(state, STATISTICS_FUNCTIONALITY.getCorrectTraining));
    const severity = useSelector((state) => selectSeverityByFunctionality(state, STATISTICS_FUNCTIONALITY.getCorrectTraining));

    const isError = status === 'rejected'
    const isLoading = status === 'pending'
    const isSuccess = status === 'fulfilled'

    useEffect(() => {
        user && dispatch(getCorrectTrainingStatistics({ userId: user.id }));
    }, [user, dispatch])

    useEffect(() => {
        if (isError) {
            dispatch(showToastr({ message, severity }))
            dispatch(reset(STATISTICS_FUNCTIONALITY.getCorrectTraining))
        }
    }, [message, severity, isSuccess, isError, dispatch])

    return { correctTrainingStatistics, isLoading }
}

export const useGetIncorrectTrainingStatisticsHook = () => {
    const dispatch = useDispatch();

    const user = useSelector((state) => state.auth.user);
    const incorrectTrainingStatistics = useSelector((state) => state.statistics.incorrectTrainingStatistics);
    const status = useSelector((state) => selectStatusByFunctionality(state, STATISTICS_FUNCTIONALITY.getIncorrectTraining));
    const message = useSelector((state) => selectMessageByFunctionality(state, STATISTICS_FUNCTIONALITY.getIncorrectTraining));
    const severity = useSelector((state) => selectSeverityByFunctionality(state, STATISTICS_FUNCTIONALITY.getIncorrectTraining));

    const isError = status === 'rejected'
    const isLoading = status === 'pending'
    const isSuccess = status === 'fulfilled'

    useEffect(() => {
        user && dispatch(getIncorrectTrianingStatistics({ userId: user.id }));
    }, [user, dispatch])

    useEffect(() => {
        if (isError) {
            dispatch(showToastr({ message, severity }))
            dispatch(reset(STATISTICS_FUNCTIONALITY.getIncorrectTraining))
        }
    }, [message, severity, isSuccess, isError, dispatch])

    return { incorrectTrainingStatistics, isLoading }
}