import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { GlobalState } from './context/useContext.jsx'

createRoot(document.getElementById('root')).render(
    <GlobalState>
        <App />             {/* Acts as a children in the useContent, GlobalContext Provider */}
    </GlobalState>
)

