import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from "./components/Home"
import Paste from "./components/Paste"
import Viewpaste from "./components/Viewpaste"
import Navbar from "./components/Navbar"
import './index.css'
const router = createBrowserRouter(
  [
    {
      path:"/",
      element:
      <div>
        <Navbar/>
        <Home/>
      </div>
    },
    {
      path:"/paste",
      element: 
      <div>
        <Navbar/>
        <Paste/>
      </div>
    },
    {
      path:"/paste/:id",
      element:
      <div>
        <Navbar/>
        <Viewpaste/>
      </div>
    }
  ]
)
function App() {
  
  return (
    <div>
    <RouterProvider router={router}/>
    </div>
  )
}

export default App
