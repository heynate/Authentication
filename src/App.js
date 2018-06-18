import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './Components/Common';
import LoginForm from './Components/LoginForm';

class App extends Component{

  // automatically invoked
  componentWillMount(){
    firebase.initializeApp({
      apiKey: 'AIzaSyCH6_LHSuOqJ3xiXGQyONP7imCX_gAkjII',
      authDomain: 'authentication-d9a63.firebaseapp.com',
      databaseURL: 'https://authentication-d9a63.firebaseio.com',
      projectId: 'authentication-d9a63',
      storageBucket: 'authentication-d9a63.appspot.com',
      messagingSenderId: '1029660134629'
    });
  }

  render(){
    return(
      <View>
        <Header headerText= "Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
