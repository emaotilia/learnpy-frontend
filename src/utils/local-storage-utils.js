export const localStorageGetItem = (key, type = undefined) => {
    const item = localStorage.getItem(key);

    if (item) {
        return JSON.parse(item);
    }
    else {
        switch (type) {
            case "object": {
                return {};
            }
            case "array": {
                return [];
            }
            default: {
                return undefined;
            }
        }
    }
}

export const localStorageSetItem = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
}

export const localStorageSetItemProperty = (key, property, value) => {
    const item = localStorage.getItem(key);

    if (!item) {
        return;
    }

    const json = JSON.parse(item);
    json[property] = value;
    localStorage.setItem(key, JSON.stringify(json));
}
