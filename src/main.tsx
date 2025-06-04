import { createRoot } from "react-dom/client"
import './index.css'
import App from "./App"
import { BrowserRouter } from "react-router-dom"
import "@fontsource/inter"

createRoot(document.getElementById('root')!).render(
  <BrowserRouter basename="/Project-IMK/">
    <App />
  </BrowserRouter>
)