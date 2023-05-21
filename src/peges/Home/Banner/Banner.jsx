import img1 from '../../../assets/image/img1.png'
import img2 from '../../../assets/image/img2.png'
import img3 from '../../../assets/image/img3.png'

const Banner = () => {
   return (
      <>
         <div className="carousel w-full rounded-lg">
            <div id="slide1" className="carousel-item relative w-full h-2/3">
               <img src={img1} className="w-full rounded-lg" />
               <div className="absolute flex top-1/4 left-20 md:top-1/3 md:left-44">
                  <div className="text-center space-y-2 md:space-y-8">
                     <h3
                        data-aos="fade-in"
                        className="text-xl md:text-5xl text-[#8C4C2E]"
                     >
                        Baby Shop
                     </h3>
                     <h2 className="text-2xl md:text-7xl text-emerald-200">
                        Favourite Toys
                     </h2>
                     <button
                        data-aos="flip-up"
                        className="btn btn-secondary md:text-3xl"
                     >
                        Shop now
                     </button>
                  </div>
               </div>
               <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide3" className="btn btn-circle">
                     ❮
                  </a>
                  <a href="#slide2" className="btn btn-circle">
                     ❯
                  </a>
               </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full h-2/3">
               <img src={img2} className="w-full rounded-lg" />
               <div className="absolute flex top-1/4 left-20 md:top-1/3 md:left-32">
                  <div className="text-center space-y-2 md:space-y-8">
                     <h3 className="text-xl md:text-5xl text-[#8C4C2E]">
                        Baby Shop
                     </h3>
                     <h2 className="text-2xl md:text-7xl text-emerald-200">
                        Favourite Toys
                     </h2>
                     <button className="btn btn-secondary md:text-3xl">
                        Shop now
                     </button>
                  </div>
               </div>
               <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide1" className="btn btn-circle">
                     ❮
                  </a>
                  <a href="#slide3" className="btn btn-circle">
                     ❯
                  </a>
               </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full h-2/3">
               <img src={img3} className="w-full rounded-lg" />
               <div className="absolute flex flex-row-reverse top-1/4 right-20 md:top-1/3 md:right-44">
                  <div className="text-center space-y-2 md:space-y-8">
                     <h3 className="text-xl md:text-5xl text-[#8C4C2E]">
                        Baby Shop
                     </h3>
                     <h2 className="text-2xl md:text-7xl text-indigo-400">
                        Favourite Toys
                     </h2>
                     <button className="btn btn-secondary md:text-3xl">
                        Shop now
                     </button>
                  </div>
               </div>
               <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide2" className="btn btn-circle">
                     ❮
                  </a>
                  <a href="#slide1" className="btn btn-circle">
                     ❯
                  </a>
               </div>
            </div>
         </div>
      </>
   )
}

export default Banner
