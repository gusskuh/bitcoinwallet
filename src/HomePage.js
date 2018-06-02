import React, { Component } from "react";
import { connect } from "react-redux";

class HomePage extends Component {
  componentWillUnmount() {}
  componentDidMount() {
    this.renderGraph();
    this.renderChart1();
  }

  renderGraph = () => {
    var baseUrl = "https://widgets.cryptocompare.com/";
    var scripts = document.getElementsByTagName("script");
    var embedder = scripts[scripts.length - 1];

    var appName = encodeURIComponent(window.location.hostname);
    if (appName == "") {
      appName = "local";
    }
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.async = true;
    s.id = "popo";
    var theUrl = baseUrl + "serve/v1/coin/chart?fsym=BTC&tsym=USD";

    s.src = theUrl + (theUrl.indexOf("?") >= 0 ? "&" : "?") + "app=" + appName;

    var node = document.querySelector("#popo");
    var body = document.querySelector(".homeP");
    if (node) {
      return;
    } else body.appendChild(s);
  };

  renderChart1 = () => {
    var baseUrl = "https://widgets.cryptocompare.com/";
    var scripts = document.getElementsByTagName("script");
    var embedder = scripts[scripts.length - 1];

    var appName = encodeURIComponent(window.location.hostname);
    if (appName == "") {
      appName = "local";
    }
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.async = true;
    var theUrl = baseUrl + "serve/v1/coin/tiles?fsym=BTC&tsyms=USD,EUR,CNY,GBP";
    s.src = theUrl + (theUrl.indexOf("?") >= 0 ? "&" : "?") + "app=" + appName;
    embedder.parentNode.appendChild(s);
    var node = document.querySelector("#popo3");
    var body = document.querySelector(".homeP");
    if (node) {
      return;
    } else body.appendChild(s);
  };
  render() {
    return (
      <div className="homeP">
        <div className="headlines">
          <h3>Hi {this.props.user.name}</h3>
          <h2> Currnet Balance: ₿{this.props.user.balance}</h2>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.userReducer.user
  };
};

export default connect(mapStateToProps)(HomePage);
