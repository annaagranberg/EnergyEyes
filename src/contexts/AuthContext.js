import React, { useContext, useState, useEffect } from 'react'
import { auth } from '../firebase'
import { db } from '../firebase'

const AuthContext = React.createContext()

export function useAuth(){
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {

    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)

    function signup(email, password){
        
        // db.collection("user_collection").doc(setCurrentUser.uid).set({
        //     email: {email},
        //     password: {password}
        // })
        // .then((docRef) => {
        //     console.log("Document written with ID: ", docRef.id);
        // })
        // .catch((error) => {
        //     console.error("Error adding document: ", error);
        // });

       return auth.createUserWithEmailAndPassword(email, password)
    }

    function login(email,password){
        return auth.signInWithEmailAndPassword(email,password)
    }

    function logout(){
        return auth.signOut()
    }

    function resetPassword(email){
        return auth.sendPasswordResetEmail(email)
    }

    function updateEmail(email){
        return currentUser.updateEmail(email)
    }

    function updatePassword(password){
        return currentUser.updatePassword(password)
    }

    //Update name
    async function updateName(first, last){
        try {
            await db.collection("user_collection").doc(currentUser.uid).set({
                name: { firstname: first, lastname: last },
            })
            console.log("Document successfully written!")
        } catch (error) {
            console.error("Error writing document: ", error)
        }
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false)
        })
        return unsubscribe
    }, [])
    

    const value = {
        currentUser,
        login,
        logout,
        signup,
        resetPassword,
        updateEmail,
        updateName,
        updatePassword
    }

  return (
    <AuthContext.Provider value = {value}>
        {!loading && children}
    </AuthContext.Provider>
  )
}
