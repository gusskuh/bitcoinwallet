import React, { Component } from "react";
import logo from "./logo.svg";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch,
  Redirect
} from "react-router-dom";

import { connect } from "react-redux";

import "./App.css";
import ContactPage from "./ContactPage";
import HomePage from "./HomePage";
import ContactDetails from "./ContactDetails";
import ContactEdit from "./ContactEdit";
import LoginPage from "./LoginPage";
import UserTransactions from "./UserTransactions";

class App extends Component {
  constructor(props) {
    super(props);
    // const loggedIn = this.props.loggedIn
  }
  render() {
    // console.log("this props!!", this.props);
    return (
      <div className="App">
        <Router>
          <div>
            <header className="App-header">
              <NavLink
                exact
                to="/"
                className="header-tab"
                activeClassName="selected"
              >
                🏠
              </NavLink>
              |
              <NavLink
                exact
                to="/contactPage"
                className="header-tab"
                activeClassName="selected"
              >
                👫
              </NavLink>{" "}
              |
              <NavLink
                exact
                to="/Transactions"
                className="transactions"
                activeClassName="selected"
              >
                💸
              </NavLink>
            </header>

            <Switch>
              <Route
                path="/Transactions"
                render={() =>
                  this.props.user ? (
                    <UserTransactions />
                  ) : (
                    <Redirect to="/loginPage" />
                  )
                }
              />
              <Route path="/contact/edit/:id?" component={ContactEdit} />
              <Route path="/contactDetails/:id" component={ContactDetails} />
              <Route
                path="/contactPage"
                render={() =>
                  this.props.user ? (
                    <ContactPage />
                  ) : (
                    <Redirect to="/loginPage" />
                  )
                }
              />
              <Route path="/loginPage" component={LoginPage} />
              <Route
                path="/"
                render={() =>
                  this.props.user ? <HomePage /> : <Redirect to="/loginPage" />
                }
              />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.userReducer.user
  };
};

export default connect(mapStateToProps)(App);
