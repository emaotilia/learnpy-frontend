export const isEmpty = (object) => {
    return Object.keys(object).length === 0;
}

export const renameKeys = (object, oldKeys, newKeys) => {
    if (oldKeys.length !== newKeys.length) {
        throw new Error('Old keys and new keys lists must have the same length.');
    }

    const newObject = {};

    for (const key in object) {
        if (Object.prototype.hasOwnProperty.call(object, key)) {
            const index = oldKeys.indexOf(key);
            if (index !== -1) {
                newObject[newKeys[index]] = object[key];
            } else {
                newObject[key] = object[key];
            }
        }
    }
    return newObject;
}