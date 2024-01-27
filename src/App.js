import { AuthContextGoogle } from "./Context/AuthGoogle"
import { AppRotas } from "./Router/router"

export const App = () => {
  return (
    <AuthContextGoogle>
        <AppRotas/>
    </AuthContextGoogle>
    
  )
}