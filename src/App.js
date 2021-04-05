import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/header";
import Home from "./components/home";
import Blog from "./components/blog";
import Favorites from "./components/favorites";
import Emptystate from "./components/emptyState";

function App() {
  
  return (
    <Fragment>
      <Header />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/blog">
            <Blog />
          </Route>
          <Route exact path="/favorites" component={Favorites} />
          <Route exact path="/empty" component={Emptystate} />
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
