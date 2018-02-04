import React from 'react';

class ChangeUserName extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <form>
                    <label>Input new User Name
                        <input name="userName"
                               placeholder="Input new user name"
                               type="text"
                               value={this.props.userName}/>
                    </label>
                    <button type="submit" onClick={() => this.props.changeUserName()}>Change user name</button>
                </form>
            </div>
        )
    }
}

export default ChangeUserName;