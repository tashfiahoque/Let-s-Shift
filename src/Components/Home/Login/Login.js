import React, { useContext } from 'react';
import './Login.css';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { useHistory, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { UserContext } from '../../../App';

const Login = () => {
    const [user, setUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function (result) {
            const { displayName, email, photoURL } = result.user;
            const signedInUser = {
                signed: true,
                name: displayName,
                email: email,
                photo: photoURL,
                message: "Logged in successfully"
            }
            setUser(signedInUser);
            history.replace(from);
        }).catch(function (error) {
            const signedInUser = { message: error.message };
            setUser(signedInUser);
        });
    }
    return (
        <>
            <div className="google-button d-flex justify-content-center align-items-center">
                <FontAwesomeIcon icon={faGoogle} className="google-icon" color="red" size="2x" />
                <input type="submit" value="Continue with Google" id="signin_button" onClick={handleGoogleSignIn} />
                <h4 className="text-danger mt-5">{user.message}</h4>
            </div>

        </>
    );
};

export default Login;