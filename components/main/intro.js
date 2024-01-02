'use client'

import {motion} from 'framer-motion'
import Typewriter from "typewriter-effect";
import { useEffect } from 'react';


var shouldAnimate = true;


export default function Intro() {

   
      useEffect(() => {
        
         shouldAnimate=false
         
      }, []);


      return(
         <div className='flex flex-row justify-between w-3/4 px-9 mt-8'>
          <div className='flex flex-col'>
             <motion.div
              initial={shouldAnimate ? { opacity: 0 } : {}}
              animate={{opacity:1}}
              transition={{ delay: 0.5,duration:0.5}}
  
              className='text-sky-300 text-6xl font-bold'>
              WELCOME
             </motion.div>
             <motion.div
              initial={shouldAnimate ? { opacity: 0 } : {}}
              animate={{opacity:1}}
              transition={{ delay: 0.5,duration:0.5}}
             
             className='text-red-500 text-4xl font-bold'>
              
             <Typewriter
             onInit={(typewriter) => {
              typewriter.typeString('TO MY PROFILE')
                
                .pauseFor(3000)
                .deleteAll()
               
                .start();
            }}
              options={{
                 strings: ['TO MY PROFILE'],
                 autoStart: true,
                 loop: true,
              }}
              />
             </motion.div>
          </div>
             
          {/* <motion.div
              initial={shouldAnimate ? { opacity: 0 } : {}}
              animate={{opacity:1}}
              transition={{ delay: 3, duration: 0.5}}
              className='text-white'>
              Image
             </motion.div> */}
   
         </div>
      )
    
    
};
