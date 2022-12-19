import React from 'react'
import {FaSearchLocation} from 'react-icons/fa'
import {AiOutlineUsergroupAdd} from 'react-icons/ai'
import {GrUserWorker} from 'react-icons/gr'
import {RiEye2Line} from 'react-icons/ri'
export default function SaveWorld() {
  return (
    <>
    <section className='w-full h-full mt-[40rem] bg-white items-center text-center'>
        <div className='flex justify-center cairo_semibold_title text-[2rem]  text-black'>
            كيف تساعد الارض هنا؟؟
            
        </div>
        <div className='flex justify-center'>
        <p  className="w-40  mt-[3rem] border-t-[3px] border-[#81c132] "></p>

        </div>
        
        <div className='flex justify-evenly mt-[7rem]'>
            
            <span><FaSearchLocation className='2xl:w-[7rem] 2xl:h-[7rem] xl:w-[7rem] xl:h-[7rem] lg:w-[7rem] lg:h-[7rem] md:w-[3rem] md:h-[3rem] xs:w-[3rem] xs:h-[3rem] xxs:w-[3rem] xxs:h-[3rem] text-black' />
            <span dir='rtl' className='cairo_semibold_title 2xl:text-xl xl:text-xl lg:text-xl md:text-lg sm:text-lg xs:text-md xxs:text-sm'>ابحث عن حل لمشكلة</span>
            </span>
            <span><AiOutlineUsergroupAdd className='2xl:w-[7rem] 2xl:h-[7rem] xl:w-[7rem] xl:h-[7rem] lg:w-[7rem] lg:h-[7rem] md:w-[3rem] md:h-[3rem] xs:w-[3rem] xs:h-[3rem] xxs:w-[3rem] xxs:h-[3rem]  text-black'/>
            <span dir='rtl' className='cairo_semibold_title 2xl:text-xl xl:text-xl lg:text-xl md:text-lg sm:text-lg xs:text-md xxs:text-sm'>انشاء مجموعة </span></span>
            <p  className="h-40   border-r-[3px] border-[#000000] "></p>
            <span><RiEye2Line className='2xl:w-[7rem] 2xl:h-[7rem] xl:w-[7rem] xl:h-[7rem] lg:w-[7rem] lg:h-[7rem] md:w-[3rem] md:h-[3rem] xs:w-[3rem] xs:h-[3rem] xxs:w-[3rem] xxs:h-[3rem] text-black' />
            <span dir='rtl' className='cairo_semibold_title 2xl:text-xl xl:text-xl lg:text-xl md:text-lg sm:text-lg xs:text-md xxs:text-sm'>أبحث عن مجموعة  </span></span>
            <span><GrUserWorker className='2xl:w-[7rem] 2xl:h-[7rem] xl:w-[7rem] xl:h-[7rem] lg:w-[7rem] lg:h-[7rem] md:w-[3rem] md:h-[3rem] xs:w-[3rem] xs:h-[3rem] xxs:w-[3rem] xxs:h-[3rem] text-black'/>
            <span dir='rtl' className='cairo_semibold_title 2xl:text-xl xl:text-xl lg:text-xl md:text-lg sm:text-lg xs:text-md xxs:text-sm'> ساعد المجموعة  </span></span>
            
        </div>
    </section>
    </>
  )
}
