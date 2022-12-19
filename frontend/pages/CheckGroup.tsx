import React from 'react'
import {GiPlantsAndAnimals} from 'react-icons/gi'
export default function CheckGroup() {
  return (
    <>
    <section className='flex justify-between mx-[15rem] mt-16 '>
        <div>
            <GiPlantsAndAnimals className='w-40 h-40'/>
        </div>
        <div dir='rtl' className='mt-16'>
            <span className='cairo_bold_title text-3xl'>اسم المجموعة</span>
        </div>
    </section>
    </>
  )
}
