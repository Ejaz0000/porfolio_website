'use client'


import Projects from '@/components/main/projects'
import {motion} from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function project01() {
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
          E-Commerce Website
         </div>

         <div className='text-white ml-6 mt-8 text-base '>
          <div className='flex gap-2'>
            <div className='font-semibold'>Title</div>
            <div className='font-semibold ml-4'>-</div>
            <div className='font-semibold'>E-com site</div>
          </div>
          <div className='flex gap-2'>
            <div className='font-semibold'>Type</div>
            <div className='font-semibold ml-3'>-</div>
            <div>Web Application</div>
          </div>
          <div className='flex gap-2'>
            <div className='font-semibold'>Status</div>
            <div className='font-semibold'>-</div>
            <div>Ongoing</div>
          </div>
          <div className='my-4'>
          <div className='text-red-600 font-bold'>Description</div>
          <div className='font-semibold sm:text-base text-sm'>A e-comerce website for clothing with admin panel.</div>
          </div>
          <div className='text-red-600 font-bold'>Images</div>
          <div className='sm:ml-6 mt-4'>
          <Image
                src="/images/ec_3.png"
                width={700}
                height={700}
                className='border-4 border-sky-300 rounded-lg'
                alt="spin"
                />
          </div>
          <div className='sm:ml-6 mt-4'>
          <Image
                src="/images/ec_4.png"
                width={700}
                height={700}
                className='border-4 border-sky-300 rounded-lg'
                alt="spin"
                />
          </div>
          <div className='sm:ml-6 mt-4'>
          <Image
                src="/images/ec_5.png"
                width={700}
                height={700}
                className='border-4 border-sky-300 rounded-lg'
                alt="spin"
                />
          </div>
          
          <table>
      
          <tbody>
            <tr>
              <td className='font-semibold text-base pb-0'>Features</td>
              <td className='px-2 pb-0'>-</td>
              <td className='font-semibold text-white  sm:text-base text-sm pl-6 pt-6'>
                  {/* <ul className='list-disc'>
                  <li>Multiple clubs</li>
                  <li>Admin panel to manage president information</li>
                  <li>Chat box for every club</li>
                  <li>Calender and notice board</li>
                  <li>Search box</li>
                  <li>Club joinning request handled by president</li>
                </ul> */}
                * Workin on process *
              </td>
            </tr>
            <tr>
            <td className='font-bold text-white  text-base sm:pb-6'>Tools used</td>
            <td className='px-2 sm:pb-6'>-</td>
            <td className='font-semibold text-white  sm:text-base text-sm pl-6 pt-6'>
            <ul className='list-disc'>
            <li>Next.js</li>
          <li>Tailwind Css</li>
          <li>Google authentication</li>
            </ul>
            </td>
            </tr>
            <tr>
            <td className='font-bold text-white  text-base pt-4'>Source code</td>
            <td className='px-2 pt-4'>-</td>
              <td className='font-semibold text-red-600  sm:text-base text-sm pl-3 pt-4 break-all'>
              <Link href={'https://github.com/Ejaz0000/E-com-admin.git'}>
              https://github.com/Ejaz0000/E-com-admin.git
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
