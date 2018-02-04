import React, {Component} from 'react';
import {connect} from 'react-redux';
import {setName} from '../../store/actions/userActions'
import ChangeUserName from '../../components/changeUserName/ChangeUserName'


class MainPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            components: [],
            showChangeNameButton: true,
        };
    }

    changeUserName = <ChangeUserName key="ChangeUserName"
                                     userName={this.props.user.userName}/>;


    addNewComponent(newComponent) {
        this.setState({
            components: [...this.state.components, newComponent]
        });
    }

    onClickChangeUserName() {
        this.addNewComponent(this.changeUserName);
        this.setState({
            showChangeNameButton: false,
        });
    }

    render() {
        return (
            <div>
                <h1>Main Page</h1>
                <p>Hello {this.props.user.userName}</p>
                <button className={this.state.showChangeNameButton ? '' : 'd-none'}
                    onClick={() => this.onClickChangeUserName()}>
                    Change User Name
                </button>
                {this.state.components}
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