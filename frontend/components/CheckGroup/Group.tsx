import React from 'react'
import {GiEarthAfricaEurope} from 'react-icons/gi'
import {AiFillClockCircle} from 'react-icons/ai'
import {TbHeartHandshake} from 'react-icons/tb'
export default function Group() {
  return (
    <section className='flex justify-center mt-5' id="animate33">
        <div className='w-[40rem] bg-[#242527] h-full rounded-lg'>
                <div className='text-white flex justify-end cairo_semibold_title my-3 mr-8'>حول المجموعة</div>
                <div className='flex justify-center mb-3'>
                <p  className="w-full mx-[2rem]  my-[5px] border-t-[1px] border-[#fff]"></p>
                </div>
                <div className='mx-[2rem]'>
                <div dir='rtl' className='text-white/80 w-full  text-sm flex   justify-start cairo_regular_title my-2'> الجروب الجروب  الجروبالجروبالجروبالجروبالجروب الجروبالجروبالجروبالجروبالجروب  عن الجروب</div>

                </div>
               
                <section dir='rtl'  className='mx-[2rem] flex'>
                <GiEarthAfricaEurope className='w-6 h-6 mt-4 text-white'/> 
                <div className='text-white w-full  text-sm flex   justify-start cairo_regular_title mt-4 mr-2'> المكان</div>
                
                </section>
                <section dir='rtl' className='mx-[2rem] flex'>
                <div className='text-white/70 w-full  text-sm flex   justify-start cairo_regular_title mt-1'> مصر - شمال سيناء</div>


                </section>
                <section dir='rtl'  className='mx-[2rem] flex'>
                <AiFillClockCircle className='w-6 h-6 mt-4 text-white'/> 
                <div className='text-white w-full  text-sm flex   justify-start cairo_regular_title mt-4 mr-2'> السجل</div>
                
                </section>
                <section dir='rtl' className='mx-[2rem] flex'>
                <div className='text-white/70 w-full  text-sm flex   justify-start cairo_regular_title mt-1'>تم انشاء هاذا الجروب يوم 2/2/2010 </div>


                </section>
                <section dir='rtl'  className='mx-[2rem] flex'>
                <TbHeartHandshake className='w-6 h-6 mt-4 text-white'/> 
                <div className='text-white w-full  text-sm flex   justify-start cairo_regular_title mt-4 mr-2'> ماذا ننقذ</div>
                
                </section>
                <section dir='rtl' className='mx-[2rem] flex'>
                <div className='text-white/70 w-full  text-sm flex   justify-start cairo_regular_title mt-1 mb-20'> نحن ننظف المحيط القذر من خرا البشر لكي نحمي البطاطس </div>


                </section>


        </div>
    </section>
  )
}
