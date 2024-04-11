import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();

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
        return signInWithPopup(auth, googleProvider)

    }

    const logOut = () =>{
        setLoading(true);
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