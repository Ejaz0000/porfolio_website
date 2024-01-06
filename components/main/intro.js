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
         <div className='flex flex-row justify-between w-3/4 sm:px-9 mt-8 ml-2 sm:ml-0'>
          <div className='flex flex-col'>
             <motion.div
              initial={shouldAnimate ? { opacity: 0 } : {}}
              animate={{opacity:1}}
              transition={{ delay: 0.5,duration:0.5}}
  
              className='text-sky-300 sm:text-6xl text-3xl font-bold'>
              WELCOME
             </motion.div>
             <motion.div
              initial={shouldAnimate ? { opacity: 0 } : {}}
              animate={{opacity:1}}
              transition={{ delay: 0.5,duration:0.5}}
             
             className='text-red-500 sm:text-4xl text-2xl font-bold'>
              
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
