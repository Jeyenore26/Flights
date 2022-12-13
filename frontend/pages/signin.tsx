import React from 'react'
import Image from 'next/image'
import Head from "next/head";

import Link from 'next/link'
import Input from '../components/Input'
export default function registermember() {
  return (
    <>
      <Head>
        <title className="cairo_black_title">انضم لنا</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className='overflow-y-hidden'>
        <div className='w-screen h-full fixed z-[-1]'>

        </div>
        <img
          src='./signin5.png'
          className='w-screen h-full fixed z-[-1] brightness-100 blur-lg cover'
        />
        <div className="py-4 flex mt-1 items-center justify-between 2xl:mx-[4rem] md:mx-[2rem] sm:mx-[2rem] xs:mx-[2rem] xxs:mx-[2rem]">
          <div>
            <Link href={'/register'}>
              <button className='text-white border-[1px] border-dashed border-white cairo_semibold_title py-1 px-3 text-md bg-transperant hover:text-white/90 hover:bg-black/20 active:text-white/100 active:bg-black/40 rounded-xl'>
                 انضم لنا
              </button>
            </Link>
          </div>
          <div>
            <p className='cairo_semibold_title text-white'>
              ساعد الارض
            </p>
          </div>
        </div>
        <div className='flex  justify-center mt-[1%] 2xl:mx-[12rem] md:mx-[2rem] sm:mx-[1rem] xs:mx-[1rem] xxs:mx-[1rem]'>

          <div className=' py-4 2xl:px-[2%] md:px-[2%] sm:px-[2%] xs:px-[10%] xxs:px-[10%]  overflow-x-auto bg-black/30 rounded-xl'>
            <div dir='rtl' className='my-8 flex justify-center'>
              <h1 className='text-white cairo_semibold_title text-2xl'>
                انشاء حساب
              </h1>
            </div>

            <Input type={'text'} required lclassName='flex  xs:justify-start mx-1 xxs:justify-center' label='الاسم' iclassName=' 2xl:w-[30rem] md:w-[30rem] sm:w-[30rem] xs:w-[25rem] xxs:w-[25rem]' />
            <Input type={'email'} required lclassName='flex xs:justify-start mx-1 xxs:justify-center' label='الايميل' iclassName=' 2xl:w-[30rem] md:w-[30rem] sm:w-[30rem] xs:w-[25rem] xxs:w-[25rem]' />

            <Input type={'password'} required lclassName='flex xs:justify-start mx-1 xxs:justify-center' label='كلمة السر' iclassName=' 2xl:w-[30rem] md:w-[30rem] sm:w-[30rem] xs:w-[25rem] xxs:w-[25rem]' />


            <div className='flex justify-center my-5'>
              <button className='text-black cairo_semibold_title 2xl:w-[30rem] md:w-[30rem] sm:w-[30rem] xs:w-[25rem] xxs:w-[20rem] text-lg bg-green-400 py-2 hover:text-black hover:bg-green-500 active:text-black/100 active:bg-green-600 rounded-xl'>
                اهلا بك
              </button>
            </div>
          </div>

        </div>

      </div>

    </>
  )
}
