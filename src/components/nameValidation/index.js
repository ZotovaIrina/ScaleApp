import React from 'react';

class NameValidation extends React.Component {

    constructor(param) {
        super(param);
        this.state = {
            userName: this.props.userName ? '' : this.props.userName,
            errorMessage: this.props.userNameErrorMessage ? '' : this.props.userNameErrorMessage,
            isBlur: false,
            onChange: this.onHandleChange.bind(this),
            onBlur: this.onHandleBlur.bind(this),
        };
    }

    render() {
        return (
            <label className="row">
                <p className="col">User Name:</p>
                <input name="userName"
                       type="text"
                       className={this.state.errorMessage && this.state.isBlur ? "col form-control border-danger" : "col form-control"}
                       value={this.state.userName}
                       onChange={this.state.onChange}
                       onBlur={this.state.onBlur}
                       placeholder="User Name"/>
            </label>
        )
    }

    //TODO: move in separate component to handle validation
    onHandleChange(event) {
        let value = event.target.value;
        this.setState({
            userName: value,
            errorMessage: this.userNameIsValid(value).errorMessage,
        });
    }

    userNameIsValid(value) {
        if (value.length >= 3) {
            return {errorMessage: ''};
        } else if (!value) {
            return {
                errorMessage: this.errorUserNameIsRequired
            };
        } else {
            return {
                errorMessage: this.errorUserNameShort
            };
        }

    }

    onHandleBlur(event) {
        this.setState({
            isBlur: true,
        });
    }

    // TODO: All text in App should be taken from JSON
    errorUserNameShort = 'Username should contain no less than 3 symbols';
    errorUserNameIsRequired = 'User Name is Required';


}

export default NameValidation