import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

export const login = async (email, password) => {
  try {
    const auth = getAuth();
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.error("Erro no login:", error.message);
  }
};

export const register = async (email, password) => {
  try {
    const auth = getAuth();
    await createUserWithEmailAndPassword(auth, email, password);
    console.log("Cadastrado com sucesso");
  } catch (error) {
    console.error("Erro no cadastro:", error.message);
  }
};
