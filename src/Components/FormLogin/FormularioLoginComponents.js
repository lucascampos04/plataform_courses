import { useContext, useState } from "react"
import "../../Style/Components/FormularioLoginStyle.css"

import montanhas from "../../imgs/montanhas.jfif"
import google from "../../imgs/pesquisa.png"
import { authContexteGoogle } from "../../Auth/Google/AuthGoogle"
import { Navigate, useNavigate } from "react-router"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export const LoginFormularo = () => {
    const {signInGoogle, signed} = useContext(authContexteGoogle)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
          const auth = getAuth();
          await signInWithEmailAndPassword(auth, email, password);
          navigate('/central')
        } catch (error) {
          console.error('Erro no login:', error.message);
        }
      };
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
                    <div className="form-group">
                        <button onClick={handleLogin}>Login</button>
                    </div>
                    <div className="loginInOutersForms">
                        <img src={google} width="50px" onClick={() => signInGoogle()}/>
                    </div>
                </form>
                </div>
                
            </div>
        </div>
    )
}