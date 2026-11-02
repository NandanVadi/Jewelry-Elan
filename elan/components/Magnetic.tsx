'use client';
import {useRef} from 'react';
export default function Magnetic({children,className=''}:{children:React.ReactNode;className?:string}){const r=useRef<HTMLDivElement>(null);
 return <div ref={r} className={`inline-block transition-transform duration-200 ${className}`} onMouseMove={e=>{const b=r.current!.getBoundingClientRect();r.current!.style.transform=`translate(${(e.clientX-b.left-b.width/2)*.25}px,${(e.clientY-b.top-b.height/2)*.35}px)`}} onMouseLeave={()=>{r.current!.style.transform=''}}>{children}</div>}
