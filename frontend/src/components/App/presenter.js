import React from "react";
import { Route, Switch } from 'react-router-dom';
import styles from "./styles.scss";
import Footer from '../Footer'

const App = props => [
    props.isLoggedIn ? <PrivateRoutes key={2} /> : <PubulicRoutes key={2} />,
    <Footer key={3} />
];

const PrivateRoutes = () => (
    <Switch>
        <Route exact path="/" render={() => "feed"} />
        <Route path="/explore" render={() => "explore"} />
    </Switch>
)

const PubulicRoutes = () => (
    <Switch>
        <Route exact path="/" render={() => "login"} />
        <Route path="/forgot" render={() => "forgot"} />
    </Switch>
)

export default App;
