import { createBrowserRouter } from 'react-router-dom'
import Main from '../LayOut/Main'
import Home from '../peges/Home/Home/Home'
import Login from '../peges/Login/Login'
import SignUp from '../peges/Signup/SignUp'
import NotFound from '../peges/NotFound/NotFound'
import PrivetRoutes from './PrivetRoutes'
import GestRoutes from './GestRoutes'
import AddProducts from '../peges/AddProducts/AddProducts'
import Single from '../peges/SingleProduct/single'
import AllToyes from '../peges/AllToys/AllToyes'
import MyToys from '../peges/MyToys/MyToys'
import UpdateToy from '../peges/UpdateToy/UpdateToy'
import Blogs from '../peges/Blogs/Blogs'

const router = createBrowserRouter([
   {
      path: '/',
      element: <Main></Main>,
      children: [
         {
            path: '/',
            element: <Home></Home>,
            loader: () =>
               fetch(
                  'https://assignment-11-server-three-green.vercel.app/products?limit=6'
               ),
         },
         {
            path: '/products',
            element: <AllToyes />,
            loader: () =>
               fetch(
                  'https://assignment-11-server-three-green.vercel.app/products?limit=20'
               ),
         },
         {
            path: '/my-toys',
            element: (
               <PrivetRoutes>
                  <MyToys />
               </PrivetRoutes>
            ),
         },
         {
            path: '/products/:id',
            element: (
               <PrivetRoutes>
                  <Single />
               </PrivetRoutes>
            ),
            loader: ({ params }) =>
               fetch(
                  `https://assignment-11-server-three-green.vercel.app/products/${params.id}`
               ),
         },
         {
            path: '/update-toy/:id',
            element: (
               <PrivetRoutes>
                  <UpdateToy />
               </PrivetRoutes>
            ),
            loader: ({ params }) =>
               fetch(
                  `https://assignment-11-server-three-green.vercel.app/products/${params.id}`
               ),
         },
         {
            path: 'addatoy',
            element: (
               <PrivetRoutes>
                  <AddProducts></AddProducts>
               </PrivetRoutes>
            ),
            loader: () =>
               fetch(
                  'https://assignment-11-server-three-green.vercel.app/categories'
               ),
         },
         {
            path: '/login',
            element: (
               <GestRoutes>
                  <Login></Login>
               </GestRoutes>
            ),
         },
         {
            path: '/signup',
            element: (
               <GestRoutes>
                  <SignUp></SignUp>
               </GestRoutes>
            ),
         },
         {
            path: '/blog',
            element: <Blogs></Blogs>,
         },
      ],
   },
   {
      path: '*',
      element: <NotFound></NotFound>,
   },
])

export default router
