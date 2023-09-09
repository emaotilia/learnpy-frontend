import initialState from './state'

import codeService from './service'

import { STATUS } from '../../constants/status-constants'
import { SEVERITY } from '../../constants/severity-constants'
import { UNKNOWN_ERROR } from '../../constants/error-constants'

import {
    createSlice,
    createAsyncThunk
} from '@reduxjs/toolkit'

export const runCode = createAsyncThunk(
    'code/run',
    async (requestPayload, { rejectWithValue }) => {
        const response = await codeService.runCode(requestPayload);

        const responsePayload = await response.json();

        if (response.status < 200 || response.status >= 300) {
            return rejectWithValue(responsePayload);
        }

        return responsePayload;
    }
)

export const submitCode = createAsyncThunk(
    'code/submit',
    async (requestPayload, { rejectWithValue }) => {
        const response = await codeService.submitCode(requestPayload);

        const responsePayload = await response.json();

        if (response.status < 200 || response.status >= 300) {
            return rejectWithValue(responsePayload);
        }

        return responsePayload;
    }
)

export const codeSlice = createSlice({
    name: 'code',
    initialState,
    reducers: {
        reset: (state, { payload }) => {
            state.messages[payload] = undefined;
            state.severities[payload] = undefined;
            state.statuses[payload] = undefined;
        },
        resetResult: (state) => {
            state.result = {};
        },
        resetMessage: (state, { payload }) => {
            state.messages[payload] = undefined;
            state.severities[payload] = undefined;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(runCode.pending, (state) => {
                state.statuses.run = STATUS.pending;
            })
            .addCase(runCode.fulfilled, (state, { payload }) => {
                state.messages.run = payload.message;
                state.severities.run = payload.severity;
                state.statuses.run = STATUS.fulfilled;
            })
            .addCase(runCode.rejected, (state, { payload }) => {
                state.statuses.run = STATUS.rejected;
                state.messages.run = payload?.message ?? UNKNOWN_ERROR;
                state.severities.run = payload?.severity ?? SEVERITY.error;
            })
            .addCase(submitCode.pending, (state) => {
                state.statuses.submit = STATUS.pending;
            })
            .addCase(submitCode.fulfilled, (state, { payload }) => {
                state.result = payload.result;
                state.statuses.submit = STATUS.fulfilled;
                state.messages.submit = payload.message;
                state.severities.submit = payload.severity;
            })
            .addCase(submitCode.rejected, (state, { payload }) => {
                state.statuses.submit = STATUS.rejected;
                state.messages.submit = payload?.message ?? UNKNOWN_ERROR;
                state.severities.submit = payload?.severity ?? SEVERITY.error;
            })
    }
})

export const selectMessageByFunctionality = (state, functionality) => state.code.messages[functionality];
export const selectSeverityByFunctionality = (state, functionality) => state.code.severities[functionality];
export const selectStatusByFunctionality = (state, functionality) => state.code.statuses[functionality];

export const { reset, resetResult, resetMessage } = codeSlice.actions;
export default codeSlice.reducer;