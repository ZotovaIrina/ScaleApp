import React from 'react';

class NameValidation extends React.Component {

    constructor(param) {
        super(param);
        this.state = {
            userName: this.props.userName ? '' : this.props.userName,
            errorMessage: '',
            isDisabled: false,
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
                       className={this.state.errorMessage ? "col form-control border-danger" : "col form-control"}
                       value={this.state.userName}
                       onChange={this.state.onChange}
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
        console.log('userNameIsValid', value);
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
        if (this.userNameIsValid(event.target.value).errorMessage) {
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

    // TODO: All text in App should be taken from JSON
    errorUserNameShort = 'Username should contain no less than 3 symbols';
    errorUserNameIsRequired = 'User Name is Required';


}

export default NameValidation