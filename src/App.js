import React from 'react';
import {
    BrowserRouter as Router
} from 'react-router-dom';
import Routes from './routes'
import NavigationBar from './NavigationBar/NavigationBar.js'

class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <NavigationBar></NavigationBar>
                    <Routes></Routes>
                </div>
            </Router>
        )
    }
}

export default App;