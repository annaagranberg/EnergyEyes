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
    // async function updateName(first, last){
    //     try {
    //         await db.collection("user_collection").doc(currentUser.uid).update({
    //             name: { firstname: first, lastname: last },
    //         })
    //         console.log("Document successfully written!")
    //     } catch (error) {
    //         console.error("Error writing document: ", error)
    //     }
    //     console.log(first)
    // }
    //Update area
    // async function updateArea(area){
    //     try {
    //         await db.collection("user_collection").doc(currentUser.uid).update({
    //             boendeyta: area,
    //         })
    //     } catch (error) {
    //         console.error("Error writing document: ", error)
    //     }
    //     console.log(area)
    // }
    //Update people
    // async function updatePeople(people){
    //     try {
    //         await db.collection("user_collection").doc(currentUser.uid).update({
    //             antalPersoner: people,
    //         })
    //     } catch (error) {
    //         console.error("Error writing document: ", error)
    //     }
    // }

    async function updateProfil(profiltyp){
        try {
            await db.collection("user_collection").doc(currentUser.uid).update({
                profiltyp: profiltyp,
            })
        } catch (error) {
            console.error("Error writing document: ", error)
        }
    }

    async function setNewUser(fname,lname, area, people, profiltyp, duschAntal, duschTid, kok, disk, tvatt, dag, vecka){
        try {
            await db.collection("user_collection").doc(currentUser.uid).set({
                name: { firstname: fname, lastname: lname },
                boendeyta: parseInt(area) ,
                antalPersoner:  parseInt(people),
                profiltyp: profiltyp,

                duschparametrar: {antal:  parseInt(duschAntal), tid:  parseInt(duschTid)},
                kokparametrar: {antal:  parseInt(kok)},
                diskparametrar: {antal:  parseInt(disk)},
                tvattparametrar: {antal:  parseInt(tvatt)},
                mål: {dagligt: dag, veckovis: vecka}

            })
        } catch (error) {
            console.error("Error adding document: ", error)
        }
    }

    async function updateUser(fname, lname, area, people, profiltyp, duschAntal, duschTid, kok, disk, tvatt, dag, vecka){
        
        try {
            await db.collection("user_collection").doc(currentUser.uid).update({
                name: { firstname: fname, lastname: lname },
                boendeyta: parseInt(area), 
                antalPersoner: parseInt(people),
                profiltyp: profiltyp,

                duschparametrar: {antal: parseInt(duschAntal), tid: parseInt(duschTid) },
                kokparametrar: {antal: parseInt(kok)},
                diskparametrar: {antal: parseInt(disk)},
                tvattparametrar: {antal: parseInt(tvatt)},
                mål: {dagligt: dag, veckovis: vecka}

            })
        } catch (error) {
            console.error("Error adding document: ", error)
        }
        console.log(fname)
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
        updateProfil,
        updatePassword,
        updateUser,
        setNewUser,
    }

  return (
    <AuthContext.Provider value = {value}>
        {!loading && children}
    </AuthContext.Provider>
  )
}
