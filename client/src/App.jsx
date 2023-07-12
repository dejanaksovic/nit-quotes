import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import Home from "./pages/Home/Home"
import Quotes from "./pages/Quotes/Quotes"
import QuotesContextProvider from "./context/quotesContext"
import UserContextProvider from "./context/userContext"
import TagcontextProvider from "./context/tagContext"

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route>
      <Route path = {'/'} element = {<Home/>}/>
      <Route path = {'/quotes'} element = {<Quotes/>}/>
    </Route>
  ))

  return (
    <>
    <UserContextProvider>
      <QuotesContextProvider>
        <TagcontextProvider>
          <RouterProvider router={router}/>
        </TagcontextProvider>
      </QuotesContextProvider>
    </UserContextProvider>
    </>
  )
}

export default App
