import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ThemeProvider } from '@material-tailwind/react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <ToastContainer position="top-right" hideProgressBar={true} autoClose={2000}/>

    <ThemeProvider>

    <App />
    </ThemeProvider>
  </React.StrictMode>,
)
