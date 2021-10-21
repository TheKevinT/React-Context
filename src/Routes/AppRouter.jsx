import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "../Components/Header";
import About from "../Pages/About";
import Home from "../Pages/Home";
import NotFound from "../Pages/NotFound";
const AppRouter = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/about" component={About} />
          <Route  path="/" component={NotFound} />
        </Switch>
      </Router>
    </>
  );
};

export default AppRouter;
