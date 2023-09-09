import { get } from "../../utils/request-utils";

const COURSES_API_URL = `/api/courses`;

const getCourses = async () => {
    return get(`${COURSES_API_URL}`);
}

const service = {
    getCourses
}

export default service;