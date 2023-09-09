import { get } from "../../utils/request-utils";

const TRAINING_EXERCISES_API_URL = `/api/training-exercises`;

const getTrainingExercises = async (requestPayload) => {
    const { studentId, groupBy, difficulties } = requestPayload;
    
    return get(`
        ${TRAINING_EXERCISES_API_URL}?studentId=${studentId}&groupBy=${groupBy}&difficulties=${difficulties.join(',')}
    `);
}

const service = {
    getTrainingExercises
}

export default service;