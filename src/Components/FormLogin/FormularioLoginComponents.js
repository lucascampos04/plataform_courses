import { useContext } from "react"
import "../../Style/Components/FormularioLoginStyle.css"

import montanhas from "../../imgs/montanhas.jfif"
import google from "../../imgs/pesquisa.png"
import { authContexteGoogle } from "../../Auth/Google/AuthGoogle"
import { Navigate } from "react-router"


export const LoginFormularo = () => {
    const {signInGoogle, signed} = useContext(authContexteGoogle)
    
    if (signed) {
        return (<Navigate to={"/central"}/>)
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
                        />
                    </div>
                    <div className="form-group">
                        <label>Senha</label>
                        <input
                            type="password"
                            placeholder="*************"
                        />
                    </div>
                    <div className="form-group">
                        <button>Login</button>
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