import Footer from "./footer"
import Intro from "./intro"
import Navbar from "./navbar"


export default function Layout({children}) {
    return(
        <div className="min-h-screen flex flex-col sm:items-center px-2 sm:px-0 bg-gray-950">
         <Intro />
        <Navbar />
        {children}
        {/* <Footer/> */}
        </div>
    )
};
