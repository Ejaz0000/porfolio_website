

import Layout from '@/components/main/layout'
import Sidebar from '@/components/main/sidebar'
import MoblieSidebar from './mob_sidebar';




export default function Skill({children}) {
  const Skillnav = [
    { name: "My Skills", href: "/skills", current: true, delay: 0.5 },
    
  ];
  return (
    <Layout>
      <div className='flex sm:flex-row flex-col sm:w-3/4 w-full sm:pl-10 px-2'>
      <MoblieSidebar navs = {Skillnav} width = {180}/>
      <Sidebar navs = {Skillnav} height = {384}/>
      {children}
    </div>
    </Layout>
  )
}
