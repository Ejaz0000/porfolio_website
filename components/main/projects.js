'use client'

import Layout from '@/components/main/layout'
import Sidebar from '@/components/main/sidebar'
import Image from 'next/image'
import {motion} from 'framer-motion'


export default function Projects({children}) {
  
  const Projnav = [
    { name: "Project-01", href: "/projects/project01", current: true, delay: 0.5 },
    { name: "Project-02", href: "/projects/project02",current: false, delay: 0.8 },
    { name: "Project-03", href: "/projects/project03",current: false, delay: 1 },
    { name: "Project-04", href: "/projects/project04", current: false, delay: 1.2 },
    { name: "Project-05", href: "/projects/project05", current: false, delay: 1.4 },
    { name: "Project-06", href: "/projects/project06", current: false, delay: 1.6 },
    { name: "Project-07", href: "/projects/project07", current: false, delay: 1.8 },
    
  ];
  return (
    <Layout>
      <div className='flex flex-row w-3/4 pl-10'>
      <Sidebar navs = {Projnav} height = {660}/>
      {children}
    </div>
    </Layout>
  )
}