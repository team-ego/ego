import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { loginUser } from '../actions';
import { auth0, AUTH0_DOMAIN } from '../lib/auth0';
import { Card, CardSection, Input, Button, Spinner } from '../components/UI';

class Login extends Component {

  componentDidMount(){

  }

  loginWindow() {
    //Alert.alert('You tapped the button!');
    auth0
      .webAuth
      .authorize({scope: 'openid profile email', audience: `https://${AUTH0_DOMAIN}/userinfo`, useBrowser: true})
      .then(credentials => {
        console.log(credentials)
        Alert.alert('You tapped the button!');
        // Successfully authenticated
        // Store the accessToken
      })
      .catch(error => console.log(error));

  }


  onButtonPress() {
   this.props.loginUser();
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }

    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Login
      </Button>
    );
  }

  render() {
    return (
      <View>
        <CardSection>
          <Text>login page</Text>
        </CardSection>
        <CardSection>
          {this.renderButton()}
        </CardSection>
        <CardSection>
          <Button onPress={() => this.loginWindow()}>
            Logiin window
          </Button>
        </CardSection>
      </View>
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

const mapStateToProps = ({ auth }) => {
  const { error, loading } = auth;

  return { error, loading };
};

export default connect(mapStateToProps, { loginUser
})(Login);
