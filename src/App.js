import React from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import {
    connect
} from 'react-redux';

import {
    setDefaultUserName,
} from './store/actions/userActions';
import routes from './routes'

class App extends React.Component {
    constructor(params) {
        super(params);
        this.props.setDefaultUserName();
    }

    render() {
        return (

            <Router>
                <div className="container">
                    <div className="Navigation-bar">
                    {routes.map((route, index) => (
                        // You can render a <Route> in as many places
                        // as you want in your app. It will render along
                        // with any other <Route>s that also match the URL.
                        // So, a sidebar or breadcrumbs or anything else
                        // that requires you to render multiple things
                        // in multiple places at the same URL is nothing
                        // more than multiple <Route>s.
                        <Route
                            key={index}
                            path={route.path}
                            exact={route.exact}
                            component={route.navigationBar}
                        />
                    ))}
                    </div>
                    <div className="main-container">
                        {routes.map((route, index) => (
                            <Route
                                key={index}
                                path={route.path}
                                exact={route.exact}
                                component={route.main}
                            />
                        ))}
                    </div>
                </div>
            </Router>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        isUserLoggedIn: state.user.eventData.isUserLoggedIn
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        setDefaultUserName: () => {
            dispatch(setDefaultUserName())
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(App);