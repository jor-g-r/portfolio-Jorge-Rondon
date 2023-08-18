
import { SVGAttributes } from 'react'
import { motion, TargetAndTransition } from 'framer-motion';

interface IconArrowDownProps {
  animate?: TargetAndTransition;
}

const IconArrowDown: React.FC<IconArrowDownProps> = ({ animate }) => { 

  return (
    <>
   
 <motion.svg 
     width="49"
     height="61"
     xmlns="http://www.w3.org/2000/svg" viewBox="0 0 49 61" fill="none">
    
    
    <g filter="url(#filter0_d_327_27)">

       <motion.path 
       d="M23.2256 2.99431L23.2256 54.5698"
       stroke="#FFA216"
       strokeWidth="2"
       strokeLinejoin="round"
       initial={{ scaleY: 1 }}
       animate={animate} 
       transition={{ duration: 0.3 }}  />

        <motion.path 
         d="M43.4416 28.7968L23.2167 54.57L2.99192 28.7968"
         stroke="#FFA216"
         strokeWidth="2"
         initial={{ translateY: 0 }}
         animate={animate} 
         transition={{ duration: 0.3 }}  />
    </g>
  <defs>
    <filter id="filter0_d_327_27" x="0.2052" y="0.994308" width="48.0231" height="59.1955" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dx="1" dy="1"/>
      <feGaussianBlur stdDeviation="1.5"/>
      <feComposite in2="hardAlpha" operator="out"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.95 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_327_27"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_327_27" result="shape"/>
    </filter>
  </defs>
 </motion.svg>



    </>
  )
}

export default IconArrowDown;