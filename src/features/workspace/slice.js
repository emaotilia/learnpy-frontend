import service from "./service";

import { STATUS } from "../../constants/status-constants";

import { initialState } from "./state";

import {
    createSlice,
    createAsyncThunk
} from "@reduxjs/toolkit";

export const getExerciseById = createAsyncThunk(
    'exercises/get-exercise-by-id',
    async (requestPayload, { rejectWithValue }) => {
        const response = await service.getExerciseById(requestPayload);

        const responsePayload = await response.json();

        if (response.status < 200 || response.status >= 300) {
            return rejectWithValue(responsePayload);
        }

        return responsePayload;
    }
)

export const workspaceSlice = createSlice({
    name: 'workspace',
    initialState,
    reducers: {
        reset: (state) => {
            state.message = undefined;
            state.severity = undefined;
            state.status = undefined;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getExerciseById.pending, (state) => {
                state.status = STATUS.pending;
            })
            .addCase(getExerciseById.fulfilled, (state, { payload }) => {
                state.status = STATUS.fulfilled;
                state.exercise = payload;
            })
            .addCase(getExerciseById.rejected, (state) => {
                state.status = STATUS.rejected;
            })
    }
})

export const { reset } = workspaceSlice.actions;
export default workspaceSlice.reducer;

