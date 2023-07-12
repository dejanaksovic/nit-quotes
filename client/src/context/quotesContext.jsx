import { createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const quotesContext = createContext()

const QuotesContextProvider = ({children}) => {
   const [quotes, setQuotes] = useLocalStorage()
   
   const fetchQuotes = (quotes) => {
      setQuotes(quotes)
   }

   return ( 
      <quotesContext.Provider value = {{fetchQuotes, quotes}}>
         {children}
      </quotesContext.Provider>
    );
}
 
export default QuotesContextProvider;