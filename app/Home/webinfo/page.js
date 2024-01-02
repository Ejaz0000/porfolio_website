'use client'

import Link from 'next/link'
import Home from '@/components/main/home'
import {motion} from 'framer-motion'
import Image from 'next/image'

export default function Webinfo() {
    return(
        <Home>
        <motion.main
    initial={{opacity:0}}
    animate={{opacity:1}} 
    transition={{ delay: 2,duration: 0.5 }}
    className='grow m-2  rounded-xl flex flex-col'>
      
      <Image
                src="/images/corner1.png"
                width={100}
                height={100}
                alt="spin"
                />
      <div className='px-8 grow'>
         <div className='text-white font-bold text-3xl ml-6 mt-2'>
          Website Information
         </div>

         <div className='ml-6 mt-8 text-white'>
          {/* <div className='text-white text-base flex gap-2'>
            <div className='font-bold text-red-500'> Objectve - </div>
            <div className='font-semibold'> hbjhbj jhjhbjbjbh hjbhjbhjbh</div>
          </div>
          <div className='text-white text-base flex gap-2'>
            <div className='font-bold'> Tools uesed - </div>
            <div className='font-semibold'> hbjhbj jhjhbjbjbh hjbhjbhjbh</div>
          </div>
          <div className='text-white text-base flex gap-2'>
            <div className='font-bold'> Source code - </div>
            <div className='font-semibold'> hbjhbj jhjhbjbjbh hjbhjbhjbh</div>
          </div> */}

          <table>
  
      <tbody>
        <tr>
          <td className='font-bold text-red-500 text-base pb-6'>Objectve</td>
          <td className='px-2 pb-6'>-</td>
          <td className='font-semibold text-white  text-base pl-2'>This website contains Information about me and my software development skills. It is also showcasing the projects that i have created.</td>
        </tr>
        <tr>
        <td className='font-bold text-white  text-base pb-6'>Tools used</td>
        <td className='px-2 pb-6'>-</td>
        <td className='font-semibold text-white  text-base pl-6 pt-6'>
        <ul className='list-disc'>
          <li>Next.js</li>
          <li>Tailwind css</li>
          <li>Framer Motion</li>
        </ul>
        </td>
        </tr>
        <tr>
        <td className='font-bold text-white  text-base'>Source code</td>
        <td className='px-2'>-</td>
          <td className='font-semibold text-red-500  text-base pl-3'>
          <Link href={'/'}>
              Github
            </Link>
          </td>
        </tr>
      </tbody>
    </table>

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
