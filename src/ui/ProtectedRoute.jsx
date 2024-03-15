import { useEffect } from "react"
import useAuthorize from "../features/authentication/useAuthorize"
import { useNavigate } from "react-router-dom"
import Loading from "../ui/Loading"
function ProtectedRoute({ children }) {
  const navigate= useNavigate()
  // 1. load the authenticated user
  const { isAuthenticated, isAuthorized, isLoading } = useAuthorize()
// 2.check if is Authenticated or not, check if is Authorized or not
  useEffect(() => {
    if (!isAuthenticated && !isLoading) navigate("/auth")
    if( !isAuthorized && !isLoading) navigate("/not-access")
    },[isAuthenticated,isAuthorized,isLoading,navigate])
// 3. while loding =>show loading
    if (isLoading)
    return(
  <div className=" flex items-center justify-center h-screen bg-secondary-100">
    <Loading/>
  </div>
  )
// 4. if user isAuthenticated and isAuthorized =>render the app

if( isAuthenticated && isAuthorized)
  return children
}

export default ProtectedRoute