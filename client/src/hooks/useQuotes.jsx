import { useContext } from "react"
import { quotesContext } from "../context/quotesContext"

export const useQuotes = () => {
   const context = useContext(quotesContext)

   if(!context)
      throw Error("Quotes context must be used inside quotes provider")

   return context
}