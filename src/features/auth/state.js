import { localStorageGetItem } from "../../utils/local-storage-utils";

const { user } = localStorageGetItem('authData', 'object');

const initialState = {
    user: user,
    messages: {},
    severities: {},
    statuses: {}
}

export default initialState;