import { useEffect } from 'react'
import OurServices from '../../OurServices/OurServices'
import ShopByCategory from '../../ShopByCategory/ShopByCategory'
import TrendingsProducts from '../../TrendingProducts/TrendingsProducts'
import Banner from '../Banner/Banner'
import Gallary from '../Gallary/Gallary'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Home = () => {
   useEffect(() => {
      AOS.init({
         // Global settings:
         disable: false,
         startEvent: 'DOMContentLoaded',
         initClassName: 'aos-init',
         animatedClassName: 'aos-animate',
         useClassNames: false,
         disableMutationObserver: false,
         debounceDelay: 50,
         throttleDelay: 99,
         offset: 120,
         delay: 0,
         duration: 400,
         easing: 'ease',
         once: false,
         mirror: false,
         anchorPlacement: 'top-bottom',
      })
      AOS.refresh()

      document.title = 'Creative Toy Store | Home'
   }, [])
   return (
      <div className="mt-4">
         <Banner></Banner>
         <Gallary></Gallary>
         <ShopByCategory />
         <TrendingsProducts></TrendingsProducts>
         <OurServices></OurServices>
      </div>
   )
}

export default Home
