import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Input from '../components/Input'
export default function registergroup() {
  return (
    <>
      <div className='overflow-y-hidden'>
        <img
          src='./signin5.png'
          className='w-screen h-full fixed z-[-1] brightness-100'
        />
        <div className="py-4 flex items-center justify-between 2xl:mx-[8rem] md:mx-[2rem] sm:mx-[2rem] xs:mx-[2rem] xxs:mx-[2rem]">
          <div>
            <button className='text-white cairo_semibold_title border-2 text-sm border-white py-2 px-4 hover:text-black hover:bg-white active:text-white/100 active:bg-black/100 rounded-2xl'>
              انضم لنا
            </button>
          </div>
          <div>
            <h1 className='text-[#fff] cairo_semibold_title text-2xl'>
              ساعد الارض
            </h1>
          </div>
        </div>
        <div className='flex justify-end mt-[10%] 2xl:mx-[8rem] md:mx-[2rem] sm:mx-[2rem] xs:mx-[2rem] xxs:mx-[2rem]'>

          <div className=' py-2 px-[4%] rounded-xl'>
            <div dir='rtl' className='mb-12'>
              <h1 className='text-white cairo_semibold_title text-2xl'>
                تسجيل الدخول
              </h1>
            </div>
            <Input type={'text'} required label='الاسم' iclassName=' 2xl:w-[30rem] md:w-[30rem] sm:w-[30rem] xs:w-[25rem] xxs:w-[20rem]' />
            <Input type={'email'} required label='الايميل' iclassName=' 2xl:w-[30rem] md:w-[30rem] sm:w-[30rem] xs:w-[25rem] xxs:w-[20rem]' />
            <Input type={'password'} required label='كلمة السر' iclassName=' 2xl:w-[30rem] md:w-[30rem] sm:w-[30rem] xs:w-[25rem] xxs:w-[20rem]' />
            <div className='flex justify-end my-3'>
              <button className='text-black cairo_semibold_title border-2 text-md border-black bg-white py-2 px-6 hover:text-white hover:bg-black active:text-black/100 active:bg-white/100 rounded-xl'>
                اهلا بك
              </button>
            </div>
          </div>

        </div>

      </div>

    </>
  )
}
