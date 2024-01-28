import { useState } from "react";
import { register } from "../../Auth/EmailAndPassword/AuthDefault";
import { Navigate, useNavigate } from "react-router"

export const RegisterComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate()

    const handleCadastro= async () => {
        const loginSuccess = await register(email, password)
        if (!loginSuccess){
            navigate('/login')
        } else {
            console.log("Erro login")
        }
    }
  
  return (
    <div>
      <h2>Cadastro</h2>
      <form>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Senha:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="button" onClick={handleCadastro}>
          Cadastrar
        </button>
      </form>
    </div>
  );
};
