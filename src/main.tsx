import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { Routing } from './Routing.tsx'

createRoot(document.getElementById('root')!).render(
    <Routing></Routing>

)
