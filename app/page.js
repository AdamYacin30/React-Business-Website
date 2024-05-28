'use client'
import Navbar from '@/src/utils/components/Navbar/Navbar';
import './page.css'
import Hero from '@/src/utils/components/Hero/Hero';
import BrandingVideo from '@/src/utils/components/BrandingVideo/BrandingVideo';
import WhatWeDo from '@/src/utils/components/WhatWeDo/WhatWeDo';
import OurDiff from '@/src/utils/components/OurDiff/OurDiff';
import {motion, useAnimation} from 'framer-motion'
import HowItWorks from '@/src/utils/components/HowItWorks/HowItWorks';
import WhoWeHelp from '@/src/utils/components/WhoWeHelp/WhoWeHelp';
import Testimonials from '@/src/utils/components/Testimonials/Testimonials';
import Footer from '@/src/utils/components/Footer/Footer';
export default function Home() {
  const controls = useAnimation()
  return (
    <motion.div className="app" animate={controls}>
      <Navbar/>
      <Hero/>
      <BrandingVideo/>
      <WhatWeDo/>

      <motion.div
      onViewportEnter={()=> controls.start({
        backgroundColor: "var(--secondary-color)"
      })} 
      onViewportLeave={()=> controls.start({
        backgroundColor: "white", 
      })
    }
    viewport={{amount: 0.4}}
      >
        <OurDiff/>
      </motion.div>


        <HowItWorks/>

        <motion.div
          onViewportEnter={()=> 
          controls.start({
          backgroundColor: "var(--primary-color)"
        })} 
        onViewportLeave={()=> 
        controls.start({
          backgroundColor: "white", 
        })
      }
      viewport={{amount: 0.4}}
        >
        <WhoWeHelp/>
        </motion.div>

        <Testimonials/>

        <Footer/>
    </motion.div>
    
    
    
    
  );
}
