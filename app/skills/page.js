'use client'

import Link from 'next/link'
import {motion} from 'framer-motion'
import Image from 'next/image'

import Skill from '@/components/main/skill'

export default function Skillinfo() {
    return(
        <Skill>
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
          Skills
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
          {/* <td className='font-bold text-white text-base '>Skills</td>
          <td className='px-2 '>-</td> */}
          <td className='font-semibold text-white  text-base pl-4'>
          <ul className='list-disc'>
          <li>Back End Web Developing</li>
          <li>Front End Web Developing</li>
          <li>Android Development</li>
          <li>Proficient in JavaScript</li>
          <li>Skilled in Java</li>
          <li>Familiar with C, C++, PHP and Dart</li>
          <li>Have a good practice of Next.js and React.js and Flutter </li>
          <li>Basic knowledge of Laravel </li>
          <li>Familiar with MongoDB, Firebase and MySql </li>
          
        </ul>
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

    </Skill>
    );
    
};
