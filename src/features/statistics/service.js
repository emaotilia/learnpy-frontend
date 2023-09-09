import { get } from '../../utils/request-utils';

const STATISTICS_API_URL = '/api/statistics'

const getCorrectLaboratoriesStatistics = async (requestPayload) => {
    const { userId } = requestPayload;
    return get(`${STATISTICS_API_URL}?studentId=${userId}&isCorrect=true&section=Laboratoare`);
}

const getIncorrectLaboratoriesStatistics = async (requestPayload) => {
    const { userId } = requestPayload;
    return get(`${STATISTICS_API_URL}?studentId=${userId}&isCorrect=false&section=Laboratoare`);
}

const getCorrectTrainingStatistics = async (requestPayload) => {
    const { userId } = requestPayload;
    return get(`${STATISTICS_API_URL}?studentId=${userId}&isCorrect=true&section=Antrenament`);
}

const getIncorrectTrianingStatistics = async (requestPayload) => {
    const { userId } = requestPayload;
    return get(`${STATISTICS_API_URL}?studentId=${userId}&isCorrect=true&section=Antrenament`);
}

const statisticsService = {
    getCorrectTrainingStatistics,
    getIncorrectTrianingStatistics,
    getCorrectLaboratoriesStatistics,
    getIncorrectLaboratoriesStatistics
}

export default statisticsService;