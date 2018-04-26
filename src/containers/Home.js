import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';

class Home extends Component {

  componentDidMount(){

  }


  render() {
    return (
      <Text>Home</Text>
    );
  }
}

const styles = {

};

const mapStateToProps = ({ auth }) => {
  const { error, loading } = auth;

};

export default connect(mapStateToProps, null)(Home);
