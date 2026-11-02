'use client';
import {useEffect,useState} from 'react';import Lenis from 'lenis';import {AnimatePresence,motion} from 'framer-motion';
export default function Shell({children}:{children:React.ReactNode}){
 const [load,setLoad]=useState(true);const [cur,setCur]=useState({x:-50,y:-50,t:''});
 useEffect(()=>{const t=setTimeout(()=>setLoad(false),1500);
  const l=new Lenis({lerp:.1});let id=0;const raf=(n:number)=>{l.raf(n);id=requestAnimationFrame(raf)};id=requestAnimationFrame(raf);
  const mv=(e:MouseEvent)=>{const el=(e.target as HTMLElement).closest('[data-cur]') as HTMLElement|null;setCur({x:e.clientX,y:e.clientY,t:el?.dataset.cur||''})};
  window.addEventListener('mousemove',mv);return()=>{clearTimeout(t);cancelAnimationFrame(id);l.destroy();window.removeEventListener('mousemove',mv)}},[]);
 return <>
 <AnimatePresence>{load&&<motion.div exit={{y:'-100%'}} transition={{duration:.9,ease:[.76,0,.24,1]}} className="fixed inset-0 z-[100] bg-ink text-ivory grid place-items-center">
  <div className="text-center"><div className="d text-7xl">ÉLAN</div><motion.div initial={{scaleX:0}} animate={{scaleX:1}} transition={{duration:1}} className="h-px bg-acid mt-4 origin-left"/></div></motion.div>}</AnimatePresence>
 <div className="cur pointer-events-none fixed z-[90] -translate-x-1/2 -translate-y-1/2 rounded-full border border-ivory bg-ivory/10 mix-blend-difference grid place-items-center text-ivory text-[10px] tracking-widest font-semibold transition-[width,height] duration-300"
  style={{left:cur.x,top:cur.y,width:cur.t?72:14,height:cur.t?72:14}}>{cur.t}</div>{children}</>;}
