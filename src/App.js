import { AuthContextGoogle } from "./Auth/Google/AuthGoogle"
import { Routers } from "./Routers/router"

export const App = () => {
  return (
    <AuthContextGoogle>
      <Routers/>
    </AuthContextGoogle>
    
  )
}