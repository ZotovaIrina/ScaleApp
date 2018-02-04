import React from 'react';
import {
    Route
} from 'react-router-dom';
import {connect} from 'react-redux';

import {getName} from './store/actions/userActions'
import MainPage from './pages/mainPage/MainPage'
import Weight from './pages/weight/Weight'
import LoginPage from './pages/loginPage/LoginPage'

class Routes extends React.Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={this.props.user.userName ? MainPage : LoginPage}></Route>
                <Route exact path="/weight" component={Weight}></Route>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        user: state.user
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        getName: () => {
            dispatch(getName())
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Routes);