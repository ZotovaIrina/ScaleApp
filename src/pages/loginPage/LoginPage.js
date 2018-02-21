/*
This component shows a login form and validates user name.
 */

import React from 'react';
//TODO: Use Redux.  Access to storage should be with Redux actions
// Storage is used like database.
import storage from '../../store/middleware/storage';

class LoginPage extends React.Component {

    constructor(props) {
        super(props);
        //TODO: errorMessage should be returned from validation component
        this.state = {
            userName: '',
            errorMessage: '',
            isDisabled: true,
        };
        // Binding context of current instance of LoginPage class to ensure proper context for the method call
        this.onChange = this.onHandleChange.bind(this);
    }

    // TODO: All text in App should be taken from JSON
    errorUserNameShort = 'Username should contain no less than 3 symbols';
    errorUserNameIsRequired = 'User Name is Required';

    submitLogin() {
        //TODO: Use Redux action
        //TODO: prevent default submit event and navigate to main page
        storage.setItem('UserName', this.state.userName)
    }

    //TODO: move in separate component to handle validation
    onHandleChange(event) {
        let value = event.target.value;
        //TODO: call setState one time in the end of this method
        this.setState({
            [event.target.name]: value,
        });
        if (this.userNameIsValid(value).isValid) {
            this.setState({
                isDisabled: false,
                errorMessage: '',
            });
        } else {
            this.setState({
                isDisabled: true,
            });
        }
    }

    onHandleBlur(event) {
        if (this.userNameIsValid(event.target.value).isValid) {
            this.setState({
                isDisabled: false,
            });
        } else {
            this.setState({
                isDisabled: true,
                //TODO: Remove tag from state. Use string value. Add condition to template to show this p tag if sting is not empty
                errorMessage: <p className="small text-danger">{this.userNameIsValid(event.target.value).error}</p>
            });
        }
    }

    //TODO: Refactor it to be called validateUserName and return error message as a string or null if value is correct
    userNameIsValid(value) {
        if(value.length >= 3) {
            return {isValid: true};
        } else if(!value) {
            return {
                error: this.errorUserNameIsRequired,
                isValid: false,
            };
        } else {
            return {
                error: this.errorUserNameShort,
                isValid: false,
            };
        }

    }

    render() {
        return (
            <div>
                <h1>Hello New User!</h1>
                <p>Please input login and password</p>
                <form className="form-group">
                    <label className="row">
                        <p className="col">User Name:</p>
                        {/*TODO: move input in separate component to handle validation.*/}
                        {/*Component should render input and takes parameters: value, className and onValidationError*/}
                        {/*(will return error message)*/}
                        <input name="userName"
                               type="text"
                               className={this.state.errorMessage ? "col form-control border-danger" : "col form-control"}
                               value={this.state.userName}
                               onChange={this.onChange}
                               placeholder="User Name"
                               onBlur={(event) => this.onHandleBlur(event)}/>
                    </label>
                    {this.state.errorMessage}
                    <label className="row">
                        <p className="col">Password:</p>
                        <input name="password"
                               type="password"
                               className="col form-control"/>
                    </label>
                    {/*TODO: use onSubmit event on the form instead onClick*/}
                   <div className="row">
                       <button type="Submit"
                            disabled={this.state.isDisabled}
                            className={this.state.isDisabled ? ' btn col btn-secondary' : 'btn col btn-primary'}
                            onClick={() => this.submitLogin()}>
                        Submit
                    </button>
                   </div>
                </form>
            </div>
        )
    }
}

export default LoginPage;