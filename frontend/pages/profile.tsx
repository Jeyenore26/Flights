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
        <div className='text-black flex md:flex-row xxs:flex-col   my-10'>
          <div>
            <img src='./avater2.png' className=' rounded-lg xxs:mx-auto md:mt-0 xxs:mt-56 md:w-80 md:h-80 xxs:w-40 xxs:h-40' />
          </div>
          <div dir='rtl' className=' lg:mx-40 xxs:mx-10'>
         <div className='flex sm:flex-row xxs:flex-col'>
         <BInputOutline type={'text'} disabled  placeholder ='محمد' label='  ألاسم الاول: '  />
            <BInputOutline type={'text'} disabled  placeholder ='اسامة' label='  ألاسم الاحير: '  />

         </div>
         <div className='flex sm:flex-row xxs:flex-col'>
         <BInputOutline  type={'text'} disabled  placeholder ='amakku@gmail.coms' label='   الايميل: '  />
            <BInputOutline type={'text'} disabled  placeholder ='amakkuisgay696969' label='   كلمة السر: '  />

         </div>
         <div className='flex sm:flex-row xxs:flex-col'>
         <BInputOutline  type={'text'} disabled  placeholder ='69' label='   العمر: '  />
            <BInputOutline type={'text'} disabled  placeholder ='0112548951' label='    الرقم: '  />

         </div>
         <div className='flex sm:flex-row xxs:flex-col'>
             
                  <button className="text-black flex cairo_regular_title mt-1 hover:text-black/40 xxs:mr-[0.1rem]  border-black active:text-black/80 md:px-4 xxs:py-2 py-1 xxs:text-[12px] md:text-[17px] mr-[-20px] mb-10 rounded-lg">
                  <AiOutlineEdit className="ml-2 h-6 w-6" />

                   عدل الصورة
                </button>
                <button className="bg-[#39A059] hover:bg-[#277941] active:bg-[#235e35] md:mr-14 xxs:px-2  xxs:mr-0 mt-1  hover:text-white/40  active:text-white/70 md:px-4 xxs:py-2 py-1 md:text-[17px] mb-10 text-white rounded-lg">
                   غير الحساب
                </button>
         </div>


          </div>
          
        </div>
      </section>
    </div>
    </>
  )
}
