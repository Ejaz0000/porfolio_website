import {motion} from 'framer-motion'


export const slideFromRight ={
    
  hidden: { width: 0, opacity: 0 },
  visible: {
    width: 1050,
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.5,
    },
  },

}


// const variants = {
//     visible: { opacity: 1 },
//     hidden: { opacity: 0 },
//   }
