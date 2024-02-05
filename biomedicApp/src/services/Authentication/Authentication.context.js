import React, {createContext, useState, useRef} from "react";

import { LoginRequest } from "./Authentication.service";

import { 
    // onAuthStateChanged, 
    GoogleAuthProvider,
    // signInWithRedirect,
    signInWithPopup,
    // getRedirectResult,
    createUserWithEmailAndPassword,
    getAuth, 
    signOut} from "firebase/auth";


export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({children}) => {
    const [isLoading, setIsLoading ] = useState(false);
    const [ user, setUser ] = useState(null);
    const [ error, setError ] = useState(null);
    const auth = useRef(getAuth()).current;

    const provider = new GoogleAuthProvider();

    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    auth.useDeviceLanguage();

    // onAuthStateChanged(auth, (usr) => {
    //     if (usr) {
    //       setUser(usr);
    //       setIsLoading(false);
    //     } else {
    //       setIsLoading(false);
    //     }
    //   });

    const onLogin = (email, password) => {
        setTimeout(()=> {
            LoginRequest(auth,email, password).then((usr)=>{
                setUser(usr);
                setIsLoading(true);
            }).catch((e)=>{
                setIsLoading(false);
                setError(e.toString());
            })
        }, 2000);
        
    }
    const onRegister = (email, password, repeatedPassword) => {
        setIsLoading(true);
        if(password !== repeatedPassword){
            setError("Error: Passwords do not match");
            return;
        }
        createUserWithEmailAndPassword(auth,email, password)
        .then((u)=> {
            setUser(u);
            setIsLoading(false);
        })
        .catch((e) => {
            
            setIsLoading(false);
            setError(e.toString());
        });
    };

    const onGoogleRegister = () => {
        setIsLoading(true);
        signInWithPopup(auth, provider).then((result)=>{
            // const credential = GoogleAuthProvider.credentialFromResult(result);
            // const token = credential.accessToken;
    // The signed-in user info.
            const usr = result.user;
            console.log(usr);
            setUser(usr);
            setIsLoading(false);
        })

        .catch((e) => {
            // Handle Errors here.
            
            setIsLoading(false);
            setError(e.toString);
    
        });


    }

    const onLogOut = () => {
        setIsLoading(false);
        signOut(auth).then(()=>{
            setUser(null);
            setError(null)
        })
    }
    
    return(
        <AuthenticationContext.Provider
        value={{
           isAuthenticated: !!user,
           isLoading,
           user,
           error,
           onLogin,
           onRegister,
           onGoogleRegister,
           onLogOut,
           

        }}>
            {children}

        </AuthenticationContext.Provider>
    );
}