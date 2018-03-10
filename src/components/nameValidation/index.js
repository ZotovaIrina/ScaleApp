import React from 'react';

class NameValidation extends React.Component {

    constructor(params) {
        super(params);
        //User name in storage does not changed until onBlur event
        this.state = {
            userName: this.props.userName || '',
            isBlur: false,
        }
    }

    passDataToParentComponent(value) {
        this.props.inputUserName(value);
        this.props.setError(this.userNameIsValid(value).errorMessage);
    }

    errorUserNameShort = 'Username should contain no less than 3 symbols';
    errorUserNameIsRequired = 'User Name is Required';

    render() {
        return (
            <label className="row">
                <p className="col">User Name:</p>
                <input name="userName"
                       type="text"
                       className={this.props.nameError ? "col form-control border-danger" : "col form-control"}
                       value={this.state.userName}
                       onChange={(e) => this.onHandleChange(e)}
                       onBlur={(e) => this.onHandleBlur(e)}
                       placeholder="User Name"/>
            </label>
        )
    }

    onHandleChange(event) {
        let value = event.target.value;
        this.setState({
            userName: value
        });
        //After Blur change error text
        if (this.state.isBlur) {
            this.passDataToParentComponent(value);
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
        this.setState({
            isBlur: true
        });
        this.passDataToParentComponent(value);
    }

}

export default NameValidation