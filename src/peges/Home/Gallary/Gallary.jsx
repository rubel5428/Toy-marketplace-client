import gi1 from '../../../assets/gallary/g1.png'
import gi2 from '../../../assets/gallary/g2.png'
import gi3 from '../../../assets/gallary/g3.png'
import gi4 from '../../../assets/gallary/g4.png'
import gi5 from '../../../assets/gallary/g5.png'
import gi6 from '../../../assets/gallary/g6.png'

const Gallary = () => {
   return (
      <div className="mt-4">
         <h2
            data-aos="slide-left"
            className="md:text-5xl text-xl text-center py-5 font-bold text-pink-400"
         >
            Our Outstanding Teddys
         </h2>
         <div
            data-aos="zoom-in-up"
            className=" grid grid-cols-1 md:grid-cols-4 gap-4 bg-base-100 shadow-xl"
         >
            <img className="shadow-xl" src={gi1} alt="" />
            <img className="shadow-xl" src={gi2} alt="" />
            <img className="shadow-xl" src={gi3} alt="" />
            <img className="shadow-xl" src={gi4} alt="" />
            <img className="shadow-xl" src={gi5} alt="" />
            <img className="shadow-xl" src={gi6} alt="" />
            <img className="shadow-xl" src={gi4} alt="" />
            <img className="shadow-xl" src={gi3} alt="" />
         </div>
      </div>
   )
}

export default Gallary
