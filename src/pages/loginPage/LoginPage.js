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
                errorMessage: <p className="small text-danger">{this.userNameIsValid(event.target.value).error}</p>
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
                <form className="form-group">
                    <label className="row">
                        <p className="col">User Name:</p>
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