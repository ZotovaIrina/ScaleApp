import React from 'react';

class NameValidation extends React.Component {

    isBlur = false;
    errorUserNameShort = 'Username should contain no less than 3 symbols';
    errorUserNameIsRequired = 'User Name is Required';

    render() {
        return (
            <label className="row">
                <p className="col">User Name:</p>
                <input name="userName"
                       type="text"
                       className={this.props.nameError ? "col form-control border-danger" : "col form-control"}
                       value={this.props.userName}
                       onChange={(e) => this.onHandleChange(e)}
                       onBlur={(e) => this.onHandleBlur(e)}
                       placeholder="User Name"/>
            </label>
        )
    }

    onHandleChange(event) {
        let value = event.target.value;
        this.props.setUserName(value);
        //After Blur change error text
        if (this.isBlur) {
            this.props.setError(this.userNameIsValid(value).errorMessage);
        }
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
        let value = event.target.value;
        this.isBlur = true;
        this.props.setError(this.userNameIsValid(value).errorMessage);
    }

}

export default NameValidation