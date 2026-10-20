import { createBrowserRouter } from "react-router-dom"
import App from './App'
import App2 from "./App2"
import './index.css'

const router = createBrowserRouter([

    
    {
        path: "/",
        element: <App />
    },
    {
        path: "/Home",
        element: <App2 />
    }
])

export default router
