import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export const login = async (email, password, navigate) => {
  try {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!emailRegex.test(email)){
      throw new Error("Formato de email invalido")
    }

    const auth = getAuth();
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    throw error
  }
};

export const register = async (email, password) => {
  try {
    const auth = getAuth();
    await createUserWithEmailAndPassword(auth, email, password);
  } catch (error) {
    throw new Error("Erro no cadasto ", error.message)
  }
};

export const logout = async () => {
  try {
    const auth = getAuth()
    await signOut(auth)
  } catch (e) {
    throw new e("Error ao desconectar ", e.message)
  }
}