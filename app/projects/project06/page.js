'use client'


import Projects from '@/components/main/projects'
import {motion} from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function Project06() {
    return(
        <Projects>
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
      <div className='sm:px-8 px-4 grow'>
         <div className='text-white font-bold text-3xl ml-6 mt-2'>
          Mechanic Service Application
         </div>

         <div className='text-white ml-6 mt-8 text-base '>
          <div className='flex gap-2'>
            <div className='font-semibold'>Title</div>
            <div className='font-semibold ml-4'>-</div>
            <div className='font-semibold'>Mechanix</div>
          </div>
          <div className='flex gap-2'>
            <div className='font-semibold'>Type</div>
            <div className='font-semibold ml-3'>-</div>
            <div>Mobile Application</div>
          </div>
          <div className='flex gap-2'>
            <div className='font-semibold'>Status</div>
            <div className='font-semibold'>-</div>
            <div>Completed</div>
          </div>
          <div className='flex gap-2'>
            <div className='font-semibold'>Apk</div>
            <div className='font-semibold ml-4'>-</div>
            <div className='font-semibold text-red-600  sm:text-base'>
            <Link href={'https://drive.google.com/drive/folders/1XERAA4b0P8U6M2w37zMm0eQUcnlAClHh?usp=sharing'}>
              Google dirve
                </Link>
            </div>
          </div>
          <div className='my-4'>
          <div className='text-red-600 font-bold'>Description</div>
          <div className='font-semibold sm:text-base text-sm'>An app to provide mechanic service to user on site. It will help reach nearby mechanics in unexpected situation with user vehicle. It have live location to track both user and mechanics.</div>
          </div>
          <div className='text-red-600 font-bold'>Images</div>
          
          <div className='sm:ml-6 mt-4 sm:flex space-y-2 sm:space-y-0 gap-12'>
          <Image
                src="/images/mech_01.jpg"
                width={200}
                height={200}
                className='border-4 border-sky-300 rounded-lg'
                alt="spin"
                />
            
            <Image
                src="/images/mech_02.jpg"
                width={200}
                height={200}
                className='border-4 border-sky-300 rounded-lg'
                alt="spin"
                />
          </div>

          <div className='sm:ml-6 mt-4 sm:flex space-y-2 sm:space-y-0 gap-12'>
          <Image
                src="/images/mech_03.jpg"
                width={200}
                height={200}
                className='border-4 border-sky-300 rounded-lg'
                alt="spin"
                />
            
            <Image
                src="/images/mech_04.jpg"
                width={200}
                height={200}
                className='border-4 border-sky-300 rounded-lg'
                alt="spin"
                />
          </div>
          
          
          <table>
      
          <tbody>
            <tr>
              <td className='font-semibold text-base pb-20'>Features</td>
              <td className='px-2 pb-20'>-</td>
              <td className='font-semibold text-white  sm:text-base text-sm pl-6 pt-6'>
                  <ul className='list-disc'>
                  <li>Tracking mechanics nearby</li>
                  <li>Tracking fuel station nearby</li>
                  <li>Live location sharing for user and mechanic</li>
                  <li>Request sending</li>
                  <li>Rating mechanics</li>
                </ul>
              </td>
            </tr>
            <tr>
            <td className='font-bold text-white  text-base pb-6 pt-6'>Tools used</td>
            <td className='px-2 pb-6 pt-6'>-</td>
            <td className='font-semibold text-white  sm:text-base text-sm pl-6 pt-6'>
            <ul className='list-disc'>
              <li>Flutter</li>
              <li>Google Map Api</li>
            
            </ul>
            </td>
            </tr>
            <tr>
            <td className='font-bold text-white  text-base pt-4'>Source code</td>
            <td className='px-2 pt-4'>-</td>
              <td className='font-semibold text-red-600  sm:text-base text-sm pl-3 pt-4 break-all'>
              <Link href={'https://github.com/Ejaz0000/Mechanix_app.git'}>
              https://github.com/Ejaz0000/Mechanix_app.git
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

    </Projects>
    );
    
};
