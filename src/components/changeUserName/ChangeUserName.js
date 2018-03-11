import React from 'react';
import {connect} from 'react-redux';
import {
    setUserName,
    setAndSaveUserName,
    setNameValidationError,
    setShowUserNameError,
} from '../../store/actions/userActions'

import NameValidation from '../../components/nameValidation'

class ChangeUserName extends React.Component {

    changeUserNameFunction(newName) {
        this.props.setAndSaveUserName(newName);
    }

    render() {
        return (
            <div>
                <form className="form-group"
                      onSubmit={() => this.changeUserNameFunction(this.props.userName)}>
                    <label  className="row">
                        <span className="col">Input new User Name</span>
                        <NameValidation userName={this.props.userName}
                                        nameError={this.props.nameError}
                                        setUserName={this.props.setUserName}
                                        setError={this.props.setNameValidationError}
                                        setShowUserNameError={this.props.setShowUserNameError}
                                        showUserNameError={this.props.showUserNameError}/>
                    </label>
                    <span className="text-danger">{this.props.showUserNameError ? this.props.nameError : ''}</span>
                    <button type="submit"
                            disabled={this.props.nameError || !this.props.userName}
                            className={this.props.nameError || !this.props.userName ? ' btn col btn-secondary' : 'btn col btn-primary'}>
                        Change user name
                    </button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userName: state.user.userName || '',
        nameError: state.user.nameError || '',
        showUserNameError: state.user.eventData.showUserNameError || false,
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        setUserName: (name) => {
            dispatch(setUserName(name))
        },
        setAndSaveUserName: (name) => {
            dispatch(setAndSaveUserName(name))
        },
        setNameValidationError: (nameError) => {
            dispatch(setNameValidationError(nameError))
        },
        setShowUserNameError: (value) => {
            dispatch(setShowUserNameError(value))
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(ChangeUserName);