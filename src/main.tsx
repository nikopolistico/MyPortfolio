import { MotionConfig } from 'framer-motion'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { TooltipProvider } from '@/components/ui/tooltip'
import App from './App'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* reducedMotion="user": framer-motion skips transform animations when the OS asks for less motion */}
    <MotionConfig reducedMotion="user">
      <TooltipProvider delayDuration={200}>
        <App />
      </TooltipProvider>
    </MotionConfig>
  </StrictMode>,
)
