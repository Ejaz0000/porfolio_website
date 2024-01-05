'use client'


import Home from '@/components/main/home'
import {motion} from 'framer-motion'
import Image from 'next/image'

export default function Myinfo() {
    return(
        <Home>
        <motion.main
    initial={{opacity:0}}
    animate={{opacity:1}} 
    transition={{ delay: 2,duration: 0.5 }}
    className='grow m-2  rounded-xl flex flex-col bg-slate-500 bg-opacity-5'>
      
      <Image
                src="/images/corner1.png"
                width={100}
                height={100}
                alt="spin"
                />
      <div className='px-8 grow'>
         <div className='text-white font-bold text-3xl ml-6 mt-2'>
          My Information
         </div>

         <div className='text-white ml-6 mt-8 text-base font-semibold'>
          Hi! I am <span className='text-red-600 font-bold'>Ejaz Ahmed</span>. As a dedicated and aspiring software developer, I am passionate about my skill in Computer science engineering to create innovative and user-friendly software. Along with hands-on experience in web development, I enjoy complex problem solving with logical thinking and have a good practice of UI UX designing.

Committed to continuous learning, I am eager to contribute to dynamic software development projects and make a meaningful impact in industry.
         </div>
        </div>

        <div className='flex flex-row justify-end'>
        <Image
                src="/images/corner2.png"
                width={100}
                height={100}
                alt="spin"
                />
      </div>
        
    </motion.main>

    </Home>
    );
    
};
