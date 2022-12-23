import React from 'react'
import {BiMessageAdd} from 'react-icons/bi'
import {MdGroup} from 'react-icons/md'
import {IoCreateOutline} from 'react-icons/io5'
export default function Activity() {
  return (
    <section className='flex justify-center mt-5' id="animate32">
        <div className='w-[40rem] bg-[#eaebec] h-full rounded-lg mb-10'>
                <div className='text-black flex justify-end cairo_semibold_title my-3 mr-8'>النشاط</div>
                <div className='flex justify-center mb-3'>
                <p  className="w-full mx-[2rem]  my-[5px] border-t-[1px] border-black"></p>
                </div>
                <div dir='rtl' className='mx-[2rem] flex justify-start mt-2 mb-2'>
                  <BiMessageAdd className='w-5 h-5 text-black mt-2'/>
                  <span className='text-[15px] cairo_regular_title text-black mr-2 mt-1'>  لا توجد اي منشورات جديدة</span>
                </div>
                <div dir='rtl' className='mx-[2rem] flex justify-start mt-2 mb-2'>
                  <MdGroup className='w-5 h-5 text-black mt-2'/>
                  <span className='text-[15px] cairo_regular_title text-black mr-2 mt-1'> اجمالي الاعضاء : 4444 </span>
                </div>
                <div dir='rtl' className='mx-[2rem] flex justify-start mt-2 mb-5'>
                  <IoCreateOutline className='w-5 h-5 text-black mt-2'/>
                  <span className='text-[15px] cairo_regular_title text-black mr-2 mt-1'>  تم الانشاء منذ  3 سنين </span>
                </div>

        </div>
    </section>
  )
}
