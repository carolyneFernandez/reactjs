import React from 'react';
import './App.css';
import Home from '../../pages/home/home.js';
import Profile from '../../pages/Profile/Profile.js';

import Post from '../../pages/post/post.js';
import BestPosts from '../../pages/BestPosts/BestPosts.js';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import About from '../../pages/about/about';
import AppHeader from '../AppHeader/AppHeader.js';
class App extends React.Component{
  render(){
    return (

      <Router>
        <AppHeader/>
        <div className="App">
             {/**    <Home/> llamar a nuestra pagina */}

          <Switch> 
            <Route path='/' component={Home} exact />   {/** enrutamiento de paginas*/}
            <Route path='/about' component={About} exact />   {/** enrutamiento de paginas*/}
            <Route path="/post/:id" component={Post} exact/>best-posts
            <Route path='/best-posts' component={BestPosts} exact /> 
            <Route path='/profile' component={Profile} exact /> 

          </Switch>
        </div>
      </Router>
      
    );
  }
  
}

export default App;
