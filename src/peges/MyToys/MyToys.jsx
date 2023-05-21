import { Link } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../providers/AuthProviders'
import { toast } from 'react-toastify'
export default function MyToys() {
   const { user } = useContext(AuthContext)
   const [products, setProducts] = useState([])
   const [loading, setLoading] = useState(true)

   const fetchToys = async (order = null) => {
      try {
         const response = await fetch(
            `https://assignment-11-server-three-green.vercel.app/my-toys?email=${user?.email}&sort=${order}`
         )
         const data = await response.json()
         setProducts(data)
         setLoading(false)
      } catch (error) {
         setLoading(false)
         console.error(error)
      }
   }
   useEffect(() => {
      document.title = 'Creative Toy Store | My Toys'
      if (user) {
         fetchToys()
      }
   }, [user])

   const handleDelete = (id) => {
      if (confirm('are you to delete this product?')) {
         fetch(
            `https://assignment-11-server-three-green.vercel.app/product/${id}`,
            {
               method: 'DELETE',
            }
         )
            .then((res) => res.json())
            .then((data) => {
               if (data.deletedCount > 0) {
                  toast.success('product Delete Successfully')
                  const hasProducts = products.filter(
                     (product) => product._id != id
                  )
                  setProducts(hasProducts)
               }
            })
      }
   }

   if (loading) {
      return <p className="dark:text-gray-100  text-3xl">Loading.....</p>
   } else {
      return (
         <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <div className="flex justify-end mb-4">
               <div className="w-2/12">
                  <label
                     htmlFor="sorting"
                     className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                     Sort By Price
                  </label>
                  <select
                     id="sorting"
                     onChange={(e) => fetchToys(e.target.value)}
                     className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                     <option value="asc">Low To High</option>
                     <option value="desc">High To Low</option>
                  </select>
               </div>
            </div>
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
               <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                     <th scope="col" className="px-6 py-3">
                        Created By
                     </th>
                     <th scope="col" className="px-6 py-3">
                        Title
                     </th>
                     <th scope="col" className="px-6 py-3">
                        Sub Category
                     </th>
                     <th scope="col" className="px-6 py-3">
                        Price
                     </th>
                     <th scope="col" className="px-6 py-3">
                        Quantity
                     </th>
                     <th scope="col" className="px-6 py-3">
                        Action
                     </th>
                  </tr>
               </thead>
               <tbody>
                  {products?.length > 0 ? (
                     products.map((product) => (
                        <tr
                           key={product?._id}
                           className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
                        >
                           <th
                              scope="row"
                              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                           >
                              {product?.authorName}
                           </th>
                           <td className="px-6 py-4">{product?.name}</td>
                           <td className="px-6 py-4">{product?.category}</td>
                           <td className="px-6 py-4">${product?.price}</td>
                           <td className="px-6 py-4">{product?.quantity}</td>
                           <td className="px-6 py-4">
                              <Link
                                 to={`/update-toy/${product?._id}`}
                                 className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                              >
                                 Edit
                              </Link>
                              <button
                                 onClick={() => handleDelete(product?._id)}
                                 className="font-medium text-red-500 hover:underline ml-2"
                              >
                                 Delete
                              </button>
                           </td>
                        </tr>
                     ))
                  ) : (
                     <tr>
                        <td>
                           <p className="dark:text-gray-100 text-3xl py-5">
                              Not Found!
                           </p>
                        </td>
                     </tr>
                  )}
               </tbody>
            </table>
         </div>
      )
   }
}
