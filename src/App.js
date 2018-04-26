import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';




class App extends Component {
  componentWillMount() {
    // Initialize Firebase
    const config = {
      apiKey: "AIzaSyCj8pTsGDIoPgGbhnkuIhlo2ovfVqcU7nA",
      authDomain: "ego-twitter.firebaseapp.com",
      databaseURL: "https://ego-twitter.firebaseio.com",
      projectId: "ego-twitter",
      storageBucket: "ego-twitter.appspot.com",
      messagingSenderId: "905460099851"
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));


    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
