import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";

export const RegisterComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleCadastro = async () => {
    try {
      const auth = getAuth();
      await createUserWithEmailAndPassword(auth, email, password);
      console.log("Cadastrado com sucesso");
      window.location.href="/login"
    } catch (error) {
      console.error("Erro no cadastro:", error.message);
    }
  };
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
