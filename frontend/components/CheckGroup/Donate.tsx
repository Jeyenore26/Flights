import React from 'react'
import {GiCrownedHeart } from 'react-icons/gi'
import {AiFillBank , AiOutlineMail} from 'react-icons/ai'
import {TbHeartHandshake} from 'react-icons/tb'
import {BsPaypal} from 'react-icons/bs'
export default function Donate() {
  return (
    <section className='flex justify-center mt-5' id="animate33">
        <div className='w-[40rem] bg-[#242527] h-full rounded-lg'>
                <div className='text-white flex justify-end cairo_semibold_title my-3 mr-8'>ساعد المجموعة </div>
                <div className='flex justify-center mb-3'>
                <p  className="w-full mx-[2rem]  my-[5px] border-t-[1px] border-[#fff]"></p>
                </div>
                <div className='mx-[2rem]'>
                <div dir='rtl' className='text-white/80 w-full  text-sm flex   justify-start cairo_regular_title my-2'> نحن لا نطلب المال ولكن نحتاج لمساعدة البيئة و لا نملك ما يكفي من المال  ف ارجو ان تساعدونا </div>

                </div>
               
                <section dir='rtl'  className='mx-[2rem] flex'>
                <BsPaypal className='w-6 h-6 mt-4 text-white'/> 
                <div className='text-white w-full  text-sm flex   justify-start cairo_regular_title mt-4 mr-2'> بايبال</div>
                
                </section>
                <section dir='rtl' className='mx-[2rem] flex'>
                <div className='text-white/70 w-full  text-sm flex   justify-start cairo_regular_title mt-1'>مش عارف هيكتب ايه هنا</div>


                </section>
                <section dir='rtl'  className='mx-[2rem] flex'>
                <AiFillBank className='w-6 h-6 mt-4 text-white'/> 
                <div className='text-white w-full  text-sm flex   justify-start cairo_regular_title mt-4 mr-2'> حساب بنك مصر و الزراعي</div>
                
                </section>
                <section dir='rtl' className='mx-[2rem] flex'>
                <div className='text-white/70 w-full  text-sm flex   justify-start cairo_regular_title mt-1'>حساب بنك رقم:4695</div>

                </section>
                <section dir='rtl'  className='mx-[2rem] flex'>
                <AiOutlineMail className='w-6 h-6 mt-4 text-white'/> 
                <div className='text-white w-full  text-sm flex   justify-start cairo_regular_title mt-4 mr-2'>  بريد مصر</div>
                
                </section>
                <section dir='rtl' className='mx-[2rem] flex'>
                <div className='text-white/70 w-full  text-sm flex   justify-start cairo_regular_title mt-1 mb-20'>بريد رقم :5555</div>


                </section>
                <div className='flex justify-center'>
                <div className='text-white flex justify-end cairo_semibold_title mt-1 mb-3 mr-8' > <GiCrownedHeart className='mt-1 h-5 w-5'/> شكرا لكم لمساعدة المجموعة  <GiCrownedHeart className='mt-1 h-5 w-5'/></div>

                </div>


        </div>
    </section>
  )
}
