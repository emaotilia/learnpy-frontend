import { get } from "../../utils/request-utils";

const EXERCISES_API_URL = `/api/exercises`;

const getExerciseById = async (requestPayload) => {
    const { id } = requestPayload;

    return get(`${EXERCISES_API_URL}/${id}`);
}

const service = {
    getExerciseById
}

export default service;