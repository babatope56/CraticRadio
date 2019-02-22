import React, { Component } from 'react';
import './App.css';
import { Card, CardTitle, CardText, CardActions, CardMenu, Button, IconButton, Textfield, Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Landingpage from './components/landingpage';
//import signup from './components/landingpage';
//import Login from './components/login';
import { Link } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      
      <div className="whole-app-background">
    <Layout>
        <Header className="header-color" title="Cratic Radio" scroll>
            <Navigation>
            
            </Navigation>
        </Header>
        <Drawer title="Title">
            <Navigation>
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            
            <Landingpage/>
        </Content>
    </Layout>
    
</div>
    );
  }
}

export default App;
