import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage } from "../Pages/Login/LoginPage";


import { Home } from "../Pages/Home/HomePage";
import { RouterPrivate } from "../Router/RouterIndex";
import { RegisterPages } from "../Pages/Register/RegisterPage";

export const AppRotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/central" element ={<RouterPrivate/>}>
                    <Route path="/central" element={<Home/>}/>
                </Route>
                <Route path="/register" element={<RegisterPages/>}/>
            </Routes>
            
        </BrowserRouter>
    )
    
}