import React from 'react';
import {connect} from 'react-redux';
import {setName} from '../../store/actions/userActions'

import NameValidation from '../../components/nameValidation'

class LoginPage extends React.Component {

    constructor(props) {
        super(props);
    }

    submitLogin() {
        this.props.setName(this.props.userName)
    }

    render() {
        return (
            <div>
                <h1>Hello New User!</h1>
                <p>Please input login and password</p>
                <form className="form-group">
                    <NameValidation userName={this.props.userName}
                                    userNameErrorMessage={this.props.nameError}/>
                    {this.props.nameError}
                    <label className="row">
                        <p className="col">Password:</p>
                        <input name="password"
                               type="password"
                               className="col form-control"/>
                    </label>
                    {/*TODO: use onSubmit event on the form instead onClick*/}
                    <div className="row">
                        <button type="Submit"
                                disabled={this.props.nameError}
                                className={this.props.nameError ? ' btn col btn-secondary' : 'btn col btn-primary'}
                                onClick={() => this.submitLogin()}>
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
        user: state.user,
        nameError: state.nameError
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        setName: (name) => {
            dispatch(setName(name))
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);