import React from 'react'
import Image from 'next/image'
import Head from "next/head";
import Eyes from '../components/Sign&Register/Eyes'
import Link from 'next/link'
import Input from '../components/Inputs/Input'
import GroupInput from '../components/Inputs/GroupInput';
import BInputOutline from '../components/Inputs/BInputOutline';
import NavBar from '../components/CheckGroup/NavBar';
import {AiOutlineEdit} from 'react-icons/ai'

export default function profile() {
  return (
    <>
          <NavBar/>

    <div className="bg-white justify-center h-screen w-full flex items-center">
      <Head>
        <title className="cairo_black_title">حسابك الشخصي</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <section dir='rtl' className='bg-white py-full' id='animate33'>
        <div className='flex md:flex-row xxs:flex-col'>
          <div className='md:mt-0 xxs:mt-20 flex justify-center'>
            <img src='./avater2.png' className='w-80 h-80 bg-cover rounded-md' />
          </div>
          <div className='mr-10'>
            <span className='flex sm:flex-row xxs:flex-col justify-center'>
            <BInputOutline value={'محمد اسامة'} label ='الاسم' type={'text'} disabled />
            <BInputOutline value={'amakku123141@gmail.com'} iclassName ='w-[200%]' label ='بريد التوصل' type={'text'} disabled />
            </span>
            <span className='flex justify-center'>
            <BInputOutline value={'01126894555'} label ='الرقم' type={'text'} disabled />
            <BInputOutline value={'يلعن اهل عمار'} iclassName ='w-[200%]' label ='كلمة السر' type={'password'} disabled />
            </span>
            <span className='flex justify-center'>
            <BInputOutline value={'لا يوجد'} label ='اسم المجموعة' type={'text'} disabled />
            <BInputOutline value={'ادمن'} iclassName ='w-[200%]' label ='الرتبة' type={'text'} disabled />
            </span>
          </div>
          
        </div>
        <div className='flex sm:flex-row xxs:flex-col justify-center mt-5'>
        <button className='rounded-md cairo_regular_title shadow-lg lg:py-1 xxs:py-2 cursor-pointer px-4 hover:bg-[#2b7543] active:bg-[#1a4929] text-sm  bg-[#39A059] text-white hover:text-white/60 active:text-white/40'>غير الصورة</button>

          <span className='flex justify-center cursor-pointer hover:text-slate-300 px-4 py-1 active:text-slate-400'> 
          <AiOutlineEdit className='mt-1'/>
          <button dir='rtl' className='cairo_regular_title cursor-pointer' >تعديل</button>

          </span>
        </div>
        

      </section>
    </div>
    </>
  )
}
