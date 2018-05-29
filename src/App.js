import React, { Component } from "react";
import logo from "./logo.svg";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from "react-router-dom";

import "./App.css";
import ContactPage from "./ContactPage";
import HomePage from "./HomePage"
import ContactDetails from "./ContactDetails";
import ContactEdit from "./ContactEdit";

class App extends Component {
  render() {
   
    return (
      <div className="App">
        <Router>
          <div>
          <header className="App-header">
            <NavLink exact to="/" className="header-tab" activeClassName="selected">Home Page</NavLink> | 
            <NavLink exact to="/contactPage" className="header-tab" activeClassName="selected">Contacts Page</NavLink>
          </header>
          <Switch>
            <Route path="/contact/edit/:id?" component={ContactEdit}></Route>
            <Route path="/contactDetails/:id" component={ContactDetails} />
            <Route path="/contactPage" component={ContactPage} />
            <Route path="/" component={HomePage} />
          </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
