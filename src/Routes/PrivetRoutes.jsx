import { useContext } from 'react'
import { AuthContext } from '../providers/AuthProviders'
import { Navigate, useLocation } from 'react-router-dom'

const PrivetRoutes = ({ children }) => {
   const { user, loading } = useContext(AuthContext)
   const location = useLocation()

   if (loading) {
      return <p className="dark:text-gray-200 text-2xl">Loading....</p>
   }
   if (user) {
      return children
   }
   return <Navigate state={{ from: location }} to="/login"></Navigate>
}

export default PrivetRoutes
