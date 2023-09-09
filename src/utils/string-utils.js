export const hasLowerCase = (string) => {
    return string.toUpperCase() !== string;
}

export const hasUpperCase = (string) => {
    return string.toLowerCase() !== string;
}

export const hasDigit = (string) => {
    return /\d/.test(string);
}

export const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1).toLocaleLowerCase();
}

export const toHyphenLowerCase = (string) => {
    return string.toLowerCase().replace(/\s+/g, '-');
}