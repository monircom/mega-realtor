import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateUser = (fullName, photoURL) => {
        console.log("Full Name", fullName, photoURL);
        setLoading(true);        
        return updateProfile(auth.currentUser, {
            displayName: fullName, photoURL: photoURL
          })
    }

    const signInUser = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

// Google Login

    const googleLogin = () =>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider)

    }
// github Login
    const githubLogin = () =>{
        setLoading(true);
        return signInWithPopup(auth, githubProvider)

    }

    const logOut = () =>{
        setLoading(true);
        setUser(null);
       return signOut(auth);
    }

    useEffect(() =>{
    const unSubscribe  =  onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            setLoading(false);
           // console.log("Observing",currentUser)
        });
        return () => {
            unSubscribe();
        }

    },[])

    
    const authInfo = { 
        user, 
        loading,
        createUser, 
        updateUser, 
        signInUser,
        googleLogin,
        githubLogin,
        logOut
    };
    return (
        <AuthContext.Provider  value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
}

export default AuthProvider;