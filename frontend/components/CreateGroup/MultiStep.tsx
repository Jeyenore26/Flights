import React , {useState , useEffect} from 'react'
import GroupInput from './GroupInput'
import { MdGroupAdd } from 'react-icons/md'
import Link from 'next/link'
export default function () {
    const [page , setpage] = useState(1)
    const [disable , setdis] = useState(false)
   useEffect(()=>{
    if(page == 3 ){
        setdis(true)
    }
    else{
        setdis(false)
    }
   })
    const pagecolor = {color : 'blue'}
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
                
                <a className={page === 1 ? 'pageon block sm:px-6 sm:w-auto sm:justify-start cairo_regular_title' : 'pageoff sm:px-6 sm:w-auto sm:justify-start hover:text-gray-900 cairo_regular_title'}>
                    الخطوة الاولى
                </a>
                <a className={page === 2 ? 'pageon sm:px-6 sm:w-auto sm:justify-start cairo_regular_title' : 'pageoff sm:px-6 sm:w-auto sm:justify-start hover:text-gray-900 cairo_regular_title'}>
                    الخطوة الثانية
                </a>
                <a className={page === 3 ? 'pageon sm:px-6 sm:w-auto sm:justify-start cairo_regular_title' : 'pageoff sm:px-6 sm:w-auto sm:justify-start hover:text-gray-900 cairo_regular_title'}>
                    الخطوة الاخيرة
                </a>
              </div>
                {/* First Page*/}
                <section style={{width: page === 1 ? "100%" : "30%"}} className = 'PageContent'>
                         <div style={{display: page === 1 ? "block" : "none"}}  className = 'PageContent '>
                        <GroupInput  label='اسم3 المجموعة' required type={'text'} placeholder ='اسم المجموعة' lclassName='text-black focus:text-black'/>
                       </div>
                       <div style={{display: page === 1 ? "block" : "none"}} className="PageContent" >
                       <GroupInput label='ايميل3 المجموعة' required type={'email'} placeholder ='ايميل المجموعة' lclassName='text-black'/>
         
                       </div>
                       <div style={{display: page === 1 ? "block" : "none"}} className="PageContent" >
                       <GroupInput label='رقم3 المجموعة' required type={'number'} placeholder ='رقم المجموعة' lclassName='text-black'/>
         
                       </div>
                         </section>
                 {/* Second Page*/}
                 <section style={{width: page === 2 ? "100%" : "27%"}} className = 'PageContent'>
                        {page === 2 && (
                            <>
                             <div   className = 'PageContent'>
                        <GroupInput  label='اسم2 المجموعة' required type={'text'} placeholder ='اسم المجموعة' lclassName='text-black focus:text-black'/>
                       </div>
                       <div className="PageContent" >
                       <GroupInput label='ايميل3 المجموعة' required type={'email'} placeholder ='ايميل المجموعة' lclassName='text-black'/>
         
                       </div>
                       <div className="PageContent" >
                       <GroupInput label='رقم3 المجموعة' required type={'number'} placeholder ='رقم المجموعة' lclassName='text-black'/>
         
                       </div>
                            </>
                        )}
                         </section>
                 {/* Last Page*/}
                
                         <section style={{width: page === 3 ? "100%" : "27%"}} className = 'PageContent'>
                         <div  style={{display: page === 3 ? "block" : "none"}} className = 'PageContent'>
                        <GroupInput  label='اسم3 المجموعة' required type={'text'} placeholder ='اسم المجموعة' lclassName='text-black focus:text-black'/>
                       </div>
                       <div className="PageContent" style={{display: page === 3 ? "block" : "none"}}>
                       <GroupInput label='ايميل3 المجموعة' required type={'email'} placeholder ='ايميل المجموعة' lclassName='text-black'/>
         
                       </div>
                       <div className="PageContent" style={{display: page === 3 ? "block" : "none"}}>
                       <GroupInput label='رقم3 المجموعة' required type={'number'} placeholder ='رقم المجموعة' lclassName='text-black'/>
         
                       </div>
                         </section>
                
              <div className="flex justify-start">
               
                 <button
                 onClick = {()=>{
                    setpage(page +1)
                 }} 
                 disabled = {disable}
                 className = {disable ? 'px-6 py-2 mt-4 text-sm font-medium leading-5 text-center text-black transition-colors duration-150 bg-gray-300 border border-transparent rounded-lg focus:outline-none cairo_regular_title' : 'px-6 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-blue-600 border border-transparent rounded-lg hover:bg-blue-700 active:bg-blue-900 focus:outline-none cairo_regular_title'}
                  
                >
                  الخطوة القادمة
                </button>
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
