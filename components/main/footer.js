

import Link from 'next/link'
import {motion} from 'framer-motion'
import { slideFromRight } from '@/utils/motion';
import { useEffect } from 'react';



export default function Footer() {


    return(
        <footer className="bg-gray-800 text-white p-4 w-full mt-6">
      <div className="container mx-auto text-center">
        {/* Your footer content goes here */}
        &copy; 2024 Your Website Name
      </div>
    </footer>
    );
    
};
