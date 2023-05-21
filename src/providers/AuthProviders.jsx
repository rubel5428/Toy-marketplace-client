import { createContext, useEffect, useState } from 'react'
import {
   GithubAuthProvider,
   GoogleAuthProvider,
   createUserWithEmailAndPassword,
   getAuth,
   onAuthStateChanged,
   signInWithEmailAndPassword,
   signInWithPopup,
   signOut,
} from 'firebase/auth'
import app from '../firebase/firebase.config'

export const AuthContext = createContext()
const auth = getAuth(app)

const AuthProviders = ({ children }) => {
   const [user, setUser] = useState(null)
   const [loading, setLoading] = useState(true)
   const googleProvider = new GoogleAuthProvider()
   const gitHubProvider = new GithubAuthProvider()

   const creatUser = (email, password) => {
      setLoading(true)
      return createUserWithEmailAndPassword(auth, email, password)
   }
   const signIn = (email, password) => {
      setLoading(true)
      return signInWithEmailAndPassword(auth, email, password)
   }
   const signInWithGoogle = () => {
      setLoading(true)
      return signInWithPopup(auth, googleProvider)
   }
   const signInWithGitHub = () => {
      setLoading(true)
      return signInWithPopup(auth, gitHubProvider)
   }
   const logOut = () => {
      return signOut(auth)
   }
   useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
         setUser(currentUser)
         setLoading(false)
      })
      return () => {
         return unsubscribe()
      }
   }, [])

   const authInfo = {
      user,
      loading,
      creatUser,
      signIn,
      signInWithGoogle,
      signInWithGitHub,
      logOut,
   }
   return (
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
   )
}

export default AuthProviders
