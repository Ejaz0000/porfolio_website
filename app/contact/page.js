'use client'

import Link from 'next/link'
import {motion} from 'framer-motion'
import Image from 'next/image'
import Contact from '@/components/main/contact'

export default function Contactinfo() {
    return(
        <Contact>
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
      <div className='sm:px-8 grow'>
         <div className='text-white font-bold text-3xl ml-6 mt-2'>
          Contact Information
         </div>

         <div className='sm:ml-6 ml-4 mt-8 text-white'>
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
          <td className='font-bold text-white text-base '>E-mail</td>
          <td className='px-2 '>-</td>
          <td className='font-semibold text-white  sm:text-base text-sm sm:pl-2'>ejahmed999@gmail.com</td>
        </tr>
        <tr>
        <td className='font-bold text-white  text-base pt-6'>Phone</td>
        <td className='px-2 pt-6'>-</td>
        <td className='font-semibold text-white  sm:text-base text-sm sm:pl-2 pt-6'>
        +8801819146100
        </td>
        </tr>
        <tr>
        <td className='font-bold text-white  text-base pt-6'>Lindin</td>
        <td className='px-2 pt-6'>-</td>
          <td className='font-semibold text-red-500  sm:text-base text-sm sm:pl-3 pt-6'>
          <Link href={'https://www.linkedin.com/in/ejaz-ahmed-9939b027b/'}>
           Lindin Profile
            </Link>
          </td>
        </tr>
        <tr>
        <td className='font-bold text-white  text-base pt-6'>FaceBook</td>
        <td className='px-2 pt-6'>-</td>
          <td className='font-semibold text-red-500  sm:text-base text-sm sm:pl-3 pt-6'>
          <Link href={'https://www.facebook.com/profile.php?id=100017262407131'}>
          FaceBook Profile
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

    </Contact>
    );
    
};
