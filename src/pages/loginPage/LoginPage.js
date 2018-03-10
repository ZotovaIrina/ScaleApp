import React from 'react';
//TODO: Use Redux.  Access to storage should be with Redux actions
import storage from '../../store/middleware/storage';
import NameValidation from '../../components/nameValidation'

class LoginPage extends React.Component {

    constructor(props) {
        super(props);
        //TODO: errorMessage should be returned from validation component
        this.state = {
            userName: '',
            userNameErrorMessage: '',
        };
    }

    submitLogin() {
        //TODO: Use Redux action
        //TODO: prevent default submit event and navigate to main page
        storage.setItem('UserName', this.state.userName)
    }

    render() {
        return (
            <div>
                <h1>Hello New User!</h1>
                <p>Please input login and password</p>
                <form className="form-group">
                    <NameValidation userName={this.state.userName}
                                    userNameErrorMessage={this.state.userNameErrorMessage}/>
                    {this.state.userNameErrorMessage}
                    <label className="row">
                        <p className="col">Password:</p>
                        <input name="password"
                               type="password"
                               className="col form-control"/>
                    </label>
                    {/*TODO: use onSubmit event on the form instead onClick*/}
                    <div className="row">
                        <button type="Submit"
                                disabled={this.state.errorMessage}
                                className={this.state.errorMessage ? ' btn col btn-secondary' : 'btn col btn-primary'}
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