import React from 'react';
import {
    Route
} from 'react-router-dom';
import {connect} from 'react-redux';

import {
    setDefaultUserName,
} from './store/actions/userActions'
import MainPage from './pages/mainPage/MainPage'
import Weight from './pages/weight/Weight'
import LoginPage from './pages/loginPage/LoginPage'

class Routes extends React.Component {
    constructor(params) {
        super(params);
        this.props.setDefaultUserName();
    }

    render() {
        return (
            <div>
                <Route exact path="/" component={this.props.isUserLoggedIn ? MainPage : LoginPage}></Route>
                <Route exact path="/weight" component={Weight}></Route>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        isUserLoggedIn: state.user.isUserLoggedIn
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        setDefaultUserName: () => {
            dispatch(setDefaultUserName())
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Routes);