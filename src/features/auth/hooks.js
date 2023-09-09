import { SECTION } from '../../constants/settings-section-constants';

import { useEffect } from 'react';

import { showToastr } from '../toastr/slice';

import { useNavigate } from 'react-router-dom';

import { URL } from '../../constants/url-constants';
import { STATUS } from '../../constants/status-constants';
import { AUTH_FUNCTIONALITY } from '../../constants/functionality-constants';

import {
    useDispatch,
    useSelector
} from 'react-redux';

import {
    reset,
    logout,
    activate,
    confirmChangeEmail,
    confirmChangePassword,
    selectStatusByFunctionality,
    selectMessageByFunctionality,
    selectSeverityByFunctionality,
} from './slice';

export const useRegisterHook = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const message = useSelector((state) => selectMessageByFunctionality(state, AUTH_FUNCTIONALITY.register));
    const severity = useSelector((state) => selectSeverityByFunctionality(state, AUTH_FUNCTIONALITY.register));
    const status = useSelector((state) => selectStatusByFunctionality(state, AUTH_FUNCTIONALITY.register));

    const isLoading = status === STATUS.pending;
    const isError = status === STATUS.rejected;
    const isSuccess = status === STATUS.fulfilled;

    useEffect(() => {
        if (isError || isSuccess) {
            dispatch(showToastr({ message, severity }));
            dispatch(reset(AUTH_FUNCTIONALITY.register));
        }
        if (isSuccess) {
            navigate(URL.login);
        }
    }, [message, severity, isSuccess, isError, dispatch, navigate])

    return { isLoading };
}

export const useActivateHook = (token) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const message = useSelector((state) => selectMessageByFunctionality(state, AUTH_FUNCTIONALITY.activate));
    const severity = useSelector((state) => selectSeverityByFunctionality(state, AUTH_FUNCTIONALITY.activate));
    const status = useSelector((state) => selectStatusByFunctionality(state, AUTH_FUNCTIONALITY.activate));

    const isLoading = status === STATUS.pending;
    const isError = status === STATUS.rejected;
    const isSuccess = status === STATUS.fulfilled;

    useEffect(() => {
        token && dispatch(activate({ token }));
    }, [token, dispatch])

    useEffect(() => {
        if (isError || isSuccess) {
            dispatch(showToastr({ message, severity }));
            dispatch(reset(AUTH_FUNCTIONALITY.activate));
        }
        if (isError) {
            navigate(URL.register);
        }
        if (isSuccess) {
            navigate(URL.login);
        }
    }, [message, severity, isSuccess, isError, dispatch, navigate])

    return { isLoading };
}

export const useLoginHook = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const message = useSelector((state) => selectMessageByFunctionality(state, AUTH_FUNCTIONALITY.login));
    const severity = useSelector((state) => selectSeverityByFunctionality(state, AUTH_FUNCTIONALITY.login));
    const status = useSelector((state) => selectStatusByFunctionality(state, AUTH_FUNCTIONALITY.login));

    const isLoading = status === STATUS.pending;
    const isError = status === STATUS.rejected;
    const isSuccess = status === STATUS.fulfilled;

    useEffect(() => {
        if (isError || isSuccess) {
            dispatch(showToastr({ message, severity }));
            dispatch(reset(AUTH_FUNCTIONALITY.login));
        }
        if (isSuccess) {
            navigate(URL.app);
        }
    }, [message, severity, isSuccess, isError, dispatch, navigate])

    return { isLoading };
}

export const useForgotPasswordHook = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const message = useSelector((state) => selectMessageByFunctionality(state, AUTH_FUNCTIONALITY.forgotPassword));
    const severity = useSelector((state) => selectSeverityByFunctionality(state, AUTH_FUNCTIONALITY.forgotPassword));
    const status = useSelector((state) => selectStatusByFunctionality(state, AUTH_FUNCTIONALITY.forgotPassword));

    const isLoading = status === STATUS.pending;
    const isError = status === STATUS.rejected;
    const isSuccess = status === STATUS.fulfilled;

    useEffect(() => {
        if (isError || isSuccess) {
            dispatch(showToastr({ message, severity }));
            dispatch(reset(AUTH_FUNCTIONALITY.forgotPassword));
        }
        if (isSuccess) {
            navigate(URL.login);
        }
    }, [message, severity, isSuccess, isError, dispatch, navigate])

    return { message, severity, isLoading, isSuccess, isError };
}

export const useUpdateHook = () => {
    const dispatch = useDispatch();

    const user = useSelector((state) => state.auth.user);
    const message = useSelector((state) => selectMessageByFunctionality(state, AUTH_FUNCTIONALITY.update));
    const severity = useSelector((state) => selectSeverityByFunctionality(state, AUTH_FUNCTIONALITY.update));
    const status = useSelector((state) => selectStatusByFunctionality(state, AUTH_FUNCTIONALITY.update));

    const isLoading = status === STATUS.pending;
    const isError = status === STATUS.rejected;
    const isSuccess = status === STATUS.fulfilled;

    useEffect(() => {
        if (isError || isSuccess) {
            dispatch(showToastr({ message, severity }));
            dispatch(reset(AUTH_FUNCTIONALITY.update));
        }
    }, [message, severity, isSuccess, isError, dispatch])

    return { user, isLoading };
}

export const useChangeEmailHook = () => {
    const dispatch = useDispatch();

    const user = useSelector((state) => state.auth.user);
    const message = useSelector((state) => selectMessageByFunctionality(state, AUTH_FUNCTIONALITY.changeEmail));
    const severity = useSelector((state) => selectSeverityByFunctionality(state, AUTH_FUNCTIONALITY.changeEmail));
    const status = useSelector((state) => selectStatusByFunctionality(state, AUTH_FUNCTIONALITY.changeEmail));

    const isLoading = status === STATUS.pending;
    const isError = status === STATUS.rejected;
    const isSuccess = status === STATUS.fulfilled;

    useEffect(() => {
        if (isError || isSuccess) {
            dispatch(showToastr({ message, severity }));
            dispatch(reset(AUTH_FUNCTIONALITY.changeEmail));
        }
    }, [message, severity, isSuccess, isError, dispatch])

    return { user, isLoading };
}

export const useChangePasswordHook = () => {
    const dispatch = useDispatch();

    const user = useSelector((state) => state.auth.user);
    const message = useSelector((state) => selectMessageByFunctionality(state, AUTH_FUNCTIONALITY.changePassword));
    const severity = useSelector((state) => selectSeverityByFunctionality(state, AUTH_FUNCTIONALITY.changePassword));
    const status = useSelector((state) => selectStatusByFunctionality(state, AUTH_FUNCTIONALITY.changePassword));

    const isLoading = status === STATUS.pending;
    const isError = status === STATUS.rejected;
    const isSuccess = status === STATUS.fulfilled;

    useEffect(() => {
        if (isError || isSuccess) {
            dispatch(showToastr({ message, severity }));
            dispatch(reset(AUTH_FUNCTIONALITY.changePassword));
        }
    }, [message, severity, isSuccess, isError, dispatch])

    return { user, isLoading };
}

export const useConfirmChangeEmailHook = (token) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const user = useSelector((state) => state.auth.user);
    const message = useSelector((state) => selectMessageByFunctionality(state, AUTH_FUNCTIONALITY.confirmChangeEmail));
    const severity = useSelector((state) => selectSeverityByFunctionality(state, AUTH_FUNCTIONALITY.confirmChangeEmail));
    const status = useSelector((state) => selectStatusByFunctionality(state, AUTH_FUNCTIONALITY.confirmChangeEmail));

    const isLoading = status === STATUS.pending;
    const isError = status === STATUS.rejected;
    const isSuccess = status === STATUS.fulfilled;

    useEffect(() => {
        token && dispatch(confirmChangeEmail({ token }));
    }, [token, dispatch])

    useEffect(() => {
        if (isError || isSuccess) {
            dispatch(showToastr({ message, severity }));
            dispatch(reset(AUTH_FUNCTIONALITY.confirmChangeEmail));
            navigate(`${URL.accountSettingsSection}${SECTION.email}`);
        }
    }, [message, severity, isSuccess, isError, dispatch, navigate])

    return { user, isLoading };
}

export const useConfirmChangePasswordHook = (token) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const message = useSelector((state) => selectMessageByFunctionality(state, AUTH_FUNCTIONALITY.confirmChangePassword));
    const severity = useSelector((state) => selectSeverityByFunctionality(state, AUTH_FUNCTIONALITY.confirmChangePassword));
    const status = useSelector((state) => selectStatusByFunctionality(state, AUTH_FUNCTIONALITY.confirmChangePassword));

    const isLoading = status === STATUS.pending;
    const isError = status === STATUS.rejected;
    const isSuccess = status === STATUS.fulfilled;

    useEffect(() => {
        token && dispatch(confirmChangePassword({ token }));
    }, [token, dispatch])

    useEffect(() => {
        if (isError || isSuccess) {
            dispatch(showToastr({ message, severity }));
            dispatch(reset(AUTH_FUNCTIONALITY.confirmChangePassword));
            navigate(`${URL.accountSettingsSection}${SECTION.password}`);
        }
    }, [message, severity, isSuccess, isError, dispatch])

    return { isLoading };
}

export const useLogoutHook = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const message = useSelector((state) => selectMessageByFunctionality(state, AUTH_FUNCTIONALITY.logout));
    const severity = useSelector((state) => selectSeverityByFunctionality(state, AUTH_FUNCTIONALITY.logout));
    const status = useSelector((state) => selectStatusByFunctionality(state, AUTH_FUNCTIONALITY.logout));

    const isLoading = status === STATUS.pending;
    const isError = status === STATUS.rejected;
    const isSuccess = status === STATUS.fulfilled;

    useEffect(() => {
        dispatch(logout());
    }, [dispatch])

    useEffect(() => {
        if (isError || isSuccess) {
            dispatch(showToastr({ message, severity }));
            dispatch(reset(AUTH_FUNCTIONALITY.logout));
            navigate(URL.login);
        }
    }, [message, severity, isSuccess, isError, dispatch, navigate])

    return { isLoading };
}