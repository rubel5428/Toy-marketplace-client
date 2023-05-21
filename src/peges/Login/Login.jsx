/* eslint-disable no-unused-vars */
import { useContext, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../providers/AuthProviders'
import { toast } from 'react-toastify'

const Login = () => {
   useEffect(() => {
      document.title = 'Creative Toy Store | Login'
   }, [])
   const { signIn, signInWithGoogle, signInWithGitHub } =
      useContext(AuthContext)
   const location = useLocation()
   const navigate = useNavigate()
   const toPlace = location.state?.from?.pathname
      ? location.state?.from?.pathname
      : '/'

   const handleLogin = (event) => {
      event.preventDefault()
      const form = event.target
      const email = form.email.value
      const password = form.password.value

      signIn(email, password)
         .then((result) => {
            navigate(toPlace, { replace: true })
            toast.success('Login Successfull')
         })
         .catch((error) => {
            toast.error(error.message)
            console.log(error)
         })
   }
   const handleSignInWithGoogle = () => {
      signInWithGoogle()
         .then((result) => {
            navigate(toPlace, { replace: true })
            toast.success('Login Successfull')
         })
         .catch((error) => {
            toast.error(error.message)
            console.log(error)
         })
   }
   const handleLoginWithGithub = () => {
      signInWithGitHub()
         .then((result) => {
            navigate(toPlace, { replace: true })
            toast.success('Login Successfull')
         })
         .catch((error) => {
            console.log(error)
         })
   }

   return (
      <div className="bg-green-50 px-44 py-16 rounded-lg">
         <div className="flex">
            <div className="text-center w-1/3 bg-[#272B4A] text-white">
               <h3 className="text-lg p-4 mt-20">
                  Login using social media to get quick access
               </h3>
               <div>
                  <button
                     onClick={handleSignInWithGoogle}
                     className="px-6 py-3 mt-4 font-semibold text-gray-900 bg-white border-2 border-gray-500 rounded-md shadow outline-none hover:bg-blue-50 hover:border-blue-400 focus:outline-none"
                  >
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="inline w-4 h-4 mr-3 text-gray-900 fill-current"
                        viewBox="0 0 48 48"
                        width="48px"
                        height="48px"
                     >
                        <path
                           fill="#fbc02d"
                           d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12 s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20 s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                        ></path>
                        <path
                           fill="#e53935"
                           d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039 l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                        ></path>
                        <path
                           fill="#4caf50"
                           d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36 c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                        ></path>
                        <path
                           fill="#1565c0"
                           d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571 c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                        ></path>
                     </svg>
                     Sign in with Google
                  </button>
                  <button
                     onClick={handleLoginWithGithub}
                     className="px-6 py-3 mt-4 font-semibold text-gray-900 bg-white border-2 border-gray-500 rounded-md shadow outline-none hover:bg-blue-50 hover:border-blue-400 focus:outline-none"
                  >
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        className="inline w-4 h-4 mr-3 text-gray-900 fill-current"
                     >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                     </svg>
                     Sign in with GitHub
                  </button>
               </div>
            </div>
            <div className="w-2/3 shadow-2xl bg-base-100">
               <form onSubmit={handleLogin} className="card-body space-y-6">
                  <h3 className="text-2xl text-center">
                     Login to Your Account
                  </h3>
                  <div className="form-control">
                     <input
                        type="emil"
                        name="email"
                        placeholder="Enter Email"
                        className="input input-bordered"
                        required
                     />
                  </div>
                  <div className="form-control">
                     <input
                        type="password"
                        name="password"
                        placeholder="Enter Password"
                        className="input input-bordered"
                        required
                     />

                     <div className="flex justify-between mt-6">
                        <div className="form-control">
                           <label className="cursor-pointer flex items-center gap-2">
                              <input type="checkbox" className="checkbox" />
                              <span className="label-text">Remember me</span>
                           </label>
                        </div>
                        <div>
                           <label className="label">
                              <a
                                 href="#"
                                 className="label-text link link-hover"
                              >
                                 Forgot password?
                              </a>
                           </label>
                        </div>
                     </div>
                  </div>
                  <div className="form-control mt-6">
                     <input
                        className="btn btn-success text-gray-200"
                        type="submit"
                        value="Login"
                     />
                  </div>
               </form>
               <p className="pb-10 text-center text-lg">
                  Are you new? Please{' '}
                  <Link className="text-pink-400 font-bold" to="/signup">
                     Sign Up
                  </Link>
               </p>
            </div>
         </div>
      </div>
   )
}

export default Login
