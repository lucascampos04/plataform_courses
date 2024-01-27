import { useContext } from "react"
import { authContextGoogle } from "../../Context/AuthGoogle"

export const Home = () => {
    const {user, signOut} = useContext(authContextGoogle)
    
    const userName = user && user.displayName ? user.displayName : "Nome desconhecido"
    const emailUser =  user && user.email ? user.email : "Email desconhecido"


    console.log(userName)
    console.log(emailUser)
    return (
        <div>
            <h1>
                {userName}
            </h1>
            <p>
                {emailUser}
            </p>
            <button className="alert alert-success" onClick={() => signOut()}>
                Sair
            </button>
        </div>
        
    )
}
