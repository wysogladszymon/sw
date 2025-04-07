import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ThemeProvider } from "./providers/ThemeProvider.tsx";
import { ColorProvider } from "./providers/ColorProvider.tsx";
import '@fortawesome/fontawesome-free/css/all.min.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider attribute="class" defaultTheme="system">
      <ColorProvider>
        <App />
      </ColorProvider>
    </ThemeProvider>
  </StrictMode>
)
