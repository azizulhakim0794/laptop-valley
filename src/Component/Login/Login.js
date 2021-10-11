import React, { useContext } from 'react';
import './Login.css'
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import googleImg from './../../image/google.png'
import firebaseConfig from './FirebaseConfig/FirebaseConfig'
import './Login.css'
import "firebase/auth";
import firebase from 'firebase/app';
import facebookImg from './../../image/facebook.png'
const Login = () => {
    const [userDataInfo, setUserDataInfo] = useContext(UserContext)
    const history = useHistory()
    const location = useLocation()
    let { from } = location.state || { from: { pathname: "/" } };
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig)
    }
    const singInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                /** @type {firebase.auth.OAuthCredential} */
                const user = result.user;
                const { displayName, email, uid } = user
                const newUserData = { ...userDataInfo }
                newUserData.isSignedIn = true
                newUserData.name = displayName
                newUserData.email = email
                newUserData.uid = uid
                setUserDataInfo(newUserData)
                    history.replace(from);
                // ...
            }).catch((error) => {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;
                // ...
                if (errorCode || errorMessage || email || credential) {
                    console.log(errorMessage, errorCode, email, credential);
                }
            });
    }
    const handleLogin = (e)=>{
        e.preventDefault()
    }
    return (
        <div className="container ">
            <nav className="navbar navbar-light bg-light text-uppercase">
                <span className="navbar-brand mb-0 h1">Laptop Valley</span>
            </nav>
            <br />
            <div className="card col-xl-5 col-sm-10 col-12 col-md-8 col-lg-5  m-auto pt-5 "> 
                <form className="p-4">
                <h5>Login</h5>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                    </div>
                    <br />
                    <div className="d-grid col-10 mx-auto">
                    <button type="submit" className="btn btn-dark" onClick={handleLogin}>Submit</button>
                    </div>
                </form>
                <br />
                <p className="text-center new-account text-primary">Create a new account</p>
            </div>
            <br /><br />
            <div className="card col-md-4 p-1 loginGoogle round-pill m-auto" onClick={singInWithGoogle}>
                <div>
                    <img src={googleImg} className="google text-start" alt="" /><span className="ms-3">Login With Google</span>
                </div>
            </div>
            <br />
            <div className="card col-md-4 p-1 loginGoogle round-pill m-auto" onClick={singInWithGoogle}>
                <div>
                    <img src={facebookImg} className="google text-start" alt="" /><span className="ms-3">Login With Google</span>
                </div>
            </div>
            <br /><br />
        </div>
    );
};

export default Login;