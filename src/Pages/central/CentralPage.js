import { Navigate, useNavigate } from "react-router"
import { logout } from "../../Auth/EmailAndPassword/AuthDefault"

export const CentralPages = () => {
    const navigate = useNavigate()

    const handleLogout = async () => {
        try {
            await logout()
            navigate("/")
        } catch (e) {
            console.error(e.message);
        }
            
    }

    return(
        <button onClick={handleLogout}>Sair</button>
    )
}