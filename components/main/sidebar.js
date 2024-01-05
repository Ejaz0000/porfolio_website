'use client'


import Link from "next/link"
import {motion} from 'framer-motion'
import { useState,useEffect } from "react";
import Image from "next/image";
import { usePathname } from 'next/navigation'



export default function Sidebar({navs,height}) {

    const [isVisible, setIsVisible] = useState(false);
    const [justify, setjustify] = useState("justify-end");

    var sidebarAnimate;

    const pathname = usePathname()

    if(pathname.includes('/webinfo')||pathname.includes('/myinfo')||pathname.includes('/project01')||pathname.includes('/project02')||pathname.includes('/project03')||pathname.includes('/project04')||pathname.includes('/project05')||pathname.includes('/project06')||pathname.includes('/project07')){
      sidebarAnimate = false;
    }else{
      sidebarAnimate = true;
    }

    
    

  useEffect(() => {

    if(sidebarAnimate){
    
    const timeout = setTimeout(() => {
      setIsVisible(true);
      setjustify("justify-between")

    }, 1500); 

    
    return () => clearTimeout(timeout);
  }
  }, []);


   if(sidebarAnimate == true){
    return (
        <motion.aside
        initial={{ opacity: 0}}
        animate={{ opacity: 1}}
        transition={{ delay: 0.8 }}
        
        className='mt-2 '>
           <motion.div 
           
           initial={{ opacity: 0}}
            animate={{ opacity: 1}}
            transition={{ delay: 0.8 }}
           className="p-2 border-sidebar  border-4 rounded-t-full rounded-b-full">
            <motion.div
             initial={{ height: 200 }}
             animate={{ height: height }}
             transition={{ delay: 0.8,duration: 0.8 }}
             className={` pl-0 pr-0 pt-20  border-4 border-red-600 rounded-t-full rounded-b-full flex flex-col ${justify} bg-slate-500 bg-opacity-20`}>
                
            {isVisible && 
            <motion.nav 
            
            className='flex flex-col gap-4'>
                
                {navs.map((item)=>(
                    <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay:item.delay,duration: 0.6 }}
                    className='border-2 border-r-0  hover:bg-red-500  rounded-l-full py-2 pl-3 pr-0 ml-4'
                >
                    <Link href={item.href} className="text-gray-100">
                    {item.name}
                </Link>
                </motion.div>
                ))}
                
            </motion.nav>
             }

            <motion.div
            animate={{ rotate: 360 }} 
            transition={{ delay: 0.8,duration: 1 }} 
            class="w-36 h-36 text-white rounded-full mt-6  inline-flex items-center justify-center  "> 
             <Image
                src="/images/spin.png"
                width={500}
                height={500}
                alt="spin"
                />
           </motion.div> 
           </motion.div>
           </motion.div>
        </motion.aside>
    )
            }
    else{
      var sidebar;
      if(height==384){
        sidebar = "sidebar_A"
      }
      else{
        sidebar = "sidebar_B"
      }
      return (
        <aside className='mt-2'>
          <div className=' p-2 border-sidebar  border-4 rounded-t-full rounded-b-full'>
            <motion.div 
            
            className={` pl-0 pr-0 pt-20 ${sidebar}  border-4 border-red-600 rounded-t-full rounded-b-full flex flex-col justify-between`}>
                
          
            <nav 
            
            className='flex flex-col gap-4'>
                
                {navs.map((item)=>(
                    <div className='border-2 border-r-0  hover:bg-red-500  rounded-l-full py-2 pl-3 pr-0 ml-4'
                >
                    <Link href={item.href} className="text-gray-100">
                    {item.name}
                </Link>
                </div>
                ))}
                
            </nav>
             

            <div className="w-36 h-36 text-white rounded-full mt-6  inline-flex items-center justify-center  "> 
             <Image
                src="/images/spin.png"
                width={500}
                height={500}
                alt="spin"
                />
           </div> 
           </motion.div>
           </div>
        </aside>
    )
    }
    
};
