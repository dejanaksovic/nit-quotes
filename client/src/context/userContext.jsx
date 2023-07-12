import { createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const userContext = createContext()

const UserContextProvider = ({children}) => {
   const [user, setUser] = useLocalStorage('user')

   return (
      <userContext.Provider value = {{user}}>
         {children}
      </userContext.Provider>
   )
}

export default UserContextProvider