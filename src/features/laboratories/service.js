import { get } from "../../utils/request-utils";

const LABORATORY_EXERCISES_API_URL = '/api/laboratory-exercises';

const getLaboratoryExercises = async (requestPayload) => {
    const { studentId, difficulties } = requestPayload;
    return get(`${LABORATORY_EXERCISES_API_URL}?studentId=${studentId}&difficulties=${difficulties.join(',')}`);
}

const service = {
    getLaboratoryExercises
}

export default service;