import { DIFFICULTIES } from "../../constants/difficulty-constants";

import { localStorageGetItem } from "../../utils/local-storage-utils";

const {
    difficulties
} = localStorageGetItem('laboratoriesData', 'object');

export const initialState = {
    laboratoryExercises: {},
    difficulties: difficulties || DIFFICULTIES,
    message: undefined,
    severity: undefined,
    status: undefined
}