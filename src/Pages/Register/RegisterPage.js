import React, { useState } from "react";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { AppConfigFirebase } from "../../Service/Firebase/firebaseConfig";
import { Link, Navigate } from "react-router-dom";

export const RegisterPages = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const database = getFirestore(AppConfigFirebase);
  const userCollectionsRef = collection(database, "users");

  async function createUser() {
    try {
      const user = await addDoc(userCollectionsRef, {
        email,
        password,
      });
      console.log("Cadastrado com sucesso", user.id);
      window.location.href = "/login"
    } catch (error) {
      console.error("Erro ao cadastrar:", error.message);
    }
  }

  return (
    <div>
      <h1>Registro</h1>
      <form>
        <div>
          <label htmlFor="email">E-mail:</label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            id="password"
            value={password}
            placeholder="***********"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="button" onClick={(e) => createUser()}>
          Registrar
        </button>
      </form>
    </div>
  );
};
