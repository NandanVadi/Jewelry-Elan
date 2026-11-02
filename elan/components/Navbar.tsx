'use client';
import {useEffect,useState} from 'react';import {Search,MessageCircle,CalendarDays,Menu,X} from 'lucide-react';import {nav,wa} from '@/data/site';
export default function Navbar(){
 const [s,setS]=useState(false),[o,setO]=useState(false);
 useEffect(()=>{const f=()=>setS(scrollY>60);f();addEventListener('scroll',f,{passive:true});return()=>removeEventListener('scroll',f)},[]);
 return <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${s||o?'bg-ivory text-ink py-3 shadow-[0_1px_0_rgba(33,23,20,.12)]':'text-ivory py-6'}`}>
 <div className="mx-auto max-w-[1600px] px-5 lg:px-12 flex items-center justify-between">
  <a href="/" className="leading-none"><span className="h-display text-2xl lg:text-3xl tracking-[.12em] block">NOOR &amp; CO.</span><span className="text-[9px] tracking-[.3em] block mt-1 opacity-70">JEWELLERS SINCE 1986</span></a>
  <nav className="hidden lg:flex gap-9 label" aria-label="Main">{nav.map(n=><a key={n} href="#" className="link">{n}</a>)}</nav>
  <div className="flex items-center gap-2 lg:gap-6"><Search size={18} className="hidden lg:block" aria-label="Search"/>
   <a href={wa('Hello Noor & Co., I would like to enquire.')} aria-label="WhatsApp" className="grid place-items-center min-h-11 min-w-11"><MessageCircle size={18}/></a>
   <a href="#consult" className="hidden lg:inline-flex items-center gap-2 label border border-current px-5 py-3 hover:bg-gold hover:border-gold hover:text-ink transition-colors"><CalendarDays size={14}/>Appointment</a>
   <button className="lg:hidden min-h-11 min-w-11 grid place-items-center" aria-label="Menu" aria-expanded={o} onClick={()=>setO(!o)}>{o?<X size={22}/>:<Menu size={22}/>}</button></div></div>
 {o&&<nav className="lg:hidden h-[calc(100svh-64px)] px-6 pt-10 flex flex-col bg-burgundy text-ivory -mb-3"><div className="space-y-5">{nav.map(n=><a key={n} href="#" onClick={()=>setO(false)} className="block h-display text-4xl">{n}</a>)}</div>
  <a href="#consult" onClick={()=>setO(false)} className="mt-auto mb-10 label bg-gold text-ink text-center py-5">Book an appointment</a></nav>}</header>;}
