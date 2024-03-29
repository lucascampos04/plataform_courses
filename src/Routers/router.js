import { BrowserRouter, Route, Routes } from "react-router-dom"
import { HomePage } from "../Pages/Home/HomePage"
import { LoginPage } from "../Pages/Login/LoginPage"
import { RegisterPage } from "../Pages/Register/RegisterPage"
import { CentralPages } from "../Pages/central/CentralPage"

export const Routers = () => {
    return(
        
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/register" element={<RegisterPage/>}/>
                <Route path="/central" element={<CentralPages/>}/>
            </Routes>
        </BrowserRouter>
    )
}