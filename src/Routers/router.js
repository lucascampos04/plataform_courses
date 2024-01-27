import { BrowserRouter, Route, Routes } from "react-router-dom"
import { HomePage } from "../Pages/Home/HomePage"

export const Routers = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
            </Routes>
        </BrowserRouter>
    )
}