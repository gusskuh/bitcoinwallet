import React, { Component } from "react";
import contactService from "./service/ContactService";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { transferFunds } from "./store/actions";
import swal from "sweetalert";
// import "bulma/css/bulma.css";

class ContactDetails extends Component {
  state = {
    contact: [],
    move: {
      pic: "",
      to: "",
      amount: "",
      at: 0
    }
  };

  printProps() {
    console.log("id?????", this.props.match.params.id);
  }

  getContactById() {
    contactService.getContactById(this.props.match.params.id).then(contact => {
      this.setState({ contact });
      console.log(this.state.contact);
    });
  }

  setMoveAmount = e => {
    let amount = e.target.value;

    let move = {
      pic: this.state.contact.picture,
      to: this.state.contact.name,
      amount: amount,
      at: Date.now()
    };
    this.setState({ move });
  };

  transferFunds = () => {
    this.props.transferFunds(this.state.move, this.props.user);
    swal(
      "Good job!",
      `You sent money to ${this.state.contact.name} `,
      "success"
    );

    this.props.history.push("/contactPage");
  };

  componentDidMount() {
    this.printProps();
    this.getContactById();
  }

  render() {
    return (
      <div>
        <h1>Contact Details</h1>
        <img src={this.state.contact.picture} />
        <h3>{this.state.contact.name}</h3>
        <h3>{this.state.contact.email}</h3>
        <h3>{this.state.contact.phone}</h3>
        <Link to={`/contact/edit/${this.props.match.params.id}`}>
          <button>Edit</button>
        </Link>
        <h3>Transfer Currency to {this.state.contact.name}</h3>
        Amount: ₿<input
          type="number"
          className="control"
          onChange={this.setMoveAmount}
        />
        <form action="" onSubmit={this.transferFunds}>
          <button id="transfer">Transfer</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.userReducer.user
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      transferFunds
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactDetails);
