import type {Metadata} from 'next';import {Anton,Manrope} from 'next/font/google';import './globals.css';import Shell from '@/components/Shell';import {StoreProvider} from '@/components/Store';import {Header,BottomNav,CartDrawer,SearchOverlay} from '@/components/Chrome';
const d=Anton({subsets:['latin'],weight:'400',variable:'--display'});const s=Manrope({subsets:['latin'],variable:'--sans'});
export const metadata:Metadata={title:'ÉLAN | Wear your energy',description:'Jewellery for the way you live, move and express yourself.'};
export default function L({children}:{children:React.ReactNode}){return <html lang="en" className={`${d.variable} ${s.variable}`}><body><StoreProvider><Shell><Header/>{children}<BottomNav/><CartDrawer/><SearchOverlay/></Shell></StoreProvider></body></html>}
