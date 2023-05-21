import { useContext } from 'react'
import { AuthContext } from '../providers/AuthProviders'
import { Navigate } from 'react-router-dom'

const GestRoutes = ({ children }) => {
   const { user } = useContext(AuthContext)
   if (user) {
      return <Navigate to="/"></Navigate>
   }
   return children
}

export default GestRoutes
