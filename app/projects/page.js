'use client'

import Layout from '@/components/main/layout'
import Sidebar from '@/components/main/sidebar'
import Image from 'next/image'
import {motion} from 'framer-motion'


export default function Home() {
  
  const Projnav = [
    { name: "Project-01", href: "/", current: true, delay: 0.5 },
    { name: "Project-02", href: "#",current: false, delay: 0.8 },
    { name: "Project-03", href: "#",current: false, delay: 1 },
    { name: "Project-04", href: "#", current: false, delay: 1.2 },
    
  ];
  return (
    <Layout>
      <div className='flex flex-row w-3/4 pl-10'>
      <Sidebar navs = {Projnav} height = {500}/>
      <motion.main
    initial={{opacity:0}}
    animate={{opacity:1}} 
    transition={{ delay: 2,duration: 0.5 }}
    className='grow m-2  rounded-xl flex flex-col'>
      
      <Image
                src="/images/corner1.png"
                width={100}
                height={100}
                alt="spin"
                />
      <div className='text-white px-8 grow'>
        My projects
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
    </div>
    </Layout>
  )
}
