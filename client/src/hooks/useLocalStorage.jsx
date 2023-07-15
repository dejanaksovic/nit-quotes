import { useEffect, useState } from "react"

const getValueByKey = (key, initValue) => {
   const prevValue = localStorage.getItem(key)
   if(prevValue)
      return JSON.parse(prevValue)

   return initValue || null
}

export const useLocalStorage = (key, initValue) => {
   const [state, setState] = useState(getValueByKey(key, initValue))

   useEffect( () => {
      console.log(`Setting local storage `, state);
      localStorage.setItem(key, JSON.stringify(state))
   }, [state])

   return [state, setState]
}