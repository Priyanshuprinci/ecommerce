import Axios from 'axios';
import { signInWithPopup } from 'firebase/auth';
import Cookies from 'js-cookie';
import React, { useState } from 'react';
import '../SigninModal.css';
import '../SignupModal.css';
import { SERVER_ACCESS_URL } from '../constant';
import { myAuth, myProvider } from '../firebase';
import google_logo from "../google_logo.png";
function SigninModal({ show, onClose }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async(e) => {
        e.preventDefault();
        // Add your login logic here
        // console.log("Email:", email);
        // console.log("Password:", password);
        const user={
            email:email,
            password:password
        }
        try{
            
            const response=await Axios.post(`${SERVER_ACCESS_URL}/signin`,user)
            const token=response.data.token
            Cookies.set('token',token,{expires:1})
            alert('User Signin Successfully')
            // console.log('User Signin Successfully')
            
        }catch(error){
            alert("Invalid email and password")
            console.log("Invalid email and password",error)
        }
        // Reset the form fields
        setEmail('');
        setPassword('');
        // Close the modal
        onClose();
    };
    const onSignIn = (googleUser) => {
        // The ID token you need to pass to your backend:
        var id_token = googleUser.getAuthResponse().id_token;
        // Send this token to the server or perform any other action
        console.log(id_token);
    };
    function login() {
        signInWithPopup(myAuth, myProvider)
            .then(function () {
                let username = myAuth.currentUser.displayName
                let email = myAuth.currentUser.email
                console.log(username, email)
            })
            .catch(function (error) {
                console.log(error)
            })
    }

    return (
        <div className="modal" id="signinModal" tabIndex="-1" role="dialog" style={{ display: show ? 'block' : 'none' }}>
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Signin</h5>
                        <button type="button" className="close" onClick={onClose}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={handleLogin}>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" className="form-control" id="signinEmail" value={email} onChange={(e) => setEmail(e.target.value)} required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                            </div><br></br>
                            <button style={{ width: "100%" }} type="submit" className="btn btn-primary">Sign In</button>
                        </form>
                        <p>Don't have an account? <a href="#">Sign Up</a></p>
                        {/* <div className="g-signin2" data-onsuccess="onSignIn"></div> */}
                        <button id="google-signin-btn" onClick={login} >
                            <img src={google_logo} alt="Google Logo" className="google-logo"/>
                                Sign in with Google
                        </button>

                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={onClose}>Close</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SigninModal;
