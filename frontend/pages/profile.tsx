import React from 'react'
import Image from 'next/image'
import Head from "next/head";
import Eyes from '../components/Sign&Register/Eyes'
import Link from 'next/link'
import Input from '../components/Inputs/Input'
import GroupInput from '../components/Inputs/GroupInput';
import InputOutline from '../components/Inputs/InputOutline';
import NavBar from '../components/CheckGroup/NavBar';
import {AiOutlineEdit} from 'react-icons/ai'

export default function profile() {
  return (
    <>
          <NavBar/>

    <div className="bg-[#18191B] justify-center h-screen w-full flex items-center">
      <Head>
        <title className="cairo_black_title">حسابك الشخصي</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <section dir='rtl' className='bg-[#18191B] py-full'>
        <div className='text-black flex justify-start px-20  my-10'>
          <div>
            <img src='./avater2.png' className=' rounded-lg w-80 h-80' />
          </div>
          <div dir='rtl' className=' mx-40'>
         <div className='flex'>
         <InputOutline type={'text'} disabled  placeholder ='محمد' label='  ألاسم الاول: '  />
            <InputOutline type={'text'} disabled  placeholder ='اسامة' label='  ألاسم الاحير: '  />

         </div>
         <div className='flex'>
         <InputOutline  type={'text'} disabled  placeholder ='amakku@gmail.coms' label='   الايميل: '  />
            <InputOutline type={'text'} disabled  placeholder ='amakkuisgay696969' label='   كلمة السر: '  />

         </div>
         <div className='flex'>
         <InputOutline  type={'text'} disabled  placeholder ='69' label='   العمر: '  />
            <InputOutline type={'text'} disabled  placeholder ='0112548951' label='    الرقم: '  />

         </div>
         <div className='flex'>
              <div className="text-white flex hover:text-white/40  border-white active:text-white/80 cursor-pointer">
              <button className='flex mt-4'>
                    <AiOutlineEdit className="mx-2 h-6 w-6" />
                    <h4 className="cairo_regular_title "> عدل الصورة</h4>

                  </button>
              </div>
                <button className="bg-[#8A3451] hover:bg-[#6e2b41] active:bg-[#4d1f2e] mr-16 mt-1  hover:text-white/40  active:text-white/70 md:px-4 xxs:py-2 py-1 xxs:text-[12px] md:text-[17px] mb-10 text-white rounded-lg">
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
