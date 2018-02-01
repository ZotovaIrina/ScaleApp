import React, {Component} from 'react';
import {connect} from 'react-redux';


class MainPage extends Component {
    constructor() {
        super();
        this.state = {
            userName: 'New User'
        };
    }


    render() {
        return (
            console.log('this.props', this.props),
                <div>
                    <h1>Main Page</h1>
                    <p>Hello {this.state.userName}</p>
                    <p>Foo {this.props.user.name}</p>
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
            dispatch({
                type: 'SET_NAME',
                payload: name
            })
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(MainPage);