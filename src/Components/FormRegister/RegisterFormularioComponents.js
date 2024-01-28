import { useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, addDoc, collection, getDocs } from "firebase/firestore";
import { AppConfigFirebase } from "../../Service/Firebase/FirebaseConfig";
import { Navigate, useNavigate } from "react-router";
import "../../Style/Components/RegisterStyle.css";

export const RegisterComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [user, setUsers] = useState([]);
  const navigate = useNavigate();

  const auth = getAuth(AppConfigFirebase);
  const db = getFirestore(AppConfigFirebase);
  const userCollectionsRef = collection(db, "users");

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(userCollectionsRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
  }, []);

  const createUserInFirestore = async (uid) => {
    try {
      const userDocRef = await addDoc(userCollectionsRef, {
        uid,
        name,
        email,
      });

      console.log("Usuário adicionado ao Firestore:", userDocRef.id);
    } catch (error) {
      console.error("Erro ao adicionar usuário ao Firestore:", error.message);
    }
  };

  const handleCadastro = async () => {
    try {
      if (!email || !password || !confirmPassword || !name) {
        console.error("Todos os campos devem ser preenchidos");
        return;
      }
  
      if (password !== confirmPassword) {
        console.error("As senhas não coincidem");
        return;
      }
  
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const firebaseUser = userCredential.user;
        await createUserInFirestore(firebaseUser.uid);
        navigate('/login');
      } catch (error) {
        console.error("Erro ao criar usuário:", error.message);
      }
    } catch (error) {
      console.error(error.message);
    }
    
  };

  return (
    <div>
      <form className="container">
        <div className="form-group">
          <h2>Cadastro</h2>
          <label>Email:</label>
          <input
            type="email"
            placeholder="Email"
            value={email || ""}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Senha:</label>
          <input
            type="password"
            placeholder="Senha"
            value={password || ""}
            onChange={(e) => setPassword(e.target.value)}
          />

          <label>Confirma senha:</label>
          <input
            type="password"
            placeholder="Confirma senha"
            value={confirmPassword || ""}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <label>Nome:</label>
          <input
            type="text"
            placeholder="Nome"
            value={name || ""}
            onChange={(e) => setName(e.target.value)}
          />

          <button type="button" onClick={handleCadastro}>
            Cadastrar
          </button>
        </div>
      </form>
    </div>
  );
};
