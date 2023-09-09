import { REQUEST_CONTENT } from "../constants/request-constants";


export const get = async (uri) => {
    const requestInit = {
        method: 'GET'
    }

    return await fetch(uri, requestInit);
}

export const post = async (uri, data) => {
    const requestInit = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }

    return await fetch(uri, requestInit);
}

export const put = async (uri, data, contentType = REQUEST_CONTENT.json) => {
    const requestInit = {
        method: 'PUT'
    }

    if (contentType === REQUEST_CONTENT.json) {
        requestInit.headers = {
            'Content-Type': 'application/json'
        }
        requestInit.body = JSON.stringify(data);
    }
    else {
        requestInit.body = data;
    }

    return await fetch(uri, requestInit);
}