import React from 'react';

class NameValidation extends React.Component {

    errorUserNameShort = 'Username should contain no less than 3 symbols';
    errorUserNameIsRequired = 'User Name is Required';

    render() {
        return (
            <input name="userName"
                   type="text"
                   className={this.props.nameError && this.props.showUserNameError ? "col form-control border-danger" : "col form-control"}
                   value={this.props.userName}
                   onChange={(e) => this.onHandleChange(e)}
                   onBlur={(e) => this.onHandleBlur(e)}
                   placeholder="User Name"/>
        )
    }

    onHandleChange(event) {
        let value = event.target.value;
        this.props.setUserName(value);
        this.props.setError(this.userNameIsValid(value).errorMessage);
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
        this.props.setShowUserNameError(true);
    }

}

export default NameValidation