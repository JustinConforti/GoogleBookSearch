import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import './App.css';
import Nav from "./components/Nav";
import Header from "./components/Header"
import Books from "./pages/Books"



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
          {/* <Route exact path="/books/:id" component={Detail} />
          <Route component={NoMatch} /> */}
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
