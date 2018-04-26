import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { loginUser } from '../actions';
import { Card, CardSection, Input, Button, Spinner } from '../components/UI';

class Login extends Component {

  componentDidMount(){

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
