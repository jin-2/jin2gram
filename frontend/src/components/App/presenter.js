import React from "react";
import { Route, Switch } from "react-router-dom";
import PropTypes from "prop-types";
import "./styles.scss";
import Footer from "../Footer";
import Auth from "../Auth";
import Navigation from "../Navigation";
import Feed from "../Feed";
import Explore from "../Explore";

const App = props => [
  props.isLoggedIn ? <Navigation key={1} /> : null,
  props.isLoggedIn ? <PrivateRoutes key={2} /> : <PubulicRoutes key={2} />,
  <Footer key={3} />
];

const PrivateRoutes = () => (
  <Switch>
    <Route exact path="/" component={Feed} />
    <Route path="/explore" component={Explore} />
    <Route path="/search/:searchTerm" render={() => "search page"} />
  </Switch>
);

const PubulicRoutes = () => (
  <Switch>
    <Route exact path="/" component={Auth} />
    <Route path="/forgot" render={() => "forgot"} />
  </Switch>
);

App.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
};

export default App;
