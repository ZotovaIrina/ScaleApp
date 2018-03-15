import React from 'react';
import './index.css';
import {
    Link
} from 'react-router-dom';

class NavigationBar extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    <li> <Link to="/" className="navigation-bar__item"> MainPage</Link></li>
                    <li> <Link to="/weight" className="navigation-bar__item"> Weight </Link></li>
                </ul>
            </div>
        )
    }
}

export default NavigationBar;