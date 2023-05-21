import { Outlet } from 'react-router-dom'
import Footer from '../peges/Shared/Footer/Footer'
import NavBar from '../peges/Shared/NavBar/NavBar'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Main = () => {
   return (
      <div>
         <ToastContainer></ToastContainer>
         <NavBar></NavBar>
         <Outlet></Outlet>
         <Footer></Footer>
      </div>
   )
}

export default Main
