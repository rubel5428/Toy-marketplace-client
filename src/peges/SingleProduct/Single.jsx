import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

export default function Single() {
   const product = useLoaderData()

   useEffect(() => {
      document.title = `Creative Toy Store | ${product?.name}`
   }, [])
   return (
      <div className="md:flex items-start justify-center py-12 2xl:px-20 md:px-6 px-4">
         <div className="xl:w-2/6 lg:w-2/5 w-80 md:block hidden">
            <img
               className="w-full"
               alt="image of a girl posing"
               src={product?.photo_url}
            />
         </div>
         <div className="md:hidden">
            <img
               className="w-full"
               alt="image of a girl posing"
               src={product?.photo_url}
            />
         </div>
         <div className="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">
            <div className="border-b border-gray-200 pb-6">
               <h1 className="lg:text-2xl text-xl font-semibold lg:leading-6 leading-7 text-gray-800 dark:text-white mt-2">
                  {product?.name}
               </h1>
            </div>
            <div className="py-4 border-b border-gray-200 flex items-center justify-between">
               <p className="text-base leading-4 text-gray-800 dark:text-gray-300">
                  Created By
               </p>
               <div className="flex items-center justify-center">
                  <p className="text-sm leading-none text-gray-600 dark:text-gray-300">
                     {product?.authorName}
                  </p>
               </div>
            </div>
            <div className="py-4 border-b border-gray-200 flex items-center justify-between">
               <p className="text-base leading-4 text-gray-800 dark:text-gray-300">
                  Created By Email
               </p>
               <div className="flex items-center justify-center">
                  <p className="text-sm leading-none text-gray-600 dark:text-gray-300 mr-3">
                     {product?.email}
                  </p>
               </div>
            </div>

            <div className="py-4 border-b border-gray-200 flex items-center justify-between">
               <p className="text-base leading-4 text-gray-800 dark:text-gray-300">
                  Price
               </p>
               <div className="flex items-center justify-center">
                  <p className="text-sm leading-none text-gray-600 dark:text-gray-300 mr-3">
                     ${product?.price}
                  </p>
               </div>
            </div>

            <div className="py-4 border-b border-gray-200 flex items-center justify-between">
               <p className="text-base leading-4 text-gray-800 dark:text-gray-300">
                  Quantity
               </p>
               <div className="flex items-center justify-center">
                  <p className="text-sm leading-none text-gray-600 dark:text-gray-300 mr-3">
                     {product?.quantity}
                  </p>
               </div>
            </div>
            <div className="py-4 border-b border-gray-200 flex items-center justify-between">
               <p className="text-base leading-4 text-gray-800 dark:text-gray-300">
                  Rating
               </p>
               <div className="flex items-center justify-center">
                  <p className="text-sm leading-none text-gray-600 dark:text-gray-300 mr-3">
                     {product?.ratting} out of 5
                  </p>
               </div>
            </div>

            <div>
               <h2 className="text-xl -mb-5 mt-8">Description:</h2>
               <p className="xl:pr-48 text-base lg:leading-tight leading-normal text-gray-600 dark:text-gray-300 mt-7">
                  {product?.description}
               </p>
            </div>
         </div>
      </div>
   )
}
