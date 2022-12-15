import React from 'react'
import { GiRamProfile } from "react-icons/gi";
import NavBar from '../components/NavBar';
import Link from 'next/link'
import { MdCancel } from 'react-icons/md';
import {AiFillPicture} from 'react-icons/ai'
import Input from '../components/Input';
import CreateInput from '../components/CreateInput';
export default function creategroup() {
  return (
    <>
      <div  className='bg-white h-screen text-black'>
       <nav className='mx-[4rem]'>
       <div>
      <div className="py-4 flex items-center justify-between relative z-[1] ">
        <Link href={"/mainpage"}>
          <button className="rounded-xl flex border-2 bg-white hover:brightness-75 active:brightness-50  text-black px-3 py-1">
          <MdCancel className='w-4 mx-2 mt-[4px] h-4'/>

            <h1 className='cairo_semibold_title'>الغاء</h1>
          </button>
        </Link>
        <ul className=" space-x-3 sm:space-x-10  flex items-center font-light text-md md:text-lg">
          
          
         <Link href={'/homepage'}>
         <div className=" flex items-center space-x-1">
            <p className="cairo_semibold_title text-black"> ساعد الارض</p>
            <img src="./LogoIcon.png" className="w-10 h-10 mt-1" />
          </div>
         </Link>
        </ul>
      </div>
    </div>
       </nav>
     <section className='mx-[14rem] mt-[5rem]'>
     <div>
     <div dir='rtl' className='flex justify-center'>
      <GiRamProfile className=' hover:text-black/40 active:text-black/80 w-[12rem] h-[12rem] outline'/>
      
      </div>
      <div className='flex my-12 justify-evenly'>
        <div>
        <CreateInput iclassName='px-12' placeholder='اسم المجموعة' required  type={'text'} max = {30} min = {10}/>

        </div>
        <div>
        <CreateInput iclassName='px-12' placeholder='اسم المجموعة' required  type={'text'} max = {30} min = {10}/>

        </div>
        <div>
        <CreateInput iclassName='px-12' placeholder='اسم المجموعة' required  type={'text'} max = {30} min = {10}/>

        </div>
        </div> 
        <div className='flex my-12 justify-evenly'>
        <div>
        <CreateInput iclassName='px-12' placeholder='اسم المجموعة' required  type={'text'} max = {30} min = {10}/>

        </div>
        <div>
        <CreateInput iclassName='px-12' placeholder='اسم المجموعة' required  type={'text'} max = {30} min = {10}/>

        </div>
        <div>
        <CreateInput iclassName='px-12' placeholder='اسم المجموعة' required  type={'text'} max = {30} min = {10}/>

        </div>
        </div>
     </div>
     
     </section>
      </div>
    </>
  )
}
