import { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../providers/AuthProviders'
import { toast } from 'react-toastify'

const SignUp = () => {
   useEffect(() => {
      document.title = 'Creative Toy Store | Sign Up'
   }, [])
   const { creatUser } = useContext(AuthContext)

   const handleSignUp = (event) => {
      event.preventDefault()
      const form = event.target
      const name = form.name.value
      const email = form.email.value
      const password = form.password.value
      console.log(name, email, password)

      creatUser(email, password)
         .then((result) => {
            toast.success('User Created Successfully')
         })
         .catch((error) => {
            toast.error(error?.message)
         })
   }

   return (
      <div className="w-full shadow-2xl bg-base-100 px-14">
         <form onSubmit={handleSignUp} className="card-body space-y-6">
            <h3 className="text-2xl text-center">Create an Account</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               <div className="form-control">
                  <input
                     type="text"
                     name="name"
                     placeholder="Enter Full Name"
                     className="input input-bordered"
                     required
                  />
               </div>
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
               </div>

               <div className="form-control">
                  <input
                     type="password"
                     name="photo"
                     placeholder="Photo URL"
                     className="input input-bordered"
                  />
               </div>
            </div>
            <div className="form-control mt-6">
               <input
                  className="btn btn-success text-gray-200"
                  type="submit"
                  value="Sign Up"
               />
            </div>
         </form>
         <p className="pb-10 text-center text-lg">
            Already have an account? Please
            <Link className="text-pink-400 font-bold" to="/login">
               Login
            </Link>
         </p>
      </div>
   )
}

export default SignUp
