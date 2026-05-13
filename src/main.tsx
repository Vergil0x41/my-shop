import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { QueryProvider } from './app/providers/QueryProvider.tsx'
import { router } from './app/router/router.tsx'
import './styles/main.scss'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryProvider>
      <RouterProvider router={router}/>
    </QueryProvider>
  </StrictMode>
)
