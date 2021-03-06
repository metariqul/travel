import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import UserPlaces from './places/pages/UserPlaces';

import './App.css';
import Users from './user/pages/Users';
import NewPlace from './places/pages/NewPlace';
import MainNavigation from './shared/components/Navigation/MainNavigation'

const App = () => {
    return (
        <div className="App">

            <Router>
                <MainNavigation />
                <main>
                    <Switch>
                        <Route path="/" exact>
                            <Users />
                        </Route>
                        <Route path="/:userId/places" exact>
                            <UserPlaces />
                        </Route>
                        <Route path="/new/place" exact>
                            <NewPlace />
                        </Route>
                        <Redirect to="/" />
                    </Switch>
                </main>

            </Router>

        </div>
    );
}

export default App;
