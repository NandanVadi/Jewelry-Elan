'use client';
import Link from 'next/link';import {Heart,Plus} from 'lucide-react';import Img from './Img';import {useStore} from './Store';import {Product,inr} from '@/data/products';
export default function ProductCard({p,ratio='aspect-[4/5]',cls=''}:{p:Product;ratio?:string;cls?:string}){const{add,wish,toggleWish}=useStore();const w=wish.includes(p.slug);
 return <article className={`group relative ${cls}`}><Link href={`/product/${p.slug}`} data-cur="VIEW" className="block"><div className={`relative overflow-hidden bg-chrome/40 ${ratio}`}>
  <Img src={p.img} alt={p.name} sizes="(min-width:1024px) 30vw,50vw" className="transition-all duration-[1400ms] group-hover:scale-105"/>
  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"><Img src={p.gallery[1]} alt="" sizes="30vw"/></div>
  {p.isNew&&<span className="absolute top-3 left-3 lb bg-acid px-2 py-1">New</span>}{!p.stock&&<span className="absolute top-3 left-3 lb bg-ink text-ivory px-2 py-1">Sold out</span>}</div></Link>
  <button onClick={()=>toggleWish(p.slug)} aria-pressed={w} aria-label={`Save ${p.name}`} className="absolute top-2 right-2 size-11 grid place-items-center"><Heart size={20} className={`transition-transform ${w?'fill-ink scale-110':''}`}/></button>
  <div className="mt-3 flex justify-between gap-3"><div><h3 className="d text-xl lg:text-2xl">{p.name}</h3><p className="text-sm text-ink/60 mt-1">{p.material}</p></div><p className="font-semibold text-sm pt-1">{inr(p.price)}</p></div>
  <button disabled={!p.stock} onClick={()=>add(p.slug,p.cat==='Rings'?'7':'One size')} className="lb mt-3 w-full border border-ink py-3 min-h-11 flex items-center justify-center gap-2 hover:bg-ink hover:text-ivory disabled:opacity-40 transition-colors"><Plus size={14}/>Quick add</button></article>}
