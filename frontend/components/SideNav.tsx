import Link from "next/link";
import React, { useEffect, useState , useRef } from "react";
import { FcAddImage } from "react-icons/fc";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import {GiExitDoor , GiFruitTree , GiPlantsAndAnimals} from 'react-icons/gi'
import {BsWater } from 'react-icons/bs'
import {FaTrashRestore} from 'react-icons/fa'
import {AiFillSetting} from 'react-icons/ai'
import {MdOutlineMenuOpen , MdOutlineMenu} from 'react-icons/md'
import wallpaper from "../public/LogoIcon.png";
import {CgCloseO} from 'react-icons/cg'
export default function SideNav() {
  const [open , setopen]  = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    let animationside = document.getElementById("animationside")
    let false2 = true



    
   
   
  })

  
  return (
   <>
    <div className="rounded-l-md bg-gray-800 h-full w-[13rem] flex overflow-auto sidenav  sidenavhidden  z-0 absolute right-0 ">
        <div className="z-50 text-white mt-4 space-y-12 mr-2 ">
        <div>
          <span className="flex justify-center">
        <img src = './LogoIcon.png' className="w-14 h-14 flex justify-center" />
        </span>
        <div className="space-y-12  ">
         
          <button className="flex justify-end w-full py-1  mr-10 mt-12 hover:bg-slate-500 rounded-lg border-white sidenav focus:bg-white/20 focus:rounded-r-none focus:border-r-[2px] ">
          <HiOutlineMagnifyingGlass className="mx-2 w-8 h-8"/>

            <h1 className="mx-3 mt-1 cairo_semibold_title text-xl">ابحث</h1>
          </button>
          <button className="flex justify-end w-full py-1 mx-auto mt-12 hover:bg-slate-500 rounded-lg border-white sidenav focus:bg-white/20 focus:rounded-r-none focus:border-r-[2px] ">
          <FcAddImage className="mx-2 w-8 h-8"/>

            <h1 className="mx-3 mt-1 cairo_semibold_title text-xl">اصنع مجموعة</h1>
          </button>
          <div className="divide-y">
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            
            
          </div>
            <div className="mt-12">
            <button className="flex justify-end w-full py-1 mx-auto mt-12 hover:bg-slate-500 rounded-lg border-white sidenav focus:bg-white/20 focus:rounded-r-none focus:border-r-[2px] ">
          <BsWater className="mx-2 w-8 h-8"/>

            <h1 className="mx-3 mt-1 cairo_semibold_title text-xl">ساعد المحيط</h1>
          </button>
            <button className="flex justify-end w-full py-1 mx-auto mt-12 hover:bg-slate-500 rounded-lg border-white sidenav focus:bg-white/20 focus:rounded-r-none focus:border-r-[2px] ">
          <GiFruitTree className="mx-2 w-8 h-8"/>

            <h1 className="mx-3 mt-1 cairo_semibold_title text-xl">ساعد الاشجار</h1>
          </button>
          <button className="flex justify-end w-full py-1 mx-auto mt-12 hover:bg-slate-500 rounded-lg border-white sidenav focus:bg-white/20 focus:rounded-r-none focus:border-r-[2px] ">
          <GiPlantsAndAnimals className="mx-6 w-8 h-8"/>

            <h1 className="mx-3 mt-1 cairo_semibold_title text-xl">ساعد البيئة</h1>
          </button>
            </div>
        </div>
        
        </div>
        <div className="divide-y">
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            
            
          </div>
        <button className="flex justify-end w-full py-1 mx-auto mt-12 hover:bg-slate-500 rounded-lg border-white sidenav focus:bg-white/20 focus:rounded-r-none focus:border-r-[2px] ">
          <AiFillSetting className="mx-2 w-8 h-8"/>

            <h1 className="mx-3 mt-1 cairo_semibold_title text-lg">ألاعادادت</h1>
          </button>
          <Link href={'/homepage'}>
       <button className="flex justify-end w-full py-1 mx-auto mt-12 hover:bg-slate-500 rounded-lg border-white sidenav focus:bg-white/20 focus:rounded-r-none focus:border-r-[2px] ">
          <GiExitDoor className="mx-2 w-8 h-8"/>

            <h1 className="mx-3 mt-1 cairo_semibold_title text-lg">تسجيل الخروج</h1>
          </button>
       </Link>
          
        </div>
       
       
    </div>
    <div style={{display: open ? "none" : "block" , transition : open ? '0ms' : '100s'}} className ='absolute right-0	'>
        <>
        <section className="flex justify-end p-5">
          <MdOutlineMenu className="h-10 w-10" onClick={()=>{setopen(!open)}}/>
        </section>
        </>
    </div>
       <section  className="flex justify-end animationside" id="animationside">
          
       <div className=" bg-gray-800 h-screen  overflow-auto animationside" style={{width: open ? "100%" : "0"}} id="animationside">
     <div className="z-50 text-white mt-4 space-y-12 mr-2 " >
     <div style={{display: open ? "block" : "none"}}>
       <span className="flex justify-between">
       <CgCloseO className="h-10 w-10 te-white ml-2 mt-1" onClick={()=>{setopen(!open)}}/>

     <img src = './LogoIcon.png' className="w-14 h-14 flex justify-center" />

     </span>
     <div className="space-y-12  " style={{display: open ? "block" : "none"}}>
      
       <button className="flex justify-end w-full py-1  mr-10 mt-12 hover:bg-slate-500 rounded-lg border-white sidenav focus:bg-white/20 focus:rounded-r-none focus:border-r-[2px] ">
       <HiOutlineMagnifyingGlass className="mx-2 w-8 h-8"/>

         <h1 className="mx-3 mt-1 cairo_semibold_title text-xl">ابحث</h1>
       </button>
       <button className="flex justify-end w-full py-1 mx-auto mt-12 hover:bg-slate-500 rounded-lg border-white sidenav focus:bg-white/20 focus:rounded-r-none focus:border-r-[2px] ">
       <FcAddImage className="mx-2 w-8 h-8"/>

         <h1 className="mx-3 mt-1 cairo_semibold_title text-xl">اصنع مجموعة</h1>
       </button>
       <div className="divide-y">
         <p></p>
         <p></p>
         <p></p>
         <p></p>
         
         
       </div>
         <div className="mt-12">
         <button className="flex justify-end w-full py-1 mx-auto mt-12 hover:bg-slate-500 rounded-lg border-white sidenav focus:bg-white/20 focus:rounded-r-none focus:border-r-[2px] ">
       <BsWater className="mx-2 w-8 h-8"/>

         <h1 className="mx-3 mt-1 cairo_semibold_title text-xl">ساعد المحيط</h1>
       </button>
         <button className="flex justify-end w-full py-1 mx-auto mt-12 hover:bg-slate-500 rounded-lg border-white sidenav focus:bg-white/20 focus:rounded-r-none focus:border-r-[2px] ">
       <GiFruitTree className="mx-2 w-8 h-8"/>

         <h1 className="mx-3 mt-1 cairo_semibold_title text-xl">ساعد الاشجار</h1>
       </button>
       <button className="flex justify-end w-full py-1 mx-auto mt-12 hover:bg-slate-500 rounded-lg border-white sidenav focus:bg-white/20 focus:rounded-r-none focus:border-r-[2px] ">
       <GiPlantsAndAnimals className="mx-6 w-8 h-8"/>

         <h1 className="mx-3 mt-1 cairo_semibold_title text-xl">ساعد البيئة</h1>
       </button>
         </div>
     </div>
     
     </div>
     <div className="divide-y">
         <p></p>
         <p></p>
         <p></p>
         <p></p>
         
         
       </div>
    <div style={{display: open ? "block" : "none"}}>
    <button  className="flex justify-end w-full py-1 mx-auto mt-12 hover:bg-slate-500 rounded-lg border-white sidenav focus:bg-white/20 focus:rounded-r-none focus:border-r-[2px] ">
       <AiFillSetting className="mx-2 w-8 h-8"/>

         <h1 className="mx-3 mt-1 cairo_semibold_title text-lg">ألاعادادت</h1>
       </button>
    <Link href={'/homepage'}>
    <button className="flex justify-end w-full py-1 mx-auto mt-12 hover:bg-slate-500 rounded-lg border-white sidenav focus:bg-white/20 focus:rounded-r-none focus:border-r-[2px] ">
       <GiExitDoor className="mx-2 w-8 h-8"/>

         <h1 className="mx-3 mt-1 cairo_semibold_title text-lg">تسجيل الخروج</h1>
       </button>
    </Link>
    </div>
       
     </div>
    
    
 </div>
     </section>
    
    </>
  );
}
