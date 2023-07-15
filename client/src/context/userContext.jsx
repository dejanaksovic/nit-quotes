import { createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const userContext = createContext()

const UserContextProvider = ({children}) => {
   const [user, setUser] = useLocalStorage('user')

   const logout = () => {
      localStorage.removeItem('user')
      setUser(null)
   }

   return (
      <userContext.Provider value={{user, setUser, logout}}>
         {children}
      </userContext.Provider>
   )
}

export default UserContextProvider
export { userContext }