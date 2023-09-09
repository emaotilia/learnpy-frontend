import initialState from './state';

import { authService } from './service';

import { STATUS } from '../../constants/status-constants';
import { SEVERITY } from '../../constants/severity-constants';
import { UNKNOWN_ERROR } from '../../constants/error-constants';

import {
    createSlice,
    createAsyncThunk
} from '@reduxjs/toolkit';

import {
    localStorageSetItem,
    localStorageSetItemProperty
} from '../../utils/local-storage-utils';

export const register = createAsyncThunk(
    'auth/register',
    async (requestPayload, { rejectWithValue }) => {
        const response = await authService.register(requestPayload);

        const responsePayload = await response.json();

        if (response.status < 200 || response.status >= 300) {
            return rejectWithValue(responsePayload);
        }

        return responsePayload;
    }
)

export const activate = createAsyncThunk(
    'auth/activate',
    async (requestPayload, { rejectWithValue }) => {
        const response = await authService.activate(requestPayload);

        const responsePayload = await response.json();

        if (response.status < 200 || response.status >= 300) {
            return rejectWithValue(responsePayload);
        }

        return responsePayload;
    }
)

export const login = createAsyncThunk(
    'auth/login',
    async (requestPayload, { rejectWithValue }) => {
        const response = await authService.login(requestPayload);

        const responsePayload = await response.json();

        if (response.status < 200 || response.status >= 300) {
            return rejectWithValue(responsePayload);
        }

        localStorageSetItem('authData', { user: responsePayload.user });

        return responsePayload;
    }
)

export const forgotPassword = createAsyncThunk(
    'auth/forgot-password',
    async (requestPayload, { rejectWithValue }) => {
        const response = await authService.forgotPassword(requestPayload);

        const responsePayload = await response.json();

        if (response.status < 200 || response.status >= 300) {
            return rejectWithValue(responsePayload);
        }

        return responsePayload;
    }
)

export const update = createAsyncThunk(
    'api/users/update',
    async (requestPayload, { rejectWithValue }) => {
        const response = await authService.update(requestPayload);

        const responsePayload = await response.json();

        if (response.status < 200 || response.status >= 300) {
            return rejectWithValue(responsePayload);
        }

        localStorageSetItem('authData', { user: responsePayload.user });

        return responsePayload;
    }
)

export const changeEmail = createAsyncThunk(
    'auth/change-email',
    async (requestPayload, { rejectWithValue }) => {
        const response = await authService.changeEmail(requestPayload);

        const responsePayload = await response.json();

        if (response.status < 200 || response.status >= 300) {
            return rejectWithValue(responsePayload);
        }

        return responsePayload;
    }
)

export const changePassword = createAsyncThunk(
    'auth/change-password',
    async (requestPayload, { rejectWithValue }) => {
        const response = await authService.changePassword(requestPayload);

        const responsePayload = await response.json();

        if (response.status < 200 || response.status >= 300) {
            return rejectWithValue(responsePayload);
        }

        return responsePayload;
    }
)

export const confirmChangeEmail = createAsyncThunk(
    'auth/confirm-change-email',
    async (requestPayload, { rejectWithValue }) => {
        const response = await authService.confirmChangeEmail(requestPayload);

        const responsePayload = await response.json();

        if (response.status < 200 || response.status >= 300) {
            return rejectWithValue(responsePayload);
        }

        const newEmail = (responsePayload).newEmail;
        localStorageSetItemProperty('authData', 'email', newEmail);

        return responsePayload;
    }
)

export const confirmChangePassword = createAsyncThunk(
    'auth/confirm-change-password',
    async (requestPayload, { rejectWithValue }) => {
        const response = await authService.confirmChangePassword(requestPayload);

        const responsePayload = await response.json();

        if (response.status < 200 || response.status >= 300) {
            return rejectWithValue(responsePayload);
        }

        return responsePayload;
    }
)

export const logout = createAsyncThunk(
    'auth/logout',
    async (_, { rejectWithValue }) => {
        const response = await authService.logout();

        const responsePayload = await response.json();

        if (response.status < 200 || response.status >= 300) {
            return rejectWithValue(responsePayload);
        }

        localStorage.removeItem('authData');

        return responsePayload;
    }
)

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        reset: (state, { payload }) => {
            state.messages[payload] = undefined;
            state.severities[payload] = undefined;
            state.statuses[payload] = undefined;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(register.pending, (state) => {
                state.statuses.register = STATUS.pending;
            })
            .addCase(register.fulfilled, (state, { payload }) => {
                state.statuses.register = STATUS.fulfilled;
                state.messages.register = payload.message;
                state.severities.register = payload.severity;
            })
            .addCase(register.rejected, (state, { payload }) => {
                state.statuses.register = STATUS.rejected;
                state.messages.register = payload?.message ?? UNKNOWN_ERROR;
                state.severities.register = payload?.severity ?? SEVERITY.error;
            })
            .addCase(activate.pending, (state) => {
                state.statuses.activate = STATUS.pending;
            })
            .addCase(activate.fulfilled, (state, { payload }) => {
                state.statuses.activate = STATUS.fulfilled;
                state.messages.activate = payload.message;
                state.severities.activate = payload.severity;
            })
            .addCase(activate.rejected, (state, { payload }) => {
                state.statuses.activate = STATUS.rejected;
                state.messages.activate = payload?.message ?? UNKNOWN_ERROR;
                state.severities.activate = payload?.severity ?? SEVERITY.error;
            })
            .addCase(login.pending, (state) => {
                state.statuses.login = STATUS.pending;
            })
            .addCase(login.fulfilled, (state, { payload }) => {
                state.statuses.login = STATUS.fulfilled;
                state.messages.login = payload.message;
                state.severities.login = payload.severity;
                state.user = payload.user;
            })
            .addCase(login.rejected, (state, { payload }) => {
                state.statuses.login = STATUS.rejected;
                state.messages.login = payload?.message ?? UNKNOWN_ERROR;
                state.severities.login = payload?.severity ?? SEVERITY.error;
            })
            .addCase(forgotPassword.pending, (state) => {
                state.statuses.forgotPassword = STATUS.pending;
            })
            .addCase(forgotPassword.fulfilled, (state, { payload }) => {
                state.statuses.forgotPassword = STATUS.fulfilled;
                state.messages.forgotPassword = payload.message;
                state.severities.forgotPassword = payload.severity;
            })
            .addCase(forgotPassword.rejected, (state, { payload }) => {
                state.statuses.forgotPassword = STATUS.rejected;
                state.messages.forgotPassword = payload?.message ?? UNKNOWN_ERROR;
                state.severities.forgotPassword = payload?.severity ?? SEVERITY.error;
            })
            .addCase(update.pending, (state) => {
                state.statuses.update = STATUS.pending;
            })
            .addCase(update.fulfilled, (state, { payload }) => {
                state.statuses.update = STATUS.fulfilled;
                state.messages.update = payload.message;
                state.severities.update = payload.severity;
                state.user = payload.user;
            })
            .addCase(update.rejected, (state, { payload }) => {
                state.statuses.update = STATUS.rejected;
                state.messages.update = payload?.message ?? UNKNOWN_ERROR;
                state.severities.update = payload?.severity ?? SEVERITY.error;
            })
            .addCase(changeEmail.pending, (state) => {
                state.statuses.changeEmail = STATUS.pending;
            })
            .addCase(changeEmail.fulfilled, (state, { payload }) => {
                state.statuses.changeEmail = STATUS.fulfilled;
                state.messages.changeEmail = payload.message;
                state.severities.changeEmail = payload.severity;
            })
            .addCase(changeEmail.rejected, (state, { payload }) => {
                state.statuses.changeEmail = STATUS.rejected;
                state.messages.changeEmail = payload?.message ?? UNKNOWN_ERROR;
                state.severities.changeEmail = payload?.severity ?? SEVERITY.error;
            })
            .addCase(changePassword.pending, (state) => {
                state.statuses.changePassword = STATUS.pending;
            })
            .addCase(changePassword.fulfilled, (state, { payload }) => {
                state.statuses.changePassword = STATUS.fulfilled;
                state.messages.changePassword = payload.message;
                state.severities.changePassword = payload.severity;
            })
            .addCase(changePassword.rejected, (state, { payload }) => {
                state.statuses.changePassword = STATUS.rejected;
                state.messages.changePassword = payload?.message ?? UNKNOWN_ERROR;
                state.severities.changePassword = payload?.severity ?? SEVERITY.error;
            })
            .addCase(confirmChangeEmail.pending, (state) => {
                state.statuses.confirmChangeEmail = STATUS.pending;
            })
            .addCase(confirmChangeEmail.fulfilled, (state, { payload }) => {
                state.statuses.confirmChangeEmail = STATUS.fulfilled;
                state.messages.confirmChangeEmail = payload.message;
                state.severities.confirmChangeEmail = payload.severity;
                state.user.email = payload.newEmail;
            })
            .addCase(confirmChangeEmail.rejected, (state, { payload }) => {
                state.statuses.confirmChangeEmail = STATUS.rejected;
                state.messages.confirmChangeEmail = payload?.message ?? UNKNOWN_ERROR;
                state.severities.confirmChangeEmail = payload?.severity ?? SEVERITY.error;
            })
            .addCase(confirmChangePassword.pending, (state) => {
                state.statuses.confirmChangePassword = STATUS.pending;
            })
            .addCase(confirmChangePassword.fulfilled, (state, { payload }) => {
                state.statuses.confirmChangePassword = STATUS.fulfilled;
                state.messages.confirmChangePassword = payload.message;
                state.severities.confirmChangePassword = payload.severity;
            })
            .addCase(confirmChangePassword.rejected, (state, { payload }) => {
                state.statuses.confirmChangePassword = STATUS.rejected;
                state.messages.confirmChangePassword = payload?.message ?? UNKNOWN_ERROR;
                state.severities.confirmChangePassword = payload?.severity ?? SEVERITY.error;
            })
            .addCase(logout.pending, (state) => {
                state.statuses.logout = STATUS.pending;
            })
            .addCase(logout.fulfilled, (state, { payload }) => {
                state.statuses.logout = STATUS.fulfilled;
                state.messages.logout = payload.message;
                state.severities.logout = payload.severity;
                state.user = undefined;
            })
            .addCase(logout.rejected, (state, { payload }) => {
                state.statuses.logout = STATUS.rejected;
                state.messages.logout = payload?.message ?? UNKNOWN_ERROR;
                state.severities.logout = payload?.severity ?? SEVERITY.error;
            })
    }
})

export const selectMessageByFunctionality = (state, functionality) => state.auth.messages[functionality];
export const selectSeverityByFunctionality = (state, functionality) => state.auth.severities[functionality];
export const selectStatusByFunctionality = (state, functionality) => state.auth.statuses[functionality];

export const { reset } = authSlice.actions;
export default authSlice.reducer;