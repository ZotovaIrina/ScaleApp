import NavigationBar from './components/navigationBar/NavigationBar'
import MainPage from './pages/mainPage/MainPage';
import Weight from './pages/weight/Weight';
import LoginPage from './pages/loginPage/LoginPage';

const routes = [
    { path: '/',
        exact: true,
        authorization: true,
        navigationBar: NavigationBar,
        main: MainPage
    },
    { path: '/login',
        exact: true,
        authorization: false,
        main: LoginPage
    },
    { path: '/weight',
        exact: true,
        authorization: true,
        navigationBar: NavigationBar,
        main: Weight
    }
];


export default routes;