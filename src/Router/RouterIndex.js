import { useContext } from "react"
import { authContextGoogle } from "../Context/AuthGoogle"
import { Navigate, Outlet, Route } from "react-router"

export const RouterPrivate = () => {
    const {signed} = useContext(authContextGoogle)
    return signed ? <Outlet /> : <Navigate to="/login"/>
}