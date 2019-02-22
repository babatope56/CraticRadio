import React, { Component } from 'react';
import {Cell, Grid} from 'react-mdl';
import img from './CraticRadio.png';
import { Card, CardTitle, CardText, CardActions, CardMenu, Button, IconButton, Textfield, Navigation, Content, Drawer, Layout, Header } from 'react-mdl';
import Signup from './signup';
import{Route,withRouter} from 'react-router-dom';
import axios from 'axios';
import Dashboard from './dashboard';
import signup from './signup';
import Login from './login';
import { Link } from 'react-router-dom';

class landingpage extends Component {
    state ={
        loggedInUser:null
    }
    signOut = () => {
        this.setState(
            {
                loggedInUser:null
            }
        )
        this.props.history.push('/');
    }
    signInSubmitHandler = (email, password) => {
        const user = {
            email:email,
            password:password
        }
        axios.post('http://localhost:8080/login', user).then(
            (response) => {
                if(response.data){
                this.setState(
                    {
                        loggedInUser: response.data
                    }
                )
                this.props.history.push('/');
                }
            }
        )
    }
    render() {
        let routes = (
            <React.Fragment>
                
                <Route exath path='/dashboard' component={Dashboard}/>
                <Route exact path='/login' render = {(props) =>( <Login{...props} submit={this.signInSubmitHandler}/>)} />
                
            </React.Fragment>
        )
        if (this.state.loggedInUser) {
            routes = (
                <React.Fragment>
                    <Route exact path='/dashboard' render = {(props) =>(<Dashboard{...props} loggedInUser={this.state.loggedInUser}/>)} />
                    <Route exact path='/' render = {(props) =>( <Dashboard{...props} loggedInUser={this.state.loggedInUser}/>)} />
                </React.Fragment>
            )
        }
        return (
            <div>
               
  
                 <Route exact path='/signup' component = {signup} />
                         {routes}

                
                
                
            </div>

        );
    }
}

export default withRouter(landingpage);