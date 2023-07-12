import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import Home from "./pages/Home/Home"
import Quotes from "./pages/Quotes/Quotes"

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route>
      <Route path = {'/'} element = {<Home/>}/>
      <Route path = {'/quotes'} element = {<Quotes/>}/>
    </Route>
  ))

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
