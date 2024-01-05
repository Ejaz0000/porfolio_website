

import Layout from '@/components/main/layout'
import Sidebar from '@/components/main/sidebar'




export default function Home({children}) {
  const Homenav = [
    { name: "My info", href: "/Home/myinfo", current: true, delay: 0.5 },
    { name: "Web info", href: "/Home/webinfo",current: false, delay: 0.8 },
  ];
  return (
    <Layout>
      <div className='flex flex-row w-3/4 pl-10'>
      <Sidebar navs = {Homenav} height = {384}/>
      {children}
    </div>
    </Layout>
  )
}
