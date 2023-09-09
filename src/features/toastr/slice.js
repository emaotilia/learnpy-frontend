import { createSlice } from '@reduxjs/toolkit'

import { initialState } from './state';

export const toastrSlice = createSlice({
    name: 'toastr',
    initialState,
    reducers: {
        hideToastr: (state) => {
            state.open = false;
        },
        resetToastr: (state) => {
            state.open = false;
            state.message = undefined;
            state.severity = undefined;
        },
        showToastr: (state, { payload }) => {
            state.open = true;
            state.message = payload.message;
            state.severity = payload.severity;
        }
    }
})

export const { hideToastr, resetToastr, showToastr } = toastrSlice.actions;
export default toastrSlice.reducer;