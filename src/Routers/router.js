import { BrowserRouter, Route, Routes } from "react-router-dom"
import { HomePage } from "../Pages/Home/HomePage"
import { LoginPage } from "../Pages/Login/LoginPage"

export const Routers = () => {
    return(
        
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/login" element={<LoginPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}