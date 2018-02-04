import React from 'react';
import {
    Route
} from 'react-router-dom';

import MainPage from './pages/mainPage/MainPage'
import Weight from './pages/weight/Weight'
import LoginPage from './pages/loginPage/LoginPage'
import storage from './store/middleware/storage'

class Routes extends React.Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={LoginIsExist() ? MainPage : LoginPage}></Route>
                <Route exact path="/weight" component={Weight}></Route>
            </div>
        )
    }
}

function LoginIsExist() {
    return storage.getItem('UserName');
}


export default Routes;