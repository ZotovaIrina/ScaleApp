import React from 'react';
import {
    BrowserRouter as Router
} from 'react-router-dom';
import {Provider} from 'react-redux'
import store from './store/store'
import Routes from './routes'
import NavigationBar from './components/navigationBar/NavigationBar.js'

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div className="container">
                        <NavigationBar></NavigationBar>
                        <Routes></Routes>
                    </div>
                </Router>
            </Provider>
        )
    }
}

export default App;