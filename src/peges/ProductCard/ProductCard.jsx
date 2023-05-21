import { useContext } from 'react'
import { AuthContext } from '../../providers/AuthProviders'
import { Link } from 'react-router-dom'

const ProductCard = ({ data }) => {
   const { user } = useContext(AuthContext)
   const { _id, photo_url, price, name, ratting } = data

   return (
      <div className="card w-ful bg-base-100 shadow-xl">
         <figure>
            <img src={photo_url} alt="Shoes" />
         </figure>
         <div className="card-body">
            <h3 className="text-2xl text-center font-bold">{ratting}</h3>
            <h2 className="card-title">{name}</h2>
            <p>${price}</p>
            <div className="card-actions justify-end">
               <Link to={`/products/${_id}`} className="btn btn-primary">
                  View Details
               </Link>
            </div>
         </div>
      </div>
   )
}

export default ProductCard
