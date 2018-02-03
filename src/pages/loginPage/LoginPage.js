import React from 'react';
import storage from '../../store/actions/storage';

class LoginPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userName: 'Sofia',
        }
    }

    submitLogin() {
        storage.setItem('UserName', this.state.userName)
    }

    onHandleChange (event) {
        this.setState({
            userName: event.target.value
        });
    }


    render() {
        return (
            <div>
                <h1>Hello New User!</h1>
                <p>Please input login and password</p>
                <label>User Name:
                    <input name="userName"
                           type="text"
                           value={this.state.userName}
                           onChange={(event) => this.onHandleChange(event)} />
                </label>
                <label>Password:
                    <input name="password"
                           type = "password"/>
                </label>
                <button type="Submit"
                        onClick={() => this.submitLogin()}>
                    Submit
                </button>
            </div>
        )
    }
}

export default LoginPage;