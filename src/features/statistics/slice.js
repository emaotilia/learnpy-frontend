import initialState from './state'

import statisticsService from './service'

import { STATUS } from '../../constants/status-constants'
import { SEVERITY } from '../../constants/severity-constants'
import { UNKNOWN_ERROR } from '../../constants/error-constants'

import {
    createSlice,
    createAsyncThunk
} from '@reduxjs/toolkit'

export const getCorrectLaboratoriesStatistics = createAsyncThunk(
    'query/get-correct-laboratories-statistics',
    async (requestPayload, { rejectWithValue }) => {
        const response = await statisticsService.getCorrectLaboratoriesStatistics(requestPayload);

        const responsePayload = await response.json();

        if (response.status < 200 || response.status >= 300) {
            return rejectWithValue(responsePayload);
        }

        return responsePayload;
    }
)

export const getIncorrectLaboratoriesStatistics = createAsyncThunk(
    'query/get-incorrect-laboratories-statistics',
    async (requestPayload, { rejectWithValue }) => {
        const response = await statisticsService.getIncorrectLaboratoriesStatistics(requestPayload);

        const responsePayload = await response.json();

        if (response.status < 200 || response.status >= 300) {
            return rejectWithValue(responsePayload);
        }

        return responsePayload;
    }
)

export const getCorrectTrainingStatistics = createAsyncThunk(
    'query/get-correct-training-statistics',
    async (requestPayload, { rejectWithValue }) => {
        const response = await statisticsService.getCorrectTrainingStatistics(requestPayload);

        const responsePayload = await response.json();

        if (response.status < 200 || response.status >= 300) {
            return rejectWithValue(responsePayload);
        }

        return responsePayload;
    }
)

export const getIncorrectTrianingStatistics = createAsyncThunk(
    'query/get-incorrect-training-statistics',
    async (requestPayload, { rejectWithValue }) => {
        const response = await statisticsService.getIncorrectTrianingStatistics(requestPayload);

        const responsePayload = await response.json();

        if (response.status < 200 || response.status >= 300) {
            return rejectWithValue(responsePayload);
        }

        return responsePayload;
    }
)

export const statisticsSlice = createSlice({
    name: 'statistics',
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
            .addCase(getCorrectLaboratoriesStatistics.pending, (state) => {
                state.statuses.correctLaboratories = STATUS.pending;
            })
            .addCase(getCorrectLaboratoriesStatistics.fulfilled, (state, { payload }) => {
                state.correctLaboratoriesStatistics = payload;
                state.statuses.correctLaboratories = STATUS.fulfilled;
            })
            .addCase(getCorrectLaboratoriesStatistics.rejected, (state, { payload }) => {
                state.statuses.correctLaboratories = STATUS.rejected;
                state.messages.correctLaboratories = payload?.message ?? UNKNOWN_ERROR;
                state.severities.correctLaboratories = payload?.severity ?? SEVERITY.error;
            })
            .addCase(getIncorrectLaboratoriesStatistics.pending, (state) => {
                state.statuses.incorrectLaboratories = STATUS.pending;
            })
            .addCase(getIncorrectLaboratoriesStatistics.fulfilled, (state, { payload }) => {
                state.incorrectLaboratoriesStatistics = payload;
                state.statuses.incorrectLaboratories = STATUS.fulfilled;
            })
            .addCase(getIncorrectLaboratoriesStatistics.rejected, (state, { payload }) => {
                state.statuses.incorrectLaboratories = STATUS.rejected;
                state.messages.incorrectLaboratories = payload?.message ?? UNKNOWN_ERROR;
                state.severities.incorrectLaboratories = payload?.severity ?? SEVERITY.error;
            })
            .addCase(getCorrectTrainingStatistics.pending, (state) => {
                state.statuses.correctTraining = STATUS.pending;
            })
            .addCase(getCorrectTrainingStatistics.fulfilled, (state, { payload }) => {
                state.correctTrainingStatistics = payload;
                state.statuses.correctTraining = STATUS.fulfilled;
            })
            .addCase(getCorrectTrainingStatistics.rejected, (state, { payload }) => {
                state.statuses.correctTraining = STATUS.rejected;
                state.messages.correctTraining = payload?.message ?? UNKNOWN_ERROR;
                state.severities.correctTraining = payload?.severity ?? SEVERITY.error;
            })
            .addCase(getIncorrectTrianingStatistics.pending, (state) => {
                state.statuses.incorrectTraining = STATUS.pending;
            })
            .addCase(getIncorrectTrianingStatistics.fulfilled, (state, { payload }) => {
                state.incorrectTrainingStatistics = payload;
                state.statuses.incorrectTraining = STATUS.fulfilled;
            })
            .addCase(getIncorrectTrianingStatistics.rejected, (state, { payload }) => {
                state.statuses.incorrectTraining = STATUS.rejected;
                state.messages.incorrectTraining = payload?.message ?? UNKNOWN_ERROR;
                state.severities.incorrectTraining = payload?.severity ?? SEVERITY.error;
            })
    }
})

export const selectMessageByFunctionality = (state, functionality) => state.statistics.messages[functionality]
export const selectSeverityByFunctionality = (state, functionality) => state.statistics.severities[functionality]
export const selectStatusByFunctionality = (state, functionality) => state.statistics.statuses[functionality]

export const { reset } = statisticsSlice.actions;
export default statisticsSlice.reducer;