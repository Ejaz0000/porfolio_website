

import Layout from '@/components/main/layout'
import Sidebar from '@/components/main/sidebar'




export default function Skill({children}) {
  const Skillnav = [
    { name: "My Skills", href: "/skills", current: true, delay: 0.5 },
    
  ];
  return (
    <Layout>
      <div className='flex flex-row w-3/4 pl-10'>
      <Sidebar navs = {Skillnav} height = {384}/>
      {children}
    </div>
    </Layout>
  )
}
