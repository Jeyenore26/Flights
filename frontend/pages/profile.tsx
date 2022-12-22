import React from 'react'
import Image from 'next/image'
import Head from "next/head";
import Eyes from '../components/Sign&Register/Eyes'
import Link from 'next/link'
import Input from '../components/Inputs/Input'
import GroupInput from '../components/Inputs/GroupInput';
import InputOutline from '../components/Inputs/InputOutline';

export default function profile() {
  return (
    <div className='w-full h-screen'>
      <Head>
        <title className="cairo_black_title">حسابك الشخصي</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className='overflow-y-hidden'>
        <div className='w-screen h-full fixed z-[-1]'>

        </div>
        <img
          src='./profile2.png'
          className='w-screen h-full fixed z-[-1] brightness-75 cover'
        />
        <div className="py-4 flex mt-1 items-center justify-between 2xl:mx-[4rem] md:mx-[2rem] sm:mx-[2rem] xs:mx-[2rem] xxs:mx-[2rem]">
          <div>
            <Link href={'/mainpage'}>
              <button className='text-white border-[1px] border-dashed border-white cairo_semibold_title py-1 px-3 text-md bg-transperant hover:text-white/90 hover:bg-black/20 active:text-white/100 active:bg-black/40 rounded-xl'>
                الرجوع 
              </button>
            </Link>
          </div>
          <div className='flex'>
          <Link href={'/homepage'} className="cursor-default">
          <div className=" flex items-center space-x-1">
          <button className='cairo_semibold_title text-white hover:text-white/50 active:text-white/20 mt-1 mr-1 text-lg'>
              ساعد الارض
            </button>
                  <img src="./LogoIcon.png" className="w-10 h-10 mt-1" />
                </div>
           
           </Link>
          </div>
        </div>
        <div className='flex  justify-center mt-[10%] max-h-[25rem]'>

          <div className=' py-4 2xl:w-[50%] md:px-[2%] sm:px-[2%] xs:px-[10%] xxs:px-[5%] overflow-x-auto  bg-black/30 rounded-xl'>
         

        <div dir='rtl'  className='flex '>
          <div>
              <img src='./avater.png' className='w-40 h-40 rounded-full ml-10'/>
              <div className='flex justify-center mr-[-30px]'>
              <button className='text-white border-[1px] mt-4 border-solid border-white cairo_semibold_title py-1 px-3 text-md bg-transperant hover:text-white/90 hover:bg-black/20 active:text-white/100 active:bg-black/40 rounded-xl'>
                غير الصورة 
              </button>

              </div>
          </div>
          
        <div>
        <div className='flex'>
          <span className=''>            <InputOutline type={'text'} iclassName='' disabled placeholder    =  " محمد اسامة مجمد" label='الاسم'/>
</span>
          
<span className='mr-[10rem] px-20'>            <InputOutline type={'text'} iclassName='' disabled placeholder    = "ed@yahoo.amakku.com" label='ألايميل'/>
</span>
          
             
          </div>
          <div className='flex'>
          <InputOutline type={'text'} iclassName='' disabled placeholder    = "ذا كوك" label='اسم المجموعة'/>

              </div>
        </div>
        </div>
        

            

      
          </div>

        </div>

      </div>

    </div>
  )
}
