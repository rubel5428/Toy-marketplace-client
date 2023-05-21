import { useEffect, useState } from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import { toast } from 'react-toastify'

export default function AllToyes() {
   const loadedProducts = useLoaderData()

   const [products, setProducts] = useState([...loadedProducts])
   const searchToyHandler = async (e) => {
      e.preventDefault()
      const form = e.target

      const search = form.search.value
      try {
         const response = await fetch(
            `https://assignment-11-server-three-green.vercel.app/products?limit=20&search=${search}`
         )
         const data = await response.json()

         if (data?.length < 1) {
            toast.warn('Not Found')
         }
         setProducts(data)
      } catch (error) {
         console.error(error)
      }
   }

   useEffect(() => {
      document.title = 'Creative Toy Store | All Toys'
   }, [])

   return (
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
         <div className="w-1/3 mb-5">
            <form onSubmit={searchToyHandler}>
               <label
                  htmlFor="default-search"
                  className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
               >
                  Search
               </label>
               <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                     <svg
                        aria-hidden="true"
                        className="w-5 h-5 text-gray-500 dark:text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                     >
                        <path
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           strokeWidth={2}
                           d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                     </svg>
                  </div>
                  <input
                     type="search"
                     id="default-search"
                     className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                     placeholder="Search Name"
                     name="search"
                     required
                  />
                  <button
                     type="submit"
                     className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                     Search
                  </button>
               </div>
            </form>
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
               {products.map((product) => (
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
                           to={`/products/${product?._id}`}
                           className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        >
                           Details
                        </Link>
                     </td>
                  </tr>
               ))}
            </tbody>
         </table>
      </div>
   )
}
