import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import './App.css';
import Nav from "./components/Nav";
import Header from "./components/Header"
import Books from "./pages/Books"
import Saved from "./pages/Saved"



function App() {
  return (
    <div>
    <Nav />
    <Header />
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Books} />
          <Route exact path="/books" component={Books} />
          <Route exact path="/saved" component={Saved} />
          {/* <Route component={NoMatch} /> } */}
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
