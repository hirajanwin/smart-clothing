import './App.css';
import HomePage from './pages/homepage/homepage.component'

import React from 'react'
import {Switch, Route} from 'react-router-dom'

import ShopPage from './pages/shop/shop.component'

import Header from './components/header/header.component'

import SignInSignUp from './pages/sign-in-sign-up/sign-in-sign-up.component'

import {auth} from '../src/firebase/firebase.util'

class App  extends React.Component {
  constructor(){
    super();

    this.state = {
      currentUser : null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount(){

    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser : user})

      console.log(user.displayName);
    })

  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }


  render(){
    return (
      <div >
        <Header currentUser={this.state.currentUser}/>
        <Switch>
        <Route exact path='/' component={HomePage}></Route> 
        <Route path='/shop' component={ShopPage}></Route> 
        <Route path='/signin' component={SignInSignUp}></Route>
        </Switch>   
      </div>
    );

  }
   

 
}

export default App;
