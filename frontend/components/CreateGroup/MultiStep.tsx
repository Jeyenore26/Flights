import React , {useState , useEffect} from 'react'
import GroupInput from '../Inputs/GroupInput'
import { MdGroupAdd } from 'react-icons/md'
import Link from 'next/link'
export default function () {
  const [image , setimage] = useState('')
    /* page one*/ 

  const [groupname , setgroupname] = useState('')
  const [groupnumber , setgroupnumber] = useState('')
  const [groupprovide , setgroupprovide] = useState('')
   /* page two*/ 

   const [groupplace , setgroupplace] = useState('')
   const [paypal , setpaypal] = useState('')
   const [bank , setbank] = useState('')
    /* page three*/ 

  const [proveimage , setproveimage] = useState('')
  const [bgimage , setbgimage] = useState('')

  function pageone(){
    event?.preventDefault()
    setpage(2)
  }
  function pagetwo(){
    event?.preventDefault()
    setpage(3)
   
  }
  
  function pagethree(){
    event?.preventDefault()
    console.log(groupname)    
    console.log(groupnumber)
    console.log(groupprovide)
    console.log(groupplace)    
    console.log(paypal)
    console.log(bank)
    console.log(image)
  }
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
  <div className="flex items-center min-h-screen bg-gray-50 "  id="animate32">
      <div
        className="flex-1 h-full max-w-5xl mx-auto bg-white rounded-lg shadow-xl"
      >
        <div className="flex flex-col md:flex-row">
          <div className="h-32  object-cover md:h-auto md:w-1/2">
            <img
              className="object-cover xxs:hidden md:block w-full h-full brightness-90"
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
                <form onSubmit={pageone} style={{width: page === 1 ? "100%" : "30%"}} className = 'PageContent'>
                         <div style={{display: page === 1 ? "block" : "none"}}  className = 'PageContent '>
                        <GroupInput onChange={(e) => setgroupname(e.target.value)}   label='اسم المجموعة' required type={'text'} placeholder ='اسم المجموعة' lclassName='text-black focus:text-black'/>
                       </div>
                       
                       <div style={{display: page === 1 ? "block" : "none"}} className="PageContent" >
                       <GroupInput onChange={(e) => setgroupnumber(e.target.value)} label='رقم المجموعة' required type={'number'} placeholder ='رقم المجموعة' lclassName='text-black'/>
         
                       </div>
                       <div style={{display: page === 1 ? "block" : "none"}} className="PageContent" >
                       <GroupInput onChange={(e) => setgroupprovide(e.target.value)} label='ماذا تقدم المجموعة' required type={'text'} placeholder ='ماذا تقدم المجموعة' lclassName='text-black'/>
         
                       </div>
                       <div className="flex justify-start">
               
               <button
               onSubmit={()=>{
                setpage(page +1)
               }}
                type='submit'
                style={{display: page === 1 ? "block" : "none"}}
               className = {disable ? 'px-6 py-2 mt-4 text-sm font-medium leading-5 text-center text-black transition-colors duration-150 bg-gray-300 border border-transparent rounded-lg focus:outline-none cairo_regular_title' : 'px-6 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-[#39A059] hover:bg-[#277941] active:bg-[#235e35] border border-transparent rounded-lg focus:outline-none cairo_regular_title'}
                
              >
                الخطوة القادمة
              </button>
            </div>
                         </form>
                 {/* Second Page*/}
                 <form onSubmit={pagetwo} style={{width: page === 2 ? "100%" : "35%"}} className = 'PageContent'>
                        {page === 2 && (
                            <>
                             <div   className = 'PageContent'>
                        <GroupInput onChange={(e) => setgroupplace(e.target.value)}  label='موقع العمل' required type={'text'} placeholder ='مثال: مصر -شمال سيناء' lclassName='text-black focus:text-black'/>
                       </div>
                       <div className="PageContent" >
                       <GroupInput onChange={(e) => setbank(e.target.value)} label=' حساب البنك للتبرعات' required type={'number'} placeholder ="حساب البنك للتبرعات" lclassName='text-black'/>
         
                       </div>
                       <div className="PageContent" >
                       <GroupInput onChange={(e) => setpaypal(e.target.value)} label='حساب البايبال للتبرعات' required type={'number'} placeholder = ' حساب البايبال للتبرعات' lclassName='text-black'/>
         
                       </div>
                       <div className="flex justify-start">
               
               <button
               onSubmit={()=>{
                setpage(page +1)
               }}
                type='submit'
                style={{display: page === 2 ? "block" : "none"}}
               className = {disable ? 'px-6 py-2 mt-4 text-sm font-medium leading-5 text-center text-black transition-colors duration-150 bg-gray-300 border border-transparent rounded-lg focus:outline-none cairo_regular_title' : 'px-6 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-[#39A059] hover:bg-[#277941] active:bg-[#235e35] border border-transparent rounded-lg focus:outline-none cairo_regular_title'}
                
              >
                الخطوة القادمة
              </button>
            </div>
                            </>
                        )}
                         </form>
                 {/* Last Page*/}
                
                       {page === 3 && (
                          <form onSubmit={pagethree} style={{width: page === 3 ? "100%" : "35%"}} className = 'PageContent'>
                          <div  style={{display: page === 3 ? "block" : "none"}} className = 'PageContent'>
                         <GroupInput onChange={(e) => setimage(e.target.value)} type ={'file'}  label='صورة المجموعة' required  placeholder ='اسم المجموعة' lclassName='text-black focus:text-black h-full'/>
                        </div>
                        <div  style={{display: page === 3 ? "block" : "none"}} className = 'PageContent'>
                         <GroupInput type ={'file'}  label=' اثباتات المجموعة ' required  placeholder ='اسم المجموعة' lclassName='text-black focus:text-black h-full'/>
                        </div>
                           
               <div className="flex justify-start">
                
                <button
                onSubmit={()=>{
                 setpage(page +1)
                }}
                 type='submit'
                 style={{display: page === 3 ? "block" : "none"}}
                className = {disable ? 'px-6 py-2 mt-4 text-sm font-medium leading-5 text-center text-black transition-colors duration-150 bg-gray-300 border border-transparent rounded-lg focus:outline-none cairo_regular_title' : 'px-6 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-[#39A059] hover:bg-[#277941] active:bg-[#235e35] border border-transparent rounded-lg focus:outline-none cairo_regular_title'}
                 
               >
                 الخطوة القادمة
               </button>
             </div>
                          </form>
                       )}
             
             {/* get back ztn*/ }
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
