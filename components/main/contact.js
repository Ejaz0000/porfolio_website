

import Layout from '@/components/main/layout'
import Sidebar from '@/components/main/sidebar'
import MoblieSidebar from './mob_sidebar';




export default function Contact({children}) {
  const Contactnav = [
    { name: "My Contact", href: "/contact", current: true, delay: 0.5 },
    
  ];
  return (
    <Layout>
      <div className='flex sm:flex-row flex-col sm:w-3/4 w-full sm:pl-10 px-2'>
      <MoblieSidebar navs = {Contactnav} width = {180}/>

      <Sidebar navs = {Contactnav} height = {384}/>
      {children}
    </div>
    </Layout>
  )
}
