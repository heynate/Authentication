import React, { Component } from 'react';
import { Text } from 'react-native';
import { Button, Card, CardSection, Input } from './Common';
import firebase from 'firebase';

class LoginForm extends Component{
  state = {email: '' , password: '', error: '' };

  onButtonPress() {
    const {email, password } = this.state;
    this.setState({error: ''});
    firebase.auth().signInWithEmailAndPassword(email, password)
      .catch(() => {
        debugger;
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .catch(() => {
            this.setState({ error: 'Authentication Failed.'});
          });
      });
  }

  render() {
    return(
      <Card>
        <CardSection>
          <Input
            label = "Email:"
            placeholder = "user@gmail.com"
            value = {this.state.email}
            onChangeText = {email => this.setState({ email })}
          />
        </CardSection>

        <CardSection>
          <Input
            label = "Password:"
            placeholder = "password"
            secureTextEntry = {true}
            value = {this.state.pasword}
            onChangeText = {password => this.setState({ password })}
          />
        </CardSection>

        <Text style= {styles.errorTextStyle}>
          {this.state.error}
        </Text>

        <CardSection>
          <Button onPress= {this.onButtonPress.bind(this)}>
            Log In
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};
export default LoginForm;
