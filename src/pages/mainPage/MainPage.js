import React, {Component} from 'react';
import {connect} from 'react-redux';
import {setName} from '../../store/actions/userActions'


class MainPage extends Component {

    render() {
        return (
                <div>
                    <h1>Main Page</h1>
                    <p>Hello {this.props.user.userName}</p>
                    <button onClick={() => {this.props.setName('Sofia')}}>Set Name Sofia</button>
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
            dispatch(setName(name))
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(MainPage);