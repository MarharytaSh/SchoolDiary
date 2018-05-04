import React, {Component} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import './Css/stylesApp.css';

//Компонеты используемые
import Login from './Components/Auth/Login';
import Dashboard from './Components/Dashboard/index';
import RegisterMain from './Components/Auth/RegisterMain';
import RegisterTeacher from './Components/Auth/RegisterTeacher';


const fakeAuth = {//установка true или false для открытия или закрытия доступа для приватных роутеров
    isAuthenticated: false,//если false то страницы приватных роутеров просматривать не можем
    authenticate(cb) {
        this.isAuthenticated = true;
        setTimeout(cb, 100); // fake async
    },
    signout(cb) {
        this.isAuthenticated = false;
        setTimeout(cb, 100);
    }
};

const PrivateRoute = ({ component: Component, ...rest}) => (
    <Route
        {...rest}
        render={props =>
            fakeAuth.isAuthenticated ? (
                <Component {...props} />
            ) : (
                <Redirect
                    to={{
                        pathname: "/login",
                        state: { from: props.location }
                    }}
                />
            )
        }
    />
);


class App extends Component {
    render() {
        const component = (
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/register" component={RegisterMain} />
                <Route path="/RegisterTeacher" component={RegisterTeacher} />
                <PrivateRoute exact path="/" component={Dashboard} />
                <PrivateRoute path="/dashboard/:id" component={Dashboard} />
            </Switch>
        );

        return (component);
    }
}

export default App;

