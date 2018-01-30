import React from 'react';
import {
    Route
} from 'react-router-dom';

import mainPage from './pages/mainPage/mainPage'
import Weight from './pages/weight/weight'

class Routes extends React.Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={mainPage}></Route>
                <Route exact path="/weight" component={Weight}></Route>
            </div>
        )
    }
}


export default Routes;