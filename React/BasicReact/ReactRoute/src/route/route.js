import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Signup from '../Signup/Signup.js';
import SignIn from '../Signin/Signin';
import CreatePikka from '../CreatePikka/CreatePikka.js';
import SearchBar from '../SearchBar/SearchBar'

export default class route extends Component {
    render() {
        return (
            <>
              <Route exact path='/' component={SearchBar}></Route>
              <Route exact path='/signup' component={Signup}></Route>
              <Route exact path='/sign_in' component={SignIn}></Route>
              <Route exact path='/create' component={CreatePikka}></Route>
            </>
        )
    }
}
