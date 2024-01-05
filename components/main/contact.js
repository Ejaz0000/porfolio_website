

import Layout from '@/components/main/layout'
import Sidebar from '@/components/main/sidebar'




export default function Contact({children}) {
  const Contactnav = [
    { name: "My Contact", href: "/contact", current: true, delay: 0.5 },
    
  ];
  return (
    <Layout>
      <div className='flex flex-row w-3/4 pl-10'>
      <Sidebar navs = {Contactnav} height = {384}/>
      {children}
    </div>
    </Layout>
  )
}
