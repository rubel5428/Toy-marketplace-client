import { useLoaderData } from 'react-router-dom'
import ProductCard from '../ProductCard/ProductCard'

const TrendingsProducts = () => {
   const products = useLoaderData()
   return (
      <div>
         <h2 className="md:text-5xl text-xl text-center font-bold my-6">
            Trendings Products
         </h2>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {products.map((data) => (
               <ProductCard key={data._id} data={data}></ProductCard>
            ))}
         </div>
      </div>
   )
}

export default TrendingsProducts
