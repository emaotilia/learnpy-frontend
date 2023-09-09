import { post } from '../../utils/request-utils';

const CODE_API_URL = '/api/code'

const runCode = async (requestPayload) => {
    console.log(requestPayload)
    return post(`${CODE_API_URL}/run`, requestPayload);
}

const submitCode = async (requestPayload) => {
    return post(`${CODE_API_URL}/submit`, requestPayload);
}

const codeService = {
    runCode,
    submitCode
}

export default codeService;