import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage } from "../Pages/Login/LoginPage";


import { Central } from "../Pages/Central/CentralPage";
import { RouterPrivate } from "../Router/RouterIndex";
import { RegisterPages } from "../Pages/Register/RegisterPage";

export const AppRotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/central" element ={<RouterPrivate/>}>
                    <Route path="/central" element={<Central/>}/>
                </Route>
                <Route path="/register" element={<RegisterPages/>}/>
            </Routes>
            
        </BrowserRouter>
    )
    
}