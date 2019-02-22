import React, { Component } from 'react';
import axios from 'axios';
class signup extends Component {

    state={
        firstName:'',
        lastname:'',
        email:'',
        alias:'',
        password:''
    }
    signupSubmitHandler = (event) => {
        event.preventDefault();
        const user ={
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            alias: this.state.alias,
            password: this.state.password
        }
        console.log(user)
        axios.post('http://localhost:8080/signup', user).then(
            (response) => {
                

            }
        )
    }
    signUpChangeHandler = (event) =>{
     const name = event.target.name;
     const value = event.target.value;
     this.setState(
         {
             [name]:value
         }
         
     )
 }
    render() {
        return (
            <div>
                <form className="container" onSubmit={this.signupSubmitHandler}>
            <div className="form-row">
                    <div className="form-group col-md-6">
                        <label for="firstName">First Name</label>
                        <input name="firstName" type="text" value={this.state.firstName} onChange={this.signUpChangeHandler} className="form-control" id="firstName" placeholder="First Name" />
                    </div>
                    <div className="form-group col-md-6">
                         <label for="lastName">Last Name</label>
                        <input name="lastName" type="text" value={this.state.lastName} onChange={this.signUpChangeHandler} className="form-control" id="lastName" placeholder="Last Name" />
                    </div>
                    <div className="form-group col-md-6">
                         <label for="alias">Alias</label>
                        <input name="alias" type="text" value={this.state.alias} onChange={this.signUpChangeHandler} className="form-control" id="alias" placeholder="Alias" />
                    </div>
                    
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label for="inputEmail4">Email</label>
                        <input name="email" type="email" value={this.state.email} onChange={this.signUpChangeHandler} className="form-control" id="inputEmail4" placeholder="Email" />
                    </div>
                    <div className="form-group col-md-6">
                        <label for="inputPassword4">Password</label>
                        <input name="password" type="password" value={this.state.password} onChange={this.signUpChangeHandler}name="password" className="form-control" id="inputPassword4" placeholder="Password" />
                    </div>
                </div>
                 

                <button type="submit" className="btn btn-primary" >Sign Up</button>
        
            </form>
    
            </div>
        );
    }
}

export default signup;