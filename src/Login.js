import React, { useState } from 'react';
import './Login.css';
import fb from './images/5 Ways to Get More Likes on Facebook - AddThis.png'
import { Button } from '@material-ui/core';
import {auth, provider} from './firebase'
import { actionTypes } from './reducer';
import { useStateValue } from './StateProvider';

const Login = () => {
const [state , dispatch] = useStateValue()

    const signIn = () => {
        auth
        .signInWithPopup(provider)
        .then((result) => dispatch({
            type: actionTypes.SET_USER,
            user: result.user,
        })
        )
        .catch((err) => {
            alert(err.message);
        })
        
    }
    return (
        <div className="login">
            <div className="login_logo">
                <img src={fb} alt=""/>
                <img src={fb} alt=""/>
            </div>
            <Button type='submit' onClick={signIn}>Sign In</Button>
        </div>
    );
};

export default Login;