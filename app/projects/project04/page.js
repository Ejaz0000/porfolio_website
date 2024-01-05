'use client'


import Projects from '@/components/main/projects'
import {motion} from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function Project04() {
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
  <div className='px-8 grow'>
     <div className='text-white font-bold text-3xl ml-6 mt-2'>
      Web games platform
     </div>

     <div className='text-white ml-6 mt-8 text-base '>
      <div className='flex gap-2'>
        <div className='font-semibold'>Title</div>
        <div className='font-semibold ml-4'>-</div>
        <div className='font-semibold'>Storyteller</div>
      </div>
      <div className='flex gap-2'>
        <div className='font-semibold'>Type</div>
        <div className='font-semibold ml-3'>-</div>
        <div>Web Game</div>
      </div>
      <div className='flex gap-2'>
        <div className='font-semibold'>Status</div>
        <div className='font-semibold'>-</div>
        <div>Ongoing</div>
      </div>
      <div className='my-4'>
      <div className='text-red-600 font-bold'>Description</div>
      <div className='font-semibold'>A web platform with 3 text based games. first one is a murder mystery stroy based game. Second one is a shoping game and third one is traveling texed based game.</div>
      </div>
      <div className='text-red-600 font-bold'>Images</div>
      <div className='ml-6 mt-4'>
      <Image
            src="/images/story_01.png"
            width={700}
            height={700}
            className='border-4 border-sky-300 rounded-lg'
            alt="spin"
            />
      </div>
      <div className='ml-6 mt-4'>
      <Image
            src="/images/story_02.png"
            width={700}
            height={700}
            className='border-4 border-sky-300 rounded-lg'
            alt="spin"
            />
      </div>
      <div className='ml-6 mt-4'>
      <Image
            src="/images/story_03.png"
            width={700}
            height={700}
            className='border-4 border-sky-300 rounded-lg'
            alt="spin"
            />
      </div>
      <div className='ml-6 mt-4'>
      <Image
            src="/images/story_04.png"
            width={700}
            height={700}
            className='border-4 border-sky-300 rounded-lg'
            alt="spin"
            />
      </div>
      <div className='ml-6 mt-4'>
      <Image
            src="/images/story_05.png"
            width={700}
            height={700}
            className='border-4 border-sky-300 rounded-lg'
            alt="spin"
            />
      </div>
      <table>
  
      <tbody>
        <tr>
          <td className='font-semibold text-base pb-6'>Features</td>
          <td className='px-2 pb-6'>-</td>
          <td className='font-semibold text-white  text-base pl-6 pt-6'>
              <ul className='list-disc'>
              <li>3 games</li>
              <li>User authentication</li>
              <li>Interactive games</li>
            </ul>
          </td>
        </tr>
        <tr>
        <td className='font-bold text-white  text-base pb-6'>Tools used</td>
        <td className='px-2 pb-6'>-</td>
        <td className='font-semibold text-white  text-base pl-6 pt-6'>
        <ul className='list-disc'>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript and PHP</li>
        </ul>
        </td>
        </tr>
        <tr>
        <td className='font-bold text-white  text-base pt-4'>Source code</td>
        <td className='px-2 pt-4'>-</td>
          <td className='font-semibold text-red-600  text-base pl-3 pt-4'>
          <Link href={'https://github.com/Ejaz0000/Storyteller.git'}>
          https://github.com/Ejaz0000/Storyteller.git
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
