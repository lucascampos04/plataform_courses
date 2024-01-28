import { useContext, useState } from "react"
import "../../Style/Components/FormularioLoginStyle.css"

import montanhas from "../../imgs/montanhas.jfif"
import google from "../../imgs/pesquisa.png"
import { authContexteGoogle } from "../../Auth/Google/AuthGoogle"
import { Link, Navigate, useNavigate } from "react-router-dom";
import { login } from "../../Auth/EmailAndPassword/AuthDefault"


export const LoginFormularo = () => {
    const {signInGoogle, signed} = useContext(authContexteGoogle)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('')
    const navigate = useNavigate()

    const handleLogin = async (e) => {
        e.preventDefault()

        try {
            await login(email, password, navigate);
            navigate('/central');
        } catch (error) {
            setError(error.message)
        }
    }

   
    if (signed) {
        return null
    }

    return(
        <div className="container-fluid">
            <div className="container-form-login">
                <div className="modal-container-left">
                    <img src={montanhas}/>
                </div>
                <div className="modal-container-right">
                <h2>Login</h2>
                <form>
                    <div className="form-group">
                        <label>Email</label>
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                    </div>
                    <div className="form-group">
                        <label>Senha</label>
                        <input
                            type="password"
                            placeholder="*************"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="form-group group-buttons">
                        <button onClick={handleLogin}>Login</button>
                        <Link to="/register" className="link">Criar conta</Link>
                    </div>
                    <div className="loginInOutersForms">
                        <img src={google} height="50px" onClick={() => signInGoogle()}/>
                    </div>
                </form>
                </div>
                
            </div>
        </div>
    )
}