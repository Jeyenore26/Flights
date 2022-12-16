import React from 'react'
import GroupInput from './GroupInput'
import { MdGroupAdd } from 'react-icons/md'
import Link from 'next/link'
export default function 
() {
  return (
  <>
  <div className="flex items-center min-h-screen bg-gray-50">
      <div
        className="flex-1 h-full max-w-5xl mx-auto bg-white rounded-lg shadow-xl"
      >
        <div className="flex flex-col md:flex-row">
          <div className="h-32 md:h-auto md:w-1/2">
            <img
              className="object-cover w-full h-full brightness-90"
              src="./group1.jpg"
              alt="img"
            />
          </div>
          <div dir='rtl' className="flex items-center justify-center p-6 sm:p-12 md:w-2/3">
            <div className="w-full">
             <span className='flex'> 
             <h3 className="mb-4 text-xl cairo_semibold_title font-bold text-blue-600">انشاء مجموعة</h3>
              <MdGroupAdd className='w-6 h-6 mx-2 mt-1 text-blue-600'/>
             </span>
              <div className="flex flex-wrap mx-auto">
                <a
                  className="
                    inline-flex
                    items-center
                    justify-center
                    w-1/2
                    py-3
                    font-medium
                    leading-none
                    tracking-wider
                    text-indigo-500
                    bg-gray-100
                    border-b-2 border-indigo-500
                    rounded-t
                    sm:px-6 sm:w-auto sm:justify-start
                    cairo_regular_title
                  "
                >
                   الخطوة الاولى
                </a>
                <a
                  className="
                    inline-flex
                    items-center
                    justify-center
                    w-1/2
                    py-3
                    font-medium
                    leading-none
                    tracking-wider
                    border-b-2 border-gray-200
                    sm:px-6 sm:w-auto sm:justify-start
                    hover:text-gray-900
                    cairo_regular_title
                  "
                >
                   الخطوة الثانية
                </a>
                <a
                  className="
                    inline-flex
                    items-center
                    justify-center
                    w-1/2
                    py-3
                    font-medium
                    leading-none
                    tracking-wider
                    border-b-2 border-gray-200
                    sm:px-6 sm:w-auto sm:justify-start
                    hover:text-gray-900
                    cairo_regular_title
                  "
                >
                   الخطوة الاخيرة
                </a>
              </div>
              <div className="mt-4 mb-4">
               <GroupInput label='اسم المجموعة' required type={'text'} placeholder ='اسم المجموعة' lclassName='text-black focus:text-black'/>
              </div>
              <div className="mb-4">
              <GroupInput label='ايميل المجموعة' required type={'email'} placeholder ='ايميل المجموعة' lclassName='text-black'/>

              </div>
              <div className="mb-4">
              <GroupInput label='رقم المجموعة' required type={'number'} placeholder ='رقم المجموعة' lclassName='text-black'/>

              </div>
              <div className="flex justify-start">
               <Link
                href={'/mainpage'}
               >
                 <button
                  className="
                    px-6
                    py-2
                    mt-4
                    text-sm
                    font-medium
                    leading-5
                    text-center text-white
                    transition-colors
                    duration-150
                    bg-blue-600
                    border border-transparent
                    rounded-lg
                    hover:bg-blue-700
                    active:bg-blue-900
                    focus:outline-none
                    cairo_regular_title
                  "
                >
                  الخطوة القادمة
                </button>
               </Link>
              </div>
             {/* get back ztn*/ }
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
