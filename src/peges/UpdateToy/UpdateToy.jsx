import { useContext, useEffect } from 'react'
import { Navigate, useLoaderData } from 'react-router-dom'
import { AuthContext } from '../../providers/AuthProviders'
import { toast } from 'react-toastify'

const UpdateToy = () => {
   const {
      _id,
      name,
      price,
      quantity,
      email,
      description,
      ratting,
      photo_url,
   } = useLoaderData()
   const { user } = useContext(AuthContext)

   useEffect(() => {
      document.title = 'Creative Toy Store | Update Toy'
   }, [])

   const updateToyHandler = (event) => {
      event.preventDefault()

      const form = event.target

      const name = form.name.value
      const price = form.price.value
      const quantity = form.quantity.value
      const photo_url = form.photo_url.value
      const ratting = form.ratting.value
      const description = form.description.value

      const toy = {
         name,
         price,
         quantity,
         photo_url,
         ratting,
         description,
      }

      if (email == user?.email) {
         fetch(
            `https://assignment-11-server-three-green.vercel.app/product/${_id}`,
            {
               method: 'PATCH',
               headers: {
                  'content-type': 'application/json',
               },
               body: JSON.stringify(toy),
            }
         )
            .then((res) => res.json())
            .then((data) => {
               if (data.modifiedCount > 0) {
                  toast.success('Toy Updated Successfully')
               }
            })
      } else {
         toast.warn('You Do not have access to update this toy')
      }
   }

   if (user?.email != email) {
      toast.warn('You Do not have access to update this toy')
      return <Navigate to="/" />
   }

   return (
      <div>
         <h2 className="text-center text-3xl mb-7">Add a toy:</h2>
         <form onSubmit={updateToyHandler}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               <div className="form-control">
                  <label className="label">
                     <span className="label-text">Name</span>
                  </label>
                  <input
                     type="text"
                     name="name"
                     defaultValue={name}
                     className="input input-bordered"
                     required
                  />
               </div>
               <div className="form-control">
                  <label className="label">
                     <span className="label-text">Price</span>
                  </label>
                  <input
                     type="price"
                     name="price"
                     className="input input-bordered"
                     required
                     defaultValue={price}
                     min={1}
                  />
               </div>
               <div className="form-control">
                  <label className="label">
                     <span className="label-text">Ratting</span>
                  </label>
                  <input
                     type="number"
                     name="ratting"
                     className="input input-bordered"
                     required
                     defaultValue={ratting}
                     min={1}
                     max={5}
                     step={0.1}
                  />
               </div>
               <div className="form-control">
                  <label className="label">
                     <span className="label-text">Quantity</span>
                  </label>
                  <input
                     type="number"
                     name="quantity"
                     className="input input-bordered"
                     required
                     defaultValue={quantity}
                     min={1}
                  />
               </div>
               <div className="form-control">
                  <label className="label">
                     <span className="label-text">Photo URL</span>
                  </label>
                  <input
                     type="text"
                     name="photo_url"
                     defaultValue={photo_url}
                     className="input input-bordered"
                     required
                  />
               </div>
            </div>
            <div className="form-control mt-4">
               <label className="label">
                  <span className="label-text">Description</span>
               </label>
               <textarea
                  defaultValue={description}
                  name="description"
                  className="input input-bordered h-40"
                  required
                  placeholder="Write here....."
               ></textarea>
            </div>
            <div className="form-control mt-6">
               <input
                  className="btn btn-primary"
                  type="submit"
                  value="Update now"
               />
            </div>
         </form>
      </div>
   )
}

export default UpdateToy
