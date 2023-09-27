import Header from "./components/layout/Header"
import { routes } from "./routes"
import {RouterProvider} from 'react-router-dom'

function App() {

  return (
    <>
    <Header/>
    <RouterProvider router={routes}/>
    </>
  )
}

export default App;
