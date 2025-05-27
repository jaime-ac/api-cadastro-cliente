import App from './App.jsx'
import { StrictMode } from 'react'
import './index.css'
import router from './router/routes.jsx'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from "react-router-dom"
import { GlobalContextProvider } from './contexts/GlobalContext.jsx'

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}>
    </RouterProvider>
  // <GlobalContextProvider>
  // </GlobalContextProvider>
)
