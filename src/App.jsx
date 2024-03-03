
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Auth from './pages/Auth'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Toaster } from 'react-hot-toast'
import CompleteProfile from './pages/CompleteProfile'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import AppLayout from './ui/AppLayout'
import Owner from './pages/Owner'


// Create a client
const queryClient = new QueryClient()
function App() {


  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/auth' element={<Auth />} />
        <Route path='/complete-profile' element={<CompleteProfile />} />
        <Route element={<AppLayout />}>
          <Route path='/owner' element={<Owner />} />
        </Route>
      </Routes>

    </QueryClientProvider>

  )
}

export default App
