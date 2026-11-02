'use client';
import Image from 'next/image';import {useState} from 'react';
export default function Img({src,alt,className='',priority=false,sizes='100vw'}:{src:string;alt:string;className?:string;priority?:boolean;sizes?:string}){
 const [bad,setBad]=useState(false);
 if(bad) return <div className={`absolute inset-0 bg-ink ${className}`} role="img" aria-label={alt}/>;
 return <Image src={src} alt={alt} fill sizes={sizes} priority={priority} onError={()=>setBad(true)} className={`object-cover ${className}`}/>;}
