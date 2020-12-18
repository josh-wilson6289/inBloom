import React from 'react';
import ReactDOM from 'react-dom';
import { GoogleLogin } from 'react-google-login';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
// import { refreshTokenSetup } from '../utils/refreshToken';

const clientId = "21199057526-pc5p89vu1fos35ufcd9m597mmd84aq88.apps.googleusercontent.com";


function Login() {
    const onSuccess = (res) => {
        console.log("[Login Success] currentUser:", res.profileObj)
        let userEmail = res.profileObj.email;
        
    };

    const onFailure = (res) => {
        console.log("[Login failed] res: ", res);
        alert("invalid user");
    };

    return (
        <div>
            {/* the login button */}
            <GoogleLogin 
                clientId={clientId}
                buttonText="Login"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={"single_host_origin"}
                isSignedIn={true}
            />
        </div>
    );
}

export default Login;