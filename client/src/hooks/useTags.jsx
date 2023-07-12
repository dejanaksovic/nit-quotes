import { useContext } from "react"
import { tagContext } from "../context/tagContext"

export const useTags = () => {
   const context = useContext(tagContext)

   if(!context)
      throw Error("Tag context must be used inside tag context provider")

   return context
}