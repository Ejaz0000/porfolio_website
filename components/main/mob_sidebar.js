'use client'


import Link from "next/link"
import {motion} from 'framer-motion'
import { useState,useEffect } from "react";
import Image from "next/image";
import { usePathname } from 'next/navigation'



export default function MoblieSidebar({navs,width}) {

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
        
        className='mt-2 sm:hidden'>
           <motion.div 
           
           initial={{ opacity: 0}}
            animate={{ opacity: 1}}
            transition={{ delay: 0.8 }}
           className="p-1 border-mobile_sidebar  border-4 rounded-t-full rounded-b-full w-fit">
            <motion.div
             initial={{ width: 100 }}
             animate={{ width: width }}
             transition={{ delay: 0.8,duration: 0.8 }}
             className={` pl-0 pr-0 py-0  border-4 border-red-600 rounded-t-full rounded-b-full flex flex-row ${justify} bg-slate-500 bg-opacity-20`}>
                
            {isVisible && 
            <motion.nav 
            
            className='flex flex-row gap-0 py-0 ml-2'>
                
                {navs.map((item)=>(
                    <motion.div
                    key={item.name}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay:item.delay,duration: 0.6 }}
                    className='border-2  hover:bg-red-500  rounded-full py-1 px-1 ml-3 my-2 text-sm'
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
            class="w-12 h-12 text-white rounded-full mt-0  inline-flex items-center justify-center  "> 
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
      if(width==240){
        sidebar = "mobile_sidebar_A"
      }
      else if(width==310){
        sidebar = "mobile_sidebar_B"
      }
      else{
        sidebar = "mobile_sidebar_C"
      }
      return (
        <aside className='mt-2 sm:hidden'>
          <div className=' p-1 border-mobile_sidebar  border-4 rounded-t-full rounded-b-full w-fit'>
            <motion.div 
            
            className={` pl-0 pr-0 pt-0 ${sidebar}  border-4 border-red-600 rounded-t-full rounded-b-full flex flex-row justify-between bg-slate-500 bg-opacity-20`}>
                
          
            <nav 
            
            className='flex flex-row gap-0 ml-2'>
                
                {navs.map((item)=>(
                    <div key={item.name} className='border-2  hover:bg-red-500  rounded-full py-1 px-1 ml-3 my-2 text-sm'
                >
                    <Link href={item.href} className="text-gray-100">
                    {item.name}
                </Link>
                </div>
                ))}
                
            </nav>
             

            <div className="w-12 h-12 text-white rounded-full mt-0  inline-flex items-center justify-center  "> 
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
