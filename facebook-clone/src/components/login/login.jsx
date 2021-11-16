import { Button } from '@material-ui/core';
import React from 'react';
import './login.scss';
import {auth,provider} from '../../jses/Firebase';
import firebase from '../../jses/Firebase';
import { actionTypes } from '../../jses/Reducer';
import { useStateValue } from '../../jses/StateProvider';

const Login = () => {

    const [state, dispatch]= useStateValue();

    const signIn = () => {
        auth
            .signInWithPopup(provider)
            .then((result) => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                })
            })
            .catch((error) => alert(error.message));
        // const googleProvider = new firebase.auth.GoogleAuthProvider();
        // firebase.auth().signInWithPopup(googleProvider)
        // .then((re) => {
        //     console.log(re);
        // })
        // .catch((err) => {
        //     console.log(err);
        // })
    }

    return (
        <div className="login">
            <div className="login__logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1024px-Facebook_f_logo_%282019%29.svg.png" alt="" />
                <img src="https://download.logo.wine/logo/Facebook/Facebook-Logo.wine.png" alt="" />
            </div>
            <Button type="submit" onClick={signIn}>
                Sign In
            </Button>
        </div>
    )
}

export default Login
