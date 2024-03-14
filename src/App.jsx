
import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Auth from './pages/Auth'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Toaster } from 'react-hot-toast'
import CompleteProfile from './pages/CompleteProfile'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import OwnerDashboard from './pages/OwnerDashboard'
import Projects from './pages/Projects'
import Project from './pages/Project'
import { DarkModeProvider } from './context/DarkModeContext'
import OwnerLayout from './features/owner/OwnerLayout'
import FreelancerLayout from './features/freelancer/FreelancerLayout'
import Freelancer from './pages/FreelancerDashboard'
import Proposals from './pages/Proposals'
import SubmittedProjects from './pages/SubmittedProjects'


// Create a client
const queryClient = new QueryClient()
function App() {


  return (
    <DarkModeProvider>
      <QueryClientProvider client={queryClient}>
        <Toaster />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<NotFound />} />
          <Route path='/auth' element={<Auth />} />
          <Route path='/complete-profile' element={<CompleteProfile />} />

          <Route path='/owner' element={<OwnerLayout />} >
            <Route index element={<Navigate to="dashboard" replace />} />
            <Route path='dashboard' element={<OwnerDashboard />} />
            <Route path='projects' element={<Projects />} />
            <Route path='projects/:id' element={<Project />} />
          </Route>
          <Route path='/freelancer' element={<FreelancerLayout />} >
            <Route index element={<Navigate to="dashboard" replace />} />
            <Route path='dashboard' element={<Freelancer/>} />
            <Route path='proposals' element={<Proposals />} />
            <Route path='projects' element={<SubmittedProjects />} />
            <Route path='projects/:id' element={<Project />} />
          </Route>
        </Routes>

      </QueryClientProvider>
    </DarkModeProvider>

  )
}

export default App
