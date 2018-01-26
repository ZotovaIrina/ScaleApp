import React from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import NavigationBar from './NavigationBar/NavigationBar.js'
import mainPage from './pages/mainPage/mainPage'
import Weight from './pages/weight/weight'

const createRoutes = () => (
        <Router>
            <div>
                <NavigationBar></NavigationBar>
                <Route exact path="/" component={mainPage}></Route>
                <Route exact path="/weight" component={Weight}></Route>
            </div>
        </Router>
    )
    ;

export default createRoutes;