import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Redirect
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

    loadPage = <div>Load...</div>;

    render() {
        return (
            <Router>
                {this.props.isDefaultDataReceived ? (
                    <div className="container">
                        <div className="navigation-bar">
                            {routes.map((route, index) => (
                                route.authorization ?
                                    (<PrivateRoute
                                        key={index}
                                        path={route.path}
                                        isUserLoggedIn={this.props.isUserLoggedIn}
                                        exact={route.exact}
                                        component={route.navigationBar}/>)
                                    :
                                (<Route
                                    key={index}
                                    path={route.path}
                                    exact={route.exact}
                                    component={route.navigationBar}/>)
                                ))}
                        </div>
                        <div className="main-container">
                            {routes.map((route, index) => (
                                route.authorization ?
                                    (<PrivateRoute
                                        key={index}
                                        path={route.path}
                                        isUserLoggedIn={this.props.isUserLoggedIn}
                                        exact={route.exact}
                                        component={route.main}/>)
                                    :
                                    (<Route
                                        key={index}
                                        path={route.path}
                                        exact={route.exact}
                                        component={route.main}/>)
                            ))}
                        </div>
                    </div>) : this.loadPage}
            </Router>
        )
    }
}

const PrivateRoute = ({component: Component, isUserLoggedIn, ...rest}) => (
    <Route
        {...rest}
        render={props =>
            isUserLoggedIn ? (
                <Component {...props} />
            ) : (
                <Redirect
                    to={{
                        pathname: "/login",
                        state: {from: props.location}
                    }}
                />
            )
        }
    />
);

const mapStateToProps = (state) => {
    return {
        isUserLoggedIn: state.user.eventData.isUserLoggedIn,
        isDefaultDataReceived: state.user.eventData.isDefaultDataReceived,
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