import React, { createContext, useEffect, useState } from 'react';
import { app } from '../firebase.confic';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";


export const AuthContext = createContext(null)
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading,setLoading] =useState(true)

    // sing up user
    const createUser =(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const loginUser =(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const LogOut = ()=>{
        setLoading(true)
        return signOut(auth)
    }
 
    useEffect(()=>{
      const unSubscribe =  onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
            console.log(currentUser)
            setLoading(false)
        })

        return ()=>{
            unSubscribe()
        }
    })

    const authInfo = {
        user,
        createUser,
        loginUser,
        LogOut
    }
    return <AuthContext.Provider value={authInfo}>
       {children}
    </AuthContext.Provider>
};

export default AuthProvider;