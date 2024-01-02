'use client'

import Link from 'next/link'
import {motion} from 'framer-motion'
import { slideFromRight } from '@/utils/motion';
import { useEffect } from 'react';

var shouldAnimate = true;

export default function Navbar() {

  useEffect(() => {
        
    shouldAnimate=false
    
 }, []);

    return(
      
        <motion.div 
        initial={shouldAnimate ? { width: 0, opacity: 0 }:{}}
        animate={{width: 1050,opacity: 1}}
        transition={{ delay: 0.5, duration: 0.5}}
        className='border-4 border-rgb rounded-full w-3/4 px-2 py-2 mt-4'>
          <div className='border-8 border-outer-rgb w-full rounded-full'>
          <div className='border-2 border-red-600 w-full rounded-full px-5 py-3 flex flex-row justify-center'>
          <motion.div 
          initial={shouldAnimate ? { opacity: 0 }:{}}
          animate={{ opacity: 1,}}
          transition={{ delay: 1 }}
          className="flex space-x-12 ">
            <Link href={'/'} className = 'border-2 border-sky-300 text-gray-100 hover:bg-red-500 rounded-full px-3 py-2 text-sm font-medium '>
              Home
            </Link>
            <Link href={'#'} className = 'border-2 border-sky-300 text-gray-100 hover:bg-red-500 rounded-full px-3 py-2 text-sm font-medium'>
              About
            </Link>
            <Link href={'#'} className = 'border-2 border-sky-300 text-gray-100 hover:bg-red-500 rounded-full px-3 py-2 text-sm font-medium'>
              Skills
            </Link>
            <Link href={'/projects'} className = 'border-2 border-sky-300 text-gray-100 hover:bg-red-500 rounded-full px-3 py-2 text-sm font-medium'>
              Projects
            </Link>
          </motion.div>
          </div>
          </div>
        </motion.div>
      
    );
    
};
