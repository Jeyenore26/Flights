import React from 'react'
import styles from '../styles/Home.module.css'
import helpearth from '../public/air.png'
import { useState } from 'react'
import { useRef } from 'react'
import Image from 'next/image'
import austrailia from '../public/austrailia2.png'
import asia from '../public/asiahills.png'
import africa from '../public/africa.png'
import southamerica from '../public/southamerica.png'
import northamerica from '../public/northamerica.png'
import europe from '../public/europe.png'
import Link from 'next/link'
export default function TopSection() {
    const [value, _setValue] = useState(true)
    const valueRef = useRef(false)

    valueRef.current = value
    const setValue = (arg) => {
        valueRef.current = arg
        _setValue(arg)
    }

    return (
        <>
                <div className=' bg-teal-300/[0.2] w-full h-full flex-col absolute z-10 mx-auto  top-0 bottom-0 justify-center flex align-center'>


                    <h1 className={styles.cairo_black_title}>
                        الارض في خطر
                    </h1>

                    <h4 className={styles.cairo_semibold_title}>
                        لمساعدة الارض يجب علينا اولا ان نعلم

                    </h4>
                    <h4 className={styles.cairo_semibold_title}>
                        المشاكل التي تسبب تدهور صحة الارض
                    </h4>

                 <div className='flex justify-center'>
                 <Link href={'/homepage'}>

<button className={styles.glow_button}>
     <h4 className={styles.button_text_title}>
         ساعد الارض
     </h4>
 </button>

</Link>
                 </div>
                </div>

        </>
    )
}
