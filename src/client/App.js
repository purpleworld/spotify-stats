import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom';
import Login from './components/login/login';
import Main from './components/main/main';
import './public/sass/style.scss';

const App = () => {
    const [isAuthenticated, setIsAuthenticated] = useState();
    const [isLoaded, setIsLoaded] = useState(true);

    useEffect(() => {
        fetch('http://localhost:3000/api/is-authenticated')
            .then(response => response.json())
            .then(data => setIsAuthenticated(data.isAuthenticated));
    }, []);

    return (
        <React.Fragment>
            <Switch>
                <Route path="/login">
                    <Login />
                </Route>
                <Route exact path="/">
                    <Main />
                </Route>
            </Switch>
            {isAuthenticated ? <Redirect exact to="/" /> : <Redirect exact to="/login" />}
        </React.Fragment>
    );
};

export default App;
