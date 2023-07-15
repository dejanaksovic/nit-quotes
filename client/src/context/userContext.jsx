import { createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const userContext = createContext()

const UserContextProvider = ({children}) => {
   const [user, setUser] = useLocalStorage('user')

   return (
      <userContext.Provider value={{user, setUser}}>
         {children}
      </userContext.Provider>
   )
}

export default UserContextProvider
export { userContext }