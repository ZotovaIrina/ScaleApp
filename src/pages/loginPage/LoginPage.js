import React from 'react';
import {connect} from 'react-redux';
import {
    setUserName,
    setAndSaveUserName,
    setNameValidationError,
} from '../../store/actions/userActions'

import NameValidation from '../../components/nameValidation'

class LoginPage extends React.Component {

    submitLogin(e) {
        console.log('submitLogin');
        e.preventDefault();
        this.props.setUserName(this.props.userName);
    }

    inputUserName(name) {
        console.log('User input name', name);
    }

    render() {
        console.log(this.props);
        return (
            <div>
                <h1>Hello New User!</h1>
                <p>Please input login and password</p>
                <form className="form-group" onSubmit={(e) => this.submitLogin(e)}>
                    <NameValidation userName={this.props.userName}
                                    nameError={this.props.nameError}
                                    inputUserName={this.inputUserName}
                                    setError={this.props.setNameValidationError}/>
                    <span className="text-danger">{this.props.nameError}</span>
                    <label className="row">
                        <p className="col">Password:</p>
                        <input name="password"
                               type="password"
                               className="col form-control"/>
                    </label>
                    <div className="row">
                        <button type="Submit"
                                disabled={this.props.nameError}
                                className={this.props.nameError ? ' btn col btn-secondary' : 'btn col btn-primary'}>
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
        nameError: state.user.nameError || ''
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
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);