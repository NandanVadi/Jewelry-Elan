'use client';
import {createContext,useContext,useState} from 'react';import {get} from '@/data/products';
type Line={slug:string;size:string;qty:number};
type S={cart:Line[];wish:string[];cartOpen:boolean;searchOpen:boolean;add:(s:string,size?:string,q?:number)=>void;setQty:(s:string,size:string,q:number)=>void;remove:(s:string,size:string)=>void;toggleWish:(s:string)=>void;setCartOpen:(b:boolean)=>void;setSearchOpen:(b:boolean)=>void;subtotal:number;count:number};
const C=createContext<S>(null as unknown as S);export const useStore=()=>useContext(C);
export function StoreProvider({children}:{children:React.ReactNode}){
 const[cart,setCart]=useState<Line[]>([]);const[wish,setWish]=useState<string[]>([]);const[cartOpen,setCartOpen]=useState(false);const[searchOpen,setSearchOpen]=useState(false);
 const add=(slug:string,size='One size',qty=1)=>{setCart(c=>c.some(l=>l.slug===slug&&l.size===size)?c.map(l=>l.slug===slug&&l.size===size?{...l,qty:l.qty+qty}:l):[...c,{slug,size,qty}]);setCartOpen(true)};
 const setQty=(slug:string,size:string,q:number)=>setCart(c=>c.map(l=>l.slug===slug&&l.size===size?{...l,qty:Math.max(1,q)}:l));
 const remove=(slug:string,size:string)=>setCart(c=>c.filter(l=>!(l.slug===slug&&l.size===size)));
 const toggleWish=(s:string)=>setWish(w=>w.includes(s)?w.filter(x=>x!==s):[...w,s]);
 const subtotal=cart.reduce((t,l)=>t+(get(l.slug)?.price||0)*l.qty,0);const count=cart.reduce((t,l)=>t+l.qty,0);
 return <C.Provider value={{cart,wish,cartOpen,searchOpen,add,setQty,remove,toggleWish,setCartOpen,setSearchOpen,subtotal,count}}>{children}</C.Provider>}
