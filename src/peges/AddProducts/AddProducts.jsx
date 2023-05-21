import { useContext, useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'
import { AuthContext } from '../../providers/AuthProviders'
import { toast } from 'react-toastify'

const AddProducts = () => {
   const categories = useLoaderData()
   const { user } = useContext(AuthContext)
   useEffect(() => {
      document.title = 'Creative Toy Store | Add Toy'
   }, [])
   const haddleAddToy = (event) => {
      event.preventDefault()

      const form = event.target

      const name = form.name.value
      const price = form.price.value
      const quantity = form.quantity.value
      const photo_url = form.photo_url.value
      const ratting = form.ratting.value
      const description = form.description.value
      const email = user?.email
      const category = JSON.parse(form.category.value)
      const authorName = user?.displayName

      const toy = {
         name,
         price,
         quantity,
         photo_url,
         ratting,
         description,
         email,
         category: category?.name,
         category_id: category?._id,
         authorName,
      }

      fetch('http://localhost:5000/addToy', {
         method: 'POST',
         headers: {
            'content-type': 'application/json',
         },
         body: JSON.stringify(toy),
      })
         .then((res) => res.json())
         .then((data) => {
            if (data.insertedId) {
               toast.success('Toy Created Successfully')

               form.name.value = ''
               form.price.value = ''
               form.quantity.value = ''
               form.photo_url.value = ''
               form.ratting.value = ''
               form.description.value = ''
            }
         })
   }

   return (
      <div>
         <h2 className="text-center text-3xl mb-7">Add a toy:</h2>
         <form onSubmit={haddleAddToy}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               <div className="form-control">
                  <label className="label">
                     <span className="label-text">Name</span>
                  </label>
                  <input
                     type="text"
                     name="name"
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
                     className="input input-bordered"
                     required
                  />
               </div>

               <div className="form-control">
                  <label className="label">
                     <span className="label-text">Select a category</span>
                  </label>
                  <select
                     type="text"
                     name="category"
                     className="input input-bordered"
                     required
                  >
                     {categories?.map((category) => (
                        <option
                           key={category?._id}
                           value={JSON.stringify(category)}
                        >
                           {category?.name}
                        </option>
                     ))}
                  </select>
               </div>
            </div>
            <div className="form-control mt-4">
               <label className="label">
                  <span className="label-text">Description</span>
               </label>
               <textarea
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
                  value="Add New"
               />
            </div>
         </form>
      </div>
   )
}

export default AddProducts
