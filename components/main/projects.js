'use client'

import Layout from '@/components/main/layout'
import Sidebar from '@/components/main/sidebar'
import Image from 'next/image'
import {motion} from 'framer-motion'
import MoblieSidebar from './mob_sidebar'


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

  const mob_nav = [
    { name: "1", href: "/projects/project01", current: true, delay: 0.5 },
    { name: "2", href: "/projects/project02",current: false, delay: 0.8 },
    { name: "3", href: "/projects/project03",current: false, delay: 1 },
    { name: "4", href: "/projects/project04", current: false, delay: 1.2 },
    { name: "5", href: "/projects/project05", current: false, delay: 1.4 },
    { name: "6", href: "/projects/project06", current: false, delay: 1.6 },
    { name: "7", href: "/projects/project07", current: false, delay: 1.8 },
    
  ];
  return (
    <Layout>
      <div className='flex sm:flex-row flex-col w-3/4 sm:pl-10'>
      <MoblieSidebar navs = {mob_nav} width = {345}/>
      <Sidebar navs = {Projnav} height = {660}/>
      {children}
    </div>
    </Layout>
  )
}