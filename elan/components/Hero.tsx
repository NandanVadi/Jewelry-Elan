'use client';
import {motion,useScroll,useTransform} from 'framer-motion';import Img from './Img';import {IMG} from '@/data/site';
export default function Hero(){
 const {scrollY}=useScroll();const y=useTransform(scrollY,[0,800],[0,140]);
 return <section className="grain relative h-[100svh] min-h-[660px] overflow-hidden bg-burgundy text-ivory">
  <motion.div style={{y}} className="absolute inset-0 scale-110"><motion.div initial={{scale:1.12,opacity:0}} animate={{scale:1,opacity:1}} transition={{duration:2.6,delay:1,ease:'easeOut'}} className="absolute inset-0"><Img src={IMG.hero} alt="Indian bride wearing traditional gold and polki jewellery" priority/></motion.div></motion.div>
  <div className="absolute inset-0 bg-gradient-to-r from-burgundy/90 via-burgundy/50 to-transparent"/>
  <div className="relative z-10 h-full mx-auto max-w-[1600px] px-5 lg:px-12 flex flex-col justify-end pb-14 lg:pb-24">
   <p className="label text-gold mb-5 flex items-center gap-4"><span className="h-px w-10 bg-gold"/>Jewellers since 1986</p>
   <h1 className="h-display text-[clamp(3rem,8.6vw,8.4rem)] max-w-4xl">{['A legacy','crafted for','generations.'].map((l,i)=><span key={l} className="block overflow-hidden pb-2"><motion.span className="block" initial={{y:'110%'}} animate={{y:0}} transition={{duration:1.2,delay:1.4+i*.15,ease:[.22,1,.36,1]}}>{l}</motion.span></span>)}</h1>
   <p className="mt-6 max-w-sm text-lg text-ivory/85">Three generations of craftsmanship, trust and timeless jewellery.</p>
   <div className="mt-9 flex flex-col sm:flex-row gap-4"><a href="#collection" className="label bg-ivory text-ink px-8 py-5 text-center min-h-12 hover:bg-champagne transition-colors">Explore collection</a><a href="#showroom" className="label border border-ivory/60 px-8 py-5 text-center min-h-12 hover:bg-ivory hover:text-ink transition-colors">Visit our showroom</a></div></div></section>;}
