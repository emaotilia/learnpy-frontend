import authReducer from '../features/auth/slice';
import codeReducer from '../features/code/slice';
import toastrReducer from '../features/toastr/slice';
import coursesReducer from '../features/courses/slice';
import trainingReducer from '../features/training/slice';
import workspaceReducer from '../features/workspace/slice';
import statisticsReducer from '../features/statistics/slice';
import laboratoriesReducer from '../features/laboratories/slice';

import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
    reducer: {
        auth: authReducer,
        code: codeReducer,
        toastr: toastrReducer,
        courses: coursesReducer,
        training: trainingReducer,
        workspace: workspaceReducer,
        statistics: statisticsReducer,
        laboratories: laboratoriesReducer
    }
})

export default store;