import { createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const quotesContext = createContext()

const QuotesContextProvider = ({children}) => {
   const [quotes, setQuotes] = useLocalStorage('quotes', [])
   
   const fetchQuotes = (quotes) => {
      setQuotes(quotes)
   }

   const voteLocal = (type, id, reverse) => {
      const votedOn = quotes.filter( e => e.id === id )[0]
      votedOn.givenVote = reverse ? 'none' : type
      setQuotes( (prevQuotes) => {
         return [...prevQuotes.filter( e => e.id !== id ), votedOn]
      } )      
   }

   return ( 
      <quotesContext.Provider value = {{fetchQuotes, quotes, voteLocal}}>
         {children}
      </quotesContext.Provider>
    );
}
 
export default QuotesContextProvider;