import { useContext } from "react"
import "../../style/Login/LoginStyle.css"
import { authContextGoogle } from "../../Context/AuthGoogle"
import { Navigate } from "react-router"

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
                
                <div className="form-row">
                    <h1 className="modal-title-login">MiniCurso.dev</h1>
                </div>

                <div className="form-row">
                    <input
                        type="text"
                        placeholder="username"
                        className="form-group"
                    />
                </div>

                <div className="form-row">
                    <input
                        type="text"
                        placeholder="senha"
                        className="form-group"
                    />
                </div>

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
    )
}