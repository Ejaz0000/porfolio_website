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
        animate={shouldAnimate ?{width: "80%",opacity: 1}:{}}
        transition={{ delay: 0.5, duration: 0.5}}
        className='border-4 border-rgb rounded-full w-4/5 px-2 py-2 mt-4'>
          <div className='border-8 border-outer-rgb w-full rounded-full'>
          <div className='border-2 border-red-600 w-full rounded-full px-5 py-3 flex flex-row justify-center bg-slate-500 bg-opacity-30'>
          <motion.div 
          initial={shouldAnimate ? { opacity: 0 }:{}}
          animate={{ opacity: 1,}}
          transition={{ delay: 1 }}
          className="flex sm:space-x-12 space-x-4 ">
            <Link href={'/'} className = 'border-2 border-sky-300 text-gray-100 hover:bg-red-500 rounded-full sm:px-3 sm:py-2 px-2 py-1 text-sm font-medium '>
              Home
            </Link>
            <Link href={'/contact'} className = 'border-2 border-sky-300 text-gray-100 hover:bg-red-500 rounded-full sm:px-3 sm:py-2 px-2 py-1 text-sm font-medium'>
              Contact
            </Link>
            <Link href={'/skills'} className = 'border-2 border-sky-300 text-gray-100 hover:bg-red-500 rounded-full sm:px-3 sm:py-2 px-2 py-1 text-sm font-medium'>
              Skills
            </Link>
            <Link href={'/projects'} className = 'border-2 border-sky-300 text-gray-100 hover:bg-red-500 rounded-full sm:px-3 sm:py-2 px-2 py-1 text-sm font-medium'>
              Projects
            </Link>
          </motion.div>
          </div>
          </div>
        </motion.div>
      
    );
    
};
