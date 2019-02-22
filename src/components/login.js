import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import dashboard from './dashboard';
import axios from 'axios';


class login extends Component {
    state= {
        email:'',
        password:''
    }
 submit = (event) =>{
        event.preventDefault();
        this.props.submit(this.state.email, this.state.password);

        
    }
    
    signInChangeHandler = (event) =>{
        const name = event.target.name;
        const value = event.target.value;
        this.setState(
            {
                [name]:value
            }
        );
    }
    
    
        
    
  render() {

      let links = null;
    if (!this.props.loggedInUser) {
        links =(
        <React.Fragment>
        
        <Link to="/dashboard">Dashboard</Link>
        
        </React.Fragment>
        )
    }
        return (
            
            <div>
            <form className="container" onSubmit={this.submit}>

            
            <div className="form-row">
            <div className="form-group col-md-6">
                <label for="inputEmail4">Email</label>
                <input name="email" type="email" value={this.state.email} onChange={this.signInChangeHandler} className="form-control" id="inputEmail4" placeholder="Email" />
            </div>
            <div className="form-group col-md-6">
                <label for="inputPassword4">Password</label>
                <input name="password" type="password" value={this.state.password} onChange={this.signInChangeHandler}  className="form-control" id="inputPassword4" placeholder="Password" />
            </div>
        </div>
                        <button type="submit" className="btn btn-primary" >Log In</button>
             
             </form>
             
             </div>
             
        );
    }
}

export default login;