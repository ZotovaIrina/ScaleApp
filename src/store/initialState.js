let INITIAL_STATE = () => {
    return {
        user: {
            userName: '',
            nameError: '',
            isUserLoggedIn: false,
            showUserNameError: false,
        },
        weight: [],
    };
};

export default INITIAL_STATE();