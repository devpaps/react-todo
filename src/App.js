import React from "react";
import "./App.css";
import Todo from "./components/Todo";
import Navigation from "./components/Navigation";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
//import * as ROUTES from "./constants/routes";

function App() {
  return (
    <div className="w-full">
      <div>
        <Router>
          <Navigation />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

function Home() {
  return (
    <div className="w-full">
      <header className="App-header overlay darken text-white">
        <Todo />
      </header>
    </div>
  );
}
export default App;
