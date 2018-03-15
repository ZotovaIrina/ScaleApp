import NavigationBar from './components/navigationBar/NavigationBar'
import MainPage from './pages/mainPage/MainPage';
import Weight from './pages/weight/Weight';
import LoginPage from './pages/loginPage/LoginPage';

const routes = [
    { path: '/',
        exact: true,
        navigationBar: NavigationBar,
        main: MainPage
    },
    { path: '/login',
        main: LoginPage
    },
    { path: '/weight',
        exact: true,
        navigationBar: NavigationBar,
        main: Weight
    }
];


export default routes;