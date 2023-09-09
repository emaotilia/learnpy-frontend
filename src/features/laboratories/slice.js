import service from "./service";

import { STATUS } from "../../constants/status-constants";

import { initialState } from "./state";

import { localStorageSetItemProperty } from "../../utils/local-storage-utils";

import {
    createSlice,
    createAsyncThunk
} from "@reduxjs/toolkit";

export const getLaboratoryExercises = createAsyncThunk(
    'laboratories/get-laboratory-exercises',
    async (requestPayload, { rejectWithValue }) => {
        const response = await service.getLaboratoryExercises(requestPayload);

        const responsePayload = await response.json();

        if (response.status < 200 || response.status >= 300) {
            return rejectWithValue(responsePayload);
        }

        return responsePayload;
    }
)

export const laboratoriesSlice = createSlice({
    name: 'laboratories',
    initialState,
    reducers: {
        resetAll: (state) => {
            state.laboratoryExercises = {};
            state.message = undefined;
            state.severity = undefined;
            state.status = undefined;
        },
        reset: (state) => {
            state.message = undefined;
            state.severity = undefined;
            state.status = undefined;
        },
        setDifficulties: (state, { payload }) => {
            localStorageSetItemProperty('laboratoriesData', 'difficulties', payload)
            state.difficulties = payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getLaboratoryExercises.pending, (state) => {
                state.status = STATUS.pending;
            })
            .addCase(getLaboratoryExercises.fulfilled, (state, { payload }) => {
                state.status = STATUS.fulfilled;
                state.laboratoryExercises = payload;
            })
            .addCase(getLaboratoryExercises.rejected, (state) => {
                state.status = STATUS.rejected;
            })
    }
})

export const { resetAll, reset, setDifficulties } = laboratoriesSlice.actions;
export default laboratoriesSlice.reducer;

