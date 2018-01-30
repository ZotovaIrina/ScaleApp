import React from 'react';
import {
    Link
} from 'react-router-dom';

class NavigationBar extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    <li> <Link to="/"> MainPage</Link></li>
                    <li> <Link to="/weight"> Weight </Link></li>
                </ul>
            </div>
        )
    }
}

export default NavigationBar;