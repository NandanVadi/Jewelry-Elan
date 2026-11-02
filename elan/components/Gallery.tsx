'use client';
import {useState} from 'react';import Img from './Img';
export default function Gallery({imgs,name}:{imgs:string[];name:string}){const[i,setI]=useState(0);const[o,setO]=useState('50% 50%');
 return <div><div className="relative aspect-[4/5] overflow-hidden group cursor-zoom-in" onMouseMove={e=>{const r=e.currentTarget.getBoundingClientRect();setO(`${(e.clientX-r.left)/r.width*100}% ${(e.clientY-r.top)/r.height*100}%`)}}>
  <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-[1.8]" style={{transformOrigin:o}}><Img src={imgs[i]} alt={`${name}, view ${i+1}`} priority sizes="55vw"/></div></div>
  <div className="flex gap-3 mt-3">{imgs.map((g,k)=><button key={g} onClick={()=>setI(k)} aria-label={`View ${k+1}`} className={`relative size-20 border ${k===i?'border-burgundy':'border-transparent'}`}><Img src={g} alt="" sizes="80px"/></button>)}</div></div>}
