import storage from './middleware/storage'

let INITIAL_STATE = () => {
    let data = {
        user: {
            userName: '',
            nameError: '',
            isUserLoggedIn: false,
            showUserNameError: false,
        },
        weight: [],
    };
    data.user.userName = storage.getItem('UserName') ? storage.getItem('UserName') : '';
    data.user.isUserLoggedIn = data.user.userName ? true : false;
    return data
};

export default INITIAL_STATE();