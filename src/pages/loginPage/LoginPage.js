import React from 'react';
import {connect} from 'react-redux';
import {
    setUserName,
    setAndSaveUserName,
    setNameValidationError,
    setShowUserNameError,
} from '../../store/actions/userActions'

import NameValidation from '../../components/nameValidation'

class LoginPage extends React.Component {

    submitLogin(e) {
        e.preventDefault();
        this.props.setAndSaveUserName(this.props.userName);
    }

    render() {
        return (
            <div>
                <h1>Hello New User!</h1>
                <p>Please input login and password</p>
                <form className="form-group" onSubmit={(e) => this.submitLogin(e)}>
                    <NameValidation userName={this.props.userName}
                                    nameError={this.props.nameError}
                                    setUserName={this.props.setUserName}
                                    setError={this.props.setNameValidationError}
                                    setShowUserNameError={this.props.setShowUserNameError}
                                    showUserNameError={this.props.showUserNameError}/>
                    <span className="text-danger">{this.props.showUserNameError ? this.props.nameError : ''}</span>
                    <label className="row">
                        <p className="col">Password:</p>
                        <input name="password"
                               type="password"
                               className="col form-control"/>
                    </label>
                    <div className="row">
                        <button type="Submit"
                                disabled={this.props.nameError || !this.props.userName}
                                className={this.props.nameError || !this.props.userName ? ' btn col btn-secondary' : 'btn col btn-primary'}>
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userName: state.user.userName || '',
        nameError: state.user.nameError || '',
        showUserNameError: state.user.eventData.showUserNameError || false,
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        setUserName: (name) => {
            dispatch(setUserName(name))
        },
        setAndSaveUserName: (name) => {
            dispatch(setAndSaveUserName(name))
        },
        setNameValidationError: (nameError) => {
            dispatch(setNameValidationError(nameError))
        },
        setShowUserNameError: (value) => {
            dispatch(setShowUserNameError(value))
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);