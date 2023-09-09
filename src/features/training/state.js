import { GROUP_BY } from "../../components/training/controls-container/constants";

import { DIFFICULTIES } from "../../constants/difficulty-constants";

import { localStorageGetItem } from "../../utils/local-storage-utils";

const {
    groupBy,
    difficulties
} = localStorageGetItem('trainingData', 'object');

const initialState = {
    trainingExercises: {},
    difficulties: difficulties || DIFFICULTIES,
    groupBy: groupBy || GROUP_BY.difficulty,
    message: undefined,
    severity: undefined,
    status: undefined
}

export default initialState;