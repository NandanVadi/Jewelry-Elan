'use client';
import {motion,useReducedMotion} from 'framer-motion';
export default function Reveal({children,className='',delay=0}:{children:React.ReactNode;className?:string;delay?:number}){
 const r=useReducedMotion();
 return <motion.div className={className} initial={r?false:{opacity:0,y:40}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:'-10%'}} transition={{duration:1.1,delay,ease:[.22,1,.36,1]}}>{children}</motion.div>;}
