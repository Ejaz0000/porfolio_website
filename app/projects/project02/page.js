'use client'


import Projects from '@/components/main/projects'
import {motion} from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function Project02() {
   
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
      Chat Web App
     </div>

     <div className='text-white ml-6 mt-8 text-base '>
      <div className='flex gap-2'>
        <div className='font-semibold'>Title</div>
        <div className='font-semibold ml-4'>-</div>
        <div className='font-semibold'>ChatApp</div>
      </div>
      <div className='flex gap-2'>
        <div className='font-semibold'>Type</div>
        <div className='font-semibold ml-3'>-</div>
        <div>Web Application</div>
      </div>
      <div className='flex gap-2'>
        <div className='font-semibold'>Status</div>
        <div className='font-semibold'>-</div>
        <div>Working on new features</div>
      </div>
      <div className='my-4'>
      <div className='text-red-600 font-bold'>Description</div>
      <div className='font-semibold sm:text-base text-sm'>A chatting website with separete chatroom for mutiple users.</div>
      </div>
      <div className='text-red-600 font-bold'>Images</div>
      <div className='sm:ml-6 mt-4'>
      <Image
            src="/images/chat01.png"
            width={700}
            height={700}
            className='border-4 border-sky-300 rounded-lg'
            alt="spin"
            />
      </div>
      <div className='sm:ml-6 mt-4'>
      <Image
            src="/images/chat02.png"
            width={700}
            height={700}
            className='border-4 border-sky-300 rounded-lg'
            alt="spin"
            />
      </div>
      
      
      
      <table className='mt-3'>
  
      <tbody>
        <tr>
          <td className='font-semibold text-base sm:pb-24 pb-20'>Features</td>
          <td className='px-2 sm:pb-24 pb-20'>-</td>
          <td className='font-semibold text-white  sm:text-base text-sm pl-6 pt-6'>
              <ul className='list-disc'>
              <li>Live Chatroom</li>
              <li>Multiple user communication</li>
            </ul>
          </td>
        </tr>
        <tr>
        <td className='font-bold text-white  text-base sm:pb-6'>Tools used</td>
        <td className='px-2 sm:pb-6'>-</td>
        <td className='font-semibold text-white  sm:text-base text-sm pl-6 pt-6'>
        <ul className='list-disc'>
          <li>React</li>
          <li>Express.js</li>
          <li>Socket.io</li>
        </ul>
        </td>
        </tr>
        <tr>
        <td className='font-bold text-white  text-base pt-4'>Source code</td>
        <td className='px-2 pt-4'>-</td>
          <td className='font-semibold text-red-600  sm:text-base text-sm pl-3 pt-4 break-all'>
          <Link href={'https://github.com/Ejaz0000/chatroom.git'}>
            https://github.com/Ejaz0000/chatroom.git
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
