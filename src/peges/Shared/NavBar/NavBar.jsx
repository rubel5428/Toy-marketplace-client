import { Link } from 'react-router-dom'
import logo from '../../../assets/logo/logo.png'
import { useContext } from 'react'
import { AuthContext } from '../../../providers/AuthProviders'
import userIcon from '../../../assets/image/user.jpeg'

const NavBar = () => {
   const { user, logOut } = useContext(AuthContext)
   console.log(user)
   const NavItems = (
      <>
         <li>
            <Link to="/">Home</Link>
         </li>
         <li>
            <Link to="/products">All Toys</Link>
         </li>
         {user && (
            <li>
               <Link to="/my-toys">My Toys</Link>
            </li>
         )}
         {user && (
            <li>
               <Link to="/addatoy">Add A Toy</Link>
            </li>
         )}
         <li>
            <Link to="/blog">Blogs</Link>
         </li>
      </>
   )
   return (
      <div className="navbar bg-base-100 py-8">
         <div className="navbar-start">
            <div className="dropdown">
               <label tabIndex={0} className="btn btn-ghost lg:hidden">
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     className="h-5 w-5"
                     fill="none"
                     viewBox="0 0 24 24"
                     stroke="currentColor"
                  >
                     <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h8m-8 6h16"
                     />
                  </svg>
               </label>
               <ul
                  tabIndex={0}
                  className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
               >
                  {NavItems}
               </ul>
            </div>
            <Link to="/" className="btn btn-ghost normal-case text-xl">
               <img src={logo} alt="" />
            </Link>
         </div>
         <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{NavItems}</ul>
         </div>
         <div className="navbar-end">
            {user ? (
               <>
                  {' '}
                  <button onClick={logOut} className="btn bg-red-600 mr-4">
                     Sign Out
                  </button>
                  <div className="avatar group relative">
                     <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={user?.photoURL ? user?.photoURL : userIcon} />
                     </div>
                     {user.displayName && (
                        <span className="hidden fixed -top-0 group-hover:block">
                           {user.displayName}
                        </span>
                     )}
                  </div>
               </>
            ) : (
               <Link to="/login">
                  <button className="btn">Login</button>
               </Link>
            )}
         </div>
      </div>
   )
}

export default NavBar
