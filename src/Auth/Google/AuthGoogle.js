import { useEffect, useState } from "react";
import { firebaseConfig } from "../../Service/Firebase/FirebaseConfig"
import {GoogleAuthProvider} from "firebase/auth"
import { Navigate } from "react-router";


const provider = new GoogleAuthProvider();

export const AuthContextGoogle = ({children}) => {
    const auth = getAuth(firebaseConfig)
    const [user, setUser] = useState(null)

    useEffect(() => {
        const loadStoreAuth = () => {
            const sessionToken = sessionStorage.getItem("@AuthFirebase.token")
            const sessionUser = sessionStorage.getItem("@AuthFirebase.user")

            if (sessionToken && sessionUser){
                let userObject = JSON.parse(sessionUser)
                setUser(userObject)
            }
        }
        loadStoreAuth()
    }, [])

    const signInGoogle = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;
                setUser(user)
                sessionStorage.setItem("@AuthFirebase:token", token)
                sessionStorage.setItem("@AuthFirebase:user", JSON.stringify(user))
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.customData.email;
                const credential = GoogleAuthProvider.credentialFromError(error);
            });
    }

    function signOut() {
        sessionStorage.clear()
        setUser(null)
        return (<Navigate to="/login"/>)
    }

    return (
        <AuthContextGoogle.provider
            value={{
                signInGoogle, signed: !!user, user, signOut
            }}

        >{children}</AuthContextGoogle.provider>
    )
}