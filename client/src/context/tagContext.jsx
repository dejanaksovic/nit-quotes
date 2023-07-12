import { createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const tagContext = createContext()

const TagcontextProvider = ({children}) => {
   const [tag, setTag] = useLocalStorage('tag')

   return ( 
      <tagContext.Provider value={{tag, setTag}}>
         {children}
      </tagContext.Provider>
    );
}
 
export default TagcontextProvider;