import ProductCard from '../ProductCard/ProductCard'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'
import '../../assets/css/shopbycategory.css'
import { useEffect, useState } from 'react'
const ShopByCategory = () => {
   const [categories, setCategories] = useState([])
   const [products, setProduct] = useState([])
   const [loading, setLoading] = useState(true)
   const [productLoading, setProductLoading] = useState(true)

   useEffect(() => {
      const fetchData = async () => {
         try {
            const response = await fetch(
               `https://assignment-11-server-three-green.vercel.app/categories`
            )
            const data = await response.json()
            setCategories(data)
            if (data?.length > 0) {
               fatchToy(data[0]._id)
            }
            setLoading(false)
         } catch (error) {
            setLoading(false)
            console.error(error)
         }
      }

      fetchData()
   }, [])

   const fatchToy = async (id) => {
      setProductLoading(true)
      try {
         const response = await fetch(
            `https://assignment-11-server-three-green.vercel.app/product-cat/${id}`
         )
         const data = await response.json()
         setProduct(data)
      } catch (error) {
         console.error(error)
      } finally {
         setProductLoading(false)
      }
   }

   return (
      <div>
         <h2
            data-aos="slide-right"
            className="md:text-5xl text-xl text-center font-bold my-6"
         >
            Shop By Category
         </h2>

         {loading ? (
            <p className="dark:text-gray-100 text-2xl">Loading...</p>
         ) : (
            <Tabs>
               <TabList>
                  {categories.map((category) => (
                     <Tab
                        onClick={() => fatchToy(category?._id)}
                        key={category?._id}
                     >
                        {category?.name}
                     </Tab>
                  ))}
               </TabList>

               {categories.map((el) => (
                  <TabPanel key={el._id}>
                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-5">
                        {productLoading ? (
                           <p className="dark:text-gray-100 text-2xl">
                              Loading.....
                           </p>
                        ) : products?.length > 0 ? (
                           products.map((data) => (
                              <ProductCard
                                 key={data._id}
                                 data={data}
                              ></ProductCard>
                           ))
                        ) : (
                           <p className="dark:text-gray-100 text-2xl">
                              Not Found!
                           </p>
                        )}
                     </div>
                  </TabPanel>
               ))}
            </Tabs>
         )}
      </div>
   )
}

export default ShopByCategory
