import React from 'react'
import {GiPlantsAndAnimals ,GiCancel} from 'react-icons/gi'
import GroupInput from '../components/Inputs/GroupInput'
import {FaDonate, FaHandsHelping} from 'react-icons/fa'
import Input from '../components/Inputs/Input'
import Link from 'next/link'
export default function CheckGroup() {
  return (
    <>
    <section dir='rtl' className='flex  mx-[15rem] mt-10 overflow-hidden  '>
        <div>
            <GiPlantsAndAnimals className='w-40 h-40'/>
            <div dir='rtl' className='mt-8 flex justify-center'>
            <span className='cairo_bold_title text-1xl p-3 bg-[#39C2BC] rounded-3xl text-white '>اسم المجموعة</span>
            
            </div>
            
        </div>
        
        <div className='mt-14 mr-[11rem]'>
            <h1 className='cairo_black_title text-2xl'>معلومات عن الاشخاص</h1>
            <div className='flex mt-10 mr-[-2rem] '>
                    <div className='mx-10'>
                    <GroupInput type={'text'}  label ='أسم مالك المجموعة ' lclassName='text-black cairo_regular_title ' value={'محمد'} iclassName ='text-black focus:text-black bg-black/10 rounded-xl' disabled />

                    </div>
                    <div className='mx-10'>
                    <GroupInput type={'text'}  label ='أسم  مساعد المجموعة' lclassName='text-black cairo_regular_title' value={'محمد'} iclassName ='text-black focus:text-black bg-black/10 rounded-xl' disabled />

                    </div>
                    <div className='mx-10' >
                    <GroupInput type={'text'}  label ='أسم  اكبر المتبرعين' lclassName='text-black cairo_regular_title' value={'محمد'} iclassName ='text-black focus:text-black bg-black/10 rounded-xl' disabled />

                    </div>
                    <div className='mx-10' >
                    <GroupInput type={'number'}  label ='رقم المجموعة   ' lclassName='text-black cairo_regular_title' value={'0125485102'} iclassName ='text-black focus:text-black bg-black/10 rounded-xl' disabled />

                    </div>
                    
            </div>
            <h1 className='cairo_black_title text-2xl mt-10'>معلومات المجموعة</h1>
            <div className='flex mt-10 mr-[-2rem] '>
                    <div className='mx-10'>
                    <GroupInput type={'text'}  label ='ماذا يساعدوا    ' lclassName='text-black cairo_regular_title ' value={'محمد'} iclassName ='text-black focus:text-black bg-black/10 rounded-xl ' disabled />

                    </div>
                    <div className='mx-10'>
                    <GroupInput type={'text'}  label ='اين يساعدوا' lclassName='text-black cairo_regular_title' value={'محمد'} iclassName ='text-black focus:text-black bg-black/10 rounded-xl' disabled />

                    </div>
                    
            </div>
            <h1 className='cairo_black_title text-2xl mr-1 mt-5'>اثبا تات</h1>
            <div className='flex mt-10 mr-[-2rem] mb-5'>
                        <div className='flex justify-evenly'>
                            <img src='./cert.png' className='border-2 border-black mx-12 rounded-sm w-[11rem] h-[11rem]'/>
                            <img src='./cert.png' className='border-2 border-black mx-12 rounded-sm w-[11rem] h-[11rem]'/>
                            <img src='./cert.png' className='border-2 border-black mx-12 rounded-sm w-[11rem] h-[11rem]'/>

                            <img src='./cert.png' className='border-2 border-black mx-12 rounded-sm w-[11rem] h-[11rem]'/>



                        </div>
        
            </div>
        </div>
       
       
    </section>
   
    </>
  )
}
