import React from 'react';
import './Login.css';
import { Button } from "@material-ui/core";
import { auth, provider } from "./firebase";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";

const Login = () => {
  const [{}, dispatch] = useStateValue();

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
  };

  return (
    <div className="login">
      <div className="login__logo">
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/120px-Facebook_f_logo_%282019%29.svg.png"
          alt=""
        />
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Facebook_Logo_%282019%29.svg/800px-Facebook_Logo_%282019%29.svg.png" 
          alt=""
        />
      </div>      
      <Button onClick={signIn}>
        Sign in
      </Button>
    </div>
  )
}

export default Login
