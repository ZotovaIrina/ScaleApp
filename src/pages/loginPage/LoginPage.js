import React from 'react';
import storage from '../../store/actions/storage';

class LoginPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            errorMessage: '',
            isDisabled: true,
        };
        this.onChange = this.onHandleChange.bind(this);
    }

    errorUserNameShort = 'Username should contain no less than 3 symbols';
    errorUserNameIsRequired = 'User Name is Required';

    submitLogin() {
        storage.setItem('UserName', this.state.userName)
    }

    onHandleChange(event) {
        let value = event.target.value;
        this.setState({
            [event.target.name]: value,
        });
        this.userNameIsValid(value);
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
                errorMessage: <p>{this.userNameIsValid(event.target.value).error}</p>
            });
        }
    }

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
                <form>
                    <label>User Name:
                        <input name="userName"
                               type="text"
                               value={this.state.userName}
                               onChange={this.onChange}
                               placeholder="User Name"
                               onBlur={(event) => this.onHandleBlur(event)}/>
                    </label>
                    {this.state.errorMessage}
                    <label>Password:
                        <input name="password"
                               type="password"/>
                    </label>
                    <button type="Submit"
                            disabled={this.state.isDisabled}
                            onClick={() => this.submitLogin()}>
                        Submit
                    </button>
                </form>
            </div>
        )
    }
}

export default LoginPage;