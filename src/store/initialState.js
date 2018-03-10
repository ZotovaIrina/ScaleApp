import storage from './middleware/storage'

let INITIAL_STATE = () => {
    let data = {
        user: {
            userName: '',
            nameError: ''
        },
        weight: [],
    };
    data.user.userName = storage.getItem('UserName') ? storage.getItem('UserName') : '';
    return data
};

export default INITIAL_STATE();