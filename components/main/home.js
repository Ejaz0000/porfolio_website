

import Layout from '@/components/main/layout'
import Sidebar from '@/components/main/sidebar'
import MoblieSidebar from './mob_sidebar';




export default function Home({children}) {
  const Homenav = [
    { name: "My info", href: "/Home/myinfo", current: true, delay: 0.5 },
    { name: "Web info", href: "/Home/webinfo",current: false, delay: 0.8 },
  ];
  return (
    <Layout>
      <div className='flex sm:flex-row flex-col sm:w-3/4 w-4/5 sm:pl-10 px-2'>
        <MoblieSidebar navs = {Homenav} width = {240}/>
      <Sidebar navs = {Homenav} height = {384}/>
      {children}
    </div>
    </Layout>
  )
}
