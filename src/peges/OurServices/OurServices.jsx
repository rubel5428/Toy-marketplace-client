import img1 from '../../assets/service/service1.png'
import img2 from '../../assets/service/service2.png'
import img3 from '../../assets/service/service3.png'
import img4 from '../../assets/service/service4.png'

const OurServices = () => {
   return (
      <div className="my-14 pl-5">
         <h2 className="text-5xl pl-5 pb-5 md:text-center">Our Services</h2>
         <div className="space-y-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            <div className="flex gap-4 items-center">
               <div>
                  <img
                     className="border-2 border-pink-400 rounded-full p-4"
                     src={img1}
                     alt=""
                  />
               </div>
               <div>
                  <h2 className="text-xl font-bold">Free Shipping</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur</p>
               </div>
            </div>
            <div className="flex gap-4 items-center">
               <div>
                  <img
                     className="border-2 border-pink-400 rounded-full p-4"
                     src={img2}
                     alt=""
                  />
               </div>
               <div>
                  <h2 className="text-xl font-bold">Returns Policy</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur</p>
               </div>
            </div>
            <div className="flex gap-4 items-center">
               <div>
                  <img
                     className="border-2 border-pink-400 rounded-full p-4"
                     src={img3}
                     alt=""
                  />
               </div>
               <div>
                  <h2 className="text-xl font-bold">Gift Cards</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur</p>
               </div>
            </div>
            <div className="flex gap-4 items-center">
               <div>
                  <img
                     className="border-2 border-pink-400 rounded-full p-4"
                     src={img4}
                     alt=""
                  />
               </div>
               <div>
                  <h2 className="text-xl font-bold">Best Quality</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur</p>
               </div>
            </div>
         </div>
      </div>
   )
}

export default OurServices
