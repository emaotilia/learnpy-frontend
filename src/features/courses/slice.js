import service from "./service";

import { STATUS } from "../../constants/status-constants";

import { initialState } from "./state";

import {
    createSlice,
    createAsyncThunk
} from "@reduxjs/toolkit";

export const getCourses = createAsyncThunk(
    'courses/get-courses',
    async (_, { rejectWithValue }) => {
        const response = await service.getCourses();

        const responsePayload = await response.json();

        if (response.status < 200 || response.status >= 300) {
            return rejectWithValue(responsePayload);
        }

        return responsePayload;
    }
)

export const coursesSlice = createSlice({
    name: 'courses',
    initialState,
    reducers: {
        resetAll: (state) => {
            state.courses = [];
            state.message = undefined;
            state.severity = undefined;
            state.status = undefined;
        },
        reset: (state) => {
            state.message = undefined;
            state.severity = undefined;
            state.status = undefined;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getCourses.pending, (state) => {
                state.status = STATUS.pending;
            })
            .addCase(getCourses.fulfilled, (state, { payload }) => {
                state.status = STATUS.fulfilled;
                state.courses = payload;
            })
            .addCase(getCourses.rejected, (state) => {
                state.status = STATUS.rejected;
            })
    }
})

export const { resetAll, reset } = coursesSlice.actions;
export default coursesSlice.reducer;

