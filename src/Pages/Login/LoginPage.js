import { useContext, useState } from "react"
import "../../style/Login/LoginStyle.css"
import { authContextGoogle } from "../../Context/AuthGoogle"
import { Navigate } from "react-router"
import { Link } from "react-router-dom"

export const LoginPage = () => {
    const {signInGoogle, signed} = useContext(authContextGoogle)

    if (signed) {
        return (
            <Navigate to="/central"/>
        )
    }
    return(
        <div className="container-fluid">
        <div className="login-modal-container">
        
        <div className="modal-container-title-login">
            <h1 className="modal-title-login">MiniCurso.dev</h1>
        </div>
        <div className="modal-container-inputs">
        <div className = "form-row">
            <input
              type="text"
              placeholder="Email"
              className="form-control"
            />
          </div>
    
          <div className="form-row">
            <input
              type="text"
              placeholder="Senha"
              className="form-group form-control"
            />
          </div>
          <Link to="/register">Criar conta</Link>
          <div className="form-row">
            <button className="form-row btn btn-success modal-button-login">
              Login
            </button>
          </div>
    
          <div className="form-row">
            <h3 className="modal-img-google" onClick={signInGoogle}>Google</h3>
          </div>
        </div> 
        </div>
      </div>
    )
}