import { REQUEST_CONTENT } from '../../constants/request-constants';

import {
    get,
    put,
    post
} from '../../utils/request-utils';

const REGISTER_API_URL = '/auth/register';
const ACTIVATE_API_URL = '/auth/activate';
const LOGIN_API_URL = '/auth/login';
const FORGOT_PASSWORD_API_URL = '/auth/forgot-password';
const UPDATE_API_URL = '/api/users';
const CHANGE_EMAIL_API_URL = '/auth/change-email';
const CONFIRM_CHANGE_EMAIL_API_URL = '/auth/confirm-change-email';
const CHANGE_PASSWORD_API_URL = '/auth/change-password';
const CONFIRM_CHANGE_PASSWORD_API_URL = '/auth/confirm-change-password';
const LOGOUT_API_URL = '/auth/logout';

const register = async (requestPayload) => {
    return post(REGISTER_API_URL, requestPayload);
}

const activate = async (requestPayload) => {
    return post(ACTIVATE_API_URL, requestPayload);
}

const login = async (requestPayload) => {
    return post(LOGIN_API_URL, requestPayload);
}

const forgotPassword = async (requestPayload) => {
    return post(FORGOT_PASSWORD_API_URL, requestPayload);
}

const update = async (requestPayload) => {
    const id = requestPayload.get('id');
    requestPayload.delete('id');
    return put(`${UPDATE_API_URL}/${id}`, requestPayload, REQUEST_CONTENT.formData);
}

const changeEmail = async (requestPayload) => {
    return post(CHANGE_EMAIL_API_URL, requestPayload);
}

const changePassword = async (requestPayload) => {
    return post(CHANGE_PASSWORD_API_URL, requestPayload);
}

const confirmChangeEmail = async (requestPayload) => {
    return post(CONFIRM_CHANGE_EMAIL_API_URL, requestPayload)
}

const confirmChangePassword = async (requestPayload) => {
    return post(CONFIRM_CHANGE_PASSWORD_API_URL, requestPayload);
}

const logout = () => {
    return get(LOGOUT_API_URL);
}

export const authService = {
    register,
    activate,
    login,
    forgotPassword,
    update,
    changeEmail,
    changePassword,
    confirmChangeEmail,
    confirmChangePassword,
    logout
}