import React, {Component} from 'react';
import { bindActionCreators } from '../../../../AppData/Local/Microsoft/TypeScript/2.6/node_modules/redux';
import { connect } from 'react-redux';
import {signUp} from './store/actions';

class LoginPage extends Component {
    state = {
        user:{
            name:"",
            moves:[], 
            balance: 100,   
        }
    }

    updateUserName= (e) => {
        const val = e.target.value
        const userToSignUp = Object.assign(this.state.user, {name: val})
        this.setState({user:userToSignUp})
    }

    signUp = (e) => {
        e.preventDefault();
        this.props.signUp(this.state.user);
        this.props.history.push('/');
    }

    render() {
        return(
        <div> 
            <h1>Login Page</h1>
            <form action="" onSubmit={this.signUp}> 
                login <input type="text" id="name" onInput={this.updateUserName} placeholde="Enter Name"/>
                <button>Login</button>
            </form>
        </div> 
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        signUp
    }, dispatch)
}

export default connect (null, mapDispatchToProps)(LoginPage);