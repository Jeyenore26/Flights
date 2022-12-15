import React , {useEffect} from 'react'
export default function Leaf() {
    useEffect(() => {
        document.addEventListener('mousemove' , (e) =>{
            console.log(e)

        })
        
    })
    
   
  return (
    <>
      <div className="fixed top-16 left-0 p-3 m-4">
        <span className="relative  z-10 2xl:block xl:block lg:hidden md:hidden sm:hidden xs:hidden xxs:hidden">
         <div className="absolute z-20 top-1 h-20 box">
            <span className='eye'></span>
          <span className="eye"></span>
         </div>

          <img src="leaf.png" className="w-20 h-20 rotate-45" />
        </span>
      </div>
    </>
  )
}
