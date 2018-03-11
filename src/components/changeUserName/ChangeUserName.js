import React from 'react';
import {connect} from 'react-redux';
import {setUserName} from '../../store/actions/userActions'

class ChangeUserName extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: this.props.userName,
        };
        this.onChange = this.onHandleChange.bind(this);
    }

    onHandleChange(event) {
        console.log('event.target.value');
        this.setState({
            userName: event.target.value
        });

    }

    changeUserNameFunction(newName) {
        this.props.setName(newName);
    }

    render() {
        return (
            <div>
                <form>
                    <label>Input new User Name
                        <input name="userName"
                               placeholder="Input new user name"
                               type="text"
                               onChange={this.onChange}
                               value={this.state.userName}/>
                    </label>
                    <button type="submit"
                            onClick={() => this.changeUserNameFunction(this.state.userName)}>
                        Change user name
                    </button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        setName: (name) => {
            dispatch(setUserName(name))
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(ChangeUserName);