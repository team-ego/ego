import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER
} from './types';


export const loginUser = () => {
  return (dispatch) => {
    // console.log("pressed")
    dispatch({ type: LOGIN_USER });
    const provider = new firebase.auth.TwitterAuthProvider();
    firebase.auth().useDeviceLanguage();
    //
    console.log(provider)
    // firebase.auth().signInWithRedirect(provider).then(function(result) {
    //   // This gives you a the Twitter OAuth 1.0 Access Token and Secret.
    //   // You can use these server side with your app's credentials to access the Twitter API.
    //   const token = result.credential.accessToken;
    //   const secret = result.credential.secret;
    //   // The signed-in user info.
    //   const user = result.user;
    //   console.log(result)
    //   // dispatch(loginUserSuccess(user));
    // }).catch(function(error) {
    //   console.log(error);
    //
    //   // Handle Errors here.
    //   const errorCode = error.code;
    //   const errorMessage = error.message;
    //   // The email of the user's account used.
    //   const email = error.email;
    //   // The firebase.auth.AuthCredential type that was used.
    //   const credential = error.credential;
    //
    //   dispatch({ type: LOGIN_USER_FAIL });
    // });
  };
};

const loginUserSuccess = (user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  });

  Actions.main();
};
