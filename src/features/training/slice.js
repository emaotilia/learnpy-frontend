import service from "./service";

import initialState from "./state";

import { STATUS } from "../../constants/status-constants";

import { localStorageSetItemProperty } from "../../utils/local-storage-utils";

import {
    createSlice,
    createAsyncThunk
} from "@reduxjs/toolkit";

export const getTrainingExercises = createAsyncThunk(
    'laboratories/get-training-questions',
    async (requestPayload, { rejectWithValue }) => {
        const response = await service.getTrainingExercises(requestPayload);

        const responsePayload = await response.json();

        if (response.status < 200 || response.status >= 300) {
            return rejectWithValue(responsePayload);
        }

        return responsePayload;
    }
)

export const trainingSlice = createSlice({
    name: 'training',
    initialState,
    reducers: {
        resetAll: (state) => {
            state = initialState;
        },
        reset: (state) => {
            state.message = undefined;
            state.severity = undefined;
            state.status = undefined;
        },
        setGroupBy: (state, { payload }) => {
            localStorageSetItemProperty('trainingData', 'groupBy', payload);
            state.groupBy = payload;
        },
        setDifficulties: (state, { payload }) => {
            localStorageSetItemProperty('trainingData', 'difficulties', payload);
            state.difficulties = payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getTrainingExercises.pending, (state) => {
                state.status = STATUS.pending;
            })
            .addCase(getTrainingExercises.fulfilled, (state, { payload }) => {
                state.status = STATUS.fulfilled;
                state.trainingExercises = payload;
            })
            .addCase(getTrainingExercises.rejected, (state) => {
                state.status = STATUS.rejected;
            })
    }
})

export const { resetAll, reset, setGroupBy, setDifficulties } = trainingSlice.actions;
export default trainingSlice.reducer;

