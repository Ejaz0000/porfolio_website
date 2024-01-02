import Intro from "./intro"
import Navbar from "./navbar"


export default function Layout({children}) {
    return(
        <div className="min-h-screen flex flex-col items-center bg">
         <Intro />
        <Navbar />
        {children}
        </div>
    )
};
