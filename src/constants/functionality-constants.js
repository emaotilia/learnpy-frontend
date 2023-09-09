export const CODE_FUNCTIONALITY = Object.freeze({
    run: 'run',
    submit: 'submit'
});

export const STATISTICS_FUNCTIONALITY = Object.freeze({
    getCorrectTraining: 'getCorrectTraining',
    getIncorrectTraining: 'getIncorrectTraining',
    getCorrectLaboratories: 'getCorrectLaboratories',
    getIncorrectLaboratories: 'getIncorrectLaboratories',
})

export const AUTH_FUNCTIONALITY = Object.freeze({
    register: 'register',
    activate: 'activate',
    login: 'login',
    forgotPassword: 'forgotPassword',
    update: 'update',
    changeEmail: 'changeEmail',
    changePassword: 'changePassword',
    confirmChangeEmail: 'confirmChangeEmail',
    confirmChangePassword: 'confirmChangePassword',
    logout: 'logout'
});

export const AUTH_FUNCTIONALITIES = Object.values(AUTH_FUNCTIONALITY);
export const CODE_FUNCTIONALITIES = Object.values(CODE_FUNCTIONALITY);
export const STATISTICS_FUNCTIONALITIES = Object.values(STATISTICS_FUNCTIONALITY);

[
    {
        id: 1254,
        title: "The Road Ahead",
        author: "Bill Gates",
        category: "Drama"
    },
    {
        id: 4264,
        title: "Walter Isaacson",
        author: "Steve Jobs",
        category: "Action"
    },
    {
        id: 3245,
        title: "Mockingjay: The Final Book of The Hunger Games",
        author: "Suzanne Collins",
        category: "Adventure"
    },
    {
        id: 3246,
        title: "Mockingbird",
        author: "Steve Jobs",
        category: "Drama"
    },
    {
        id: 3247,
        title: "Eleven Rings",
        author: "Elon Musk",
        category: "Technology"
    },
    {
        id: 3248,
        title: "The Colour of Magic",
        author: "Elon Musk",
        category: "Science Fiction"
    },
];