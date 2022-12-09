 import React from 'react'
import BottomPick from '../components/BottomPick'
 import MainNav from '../components/MainNav'
 export default function mainpage() {
   return (
    <>
        <section className='w-[100%] h-screen bg-slate-200 '>
            <MainNav/>
            <BottomPick/>
        </section>
    </>
   )
 }
 