
import Axios from 'axios';
import { signInWithPopup } from 'firebase/auth';
import React, { useState } from 'react';
import '../SigninModal.css';
import '../SignupModal.css';
import { SERVER_ACCESS_URL } from '../constant';
import { myAuth, myProvider } from '../firebase';
import google_logo from "../google_logo.png";
function SignupModal({ show, onClose }) {
    const [email, setEmail] = useState('');
    const [createPassword, setCreatePassword] = useState('');
    const [confirmPassword,setConfirmPassword]=useState('');
    // const [showSigninModal, setShowSigninModal] = useState(false);
    // const [showSignupModal, setShowSignupModal] = useState(false);
    const handleSignup = (e) => {
        e.preventDefault();
        // Add your login logic here
        // console.log("Email:", email);
        // console.log("Password:", createPassword);
        // console.log('Confirm Passward',confirmPassword)
        const newUser={
            email:email,
            password:confirmPassword
        }
        try{
            Axios.post(`${SERVER_ACCESS_URL}/signup`,newUser)
            alert('Signup Successfully ')
        }catch(error){
            alert('error in signup')
        }
        // Reset the form fields
        setEmail('');
        setCreatePassword('');
        setConfirmPassword('')
        // Close the modal
        onClose();
    };
    const onSignIn = (googleUser) => {
        // The ID token you need to pass to your backend:
        var id_token = googleUser.getAuthResponse().id_token;
        // Send this token to the server or perform any other action
        console.log(id_token);
    };
    function Signup() {
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
    // function toggle(){
    //     // setShowSigninModal(true)
    //     setShowSignupModal(false)
    // }

    return (
        <div className="modal" tabIndex="-1" role="dialog" style={{ display: show ? 'block' : 'none' }}>
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Signup</h5>
                        <button type="button" className="close" onClick={onClose}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={handleSignup}>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" className="form-control" id="signUpEmail" value={email} onChange={(e) => setEmail(e.target.value)} required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="Password">Create Password</label>
                                <input type="password" className="form-control" id="createPassword" value={createPassword} onChange={(e) => setCreatePassword(e.target.value)} required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="Password">Confirm Password</label>
                                <input type="password" className="form-control" id="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                            </div>
                            <br></br>
                            <button style={{ width: "100%" }} type="submit" className="btn btn-primary">Signup</button>
                        </form>
                        <span>
                        <p>Already have an account ?<a href="#">Sign in</a></p>
                        </span>
                        <button id="google-signin-btn" onClick={Signup} >
                            <img src={google_logo} alt="Google Logo" className="google-logo"/>
                                Sign in with Google
                        </button>

                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={onClose}>Close</button>
                    </div>
                </div>
            </div>
            {/* <SigninModal show={showSigninModal} onClose={() => setShowSigninModal(false)} /> */}
            {/* <SignupModal show={showSignupModal} onClose={() => setShowSignupModal(false)} /> */}
        </div>
    );
}

export default SignupModal;
