import { useState } from "react";
import { register } from "../../Auth/EmailAndPassword/AuthDefault";
import { Navigate, useNavigate } from "react-router"
import "../../Style/Components/RegisterStyle.css"

export const RegisterComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("")

  const navigate = useNavigate()

    const handleCadastro= async () => {
      if (password != confirmPassword){
        console.log("A senhas não se coincidem")
        return
      }

        const loginSuccess = await register(email, password)
        if (!loginSuccess){
            navigate('/login')
        } else {
            console.log("Erro login")
        }
    }
  
  return (
    <div>
      
      <form className="container"> 
      <div className="form-group">
      <h2>Cadastro</h2>
      <label>Email:</label>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Senha:</label>
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <label>Confirma senha</label>
        <input
           type="password"
           placeholder="Confirma senha"
           value={confirmPassword}
           onChange={(e) => setconfirmPassword(e.target.value)}
        />

        <button type="button" onClick={handleCadastro}>
          Cadastrar
        </button>
      </div>
        
      </form>
    </div>
  );
};
