import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import WhisListProvider from "./WhisListProvider"
// import { CartProvider } from './CartContext .js'

createRoot(document.getElementById('root')).render(
        <WhisListProvider>
              <App />
        </WhisListProvider>
          
)
