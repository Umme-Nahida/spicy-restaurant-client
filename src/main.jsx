import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {
  RouterProvider,
} from "react-router-dom";
import './index.css'
import router from './Router/router.jsx';
import AuthProvider from './Authentication/AuthProvider/AuthProvider.jsx';
import { Toaster } from 'react-hot-toast';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'


const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
    </QueryClientProvider>
    
    </AuthProvider>
    <Toaster/>
  </StrictMode>,
)
