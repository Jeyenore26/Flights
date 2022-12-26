import React from 'react'
import Image from 'next/image'
import Head from "next/head";
import Eyes from '../components/Sign&Register/Eyes'
import Link from 'next/link'
import Input from '../components/Inputs/Input'
import GroupInput from '../components/Inputs/GroupInput';
import BInputOutline from '../components/Inputs/BInputOutline';
import NavBar from '../components/CheckGroup/NavBar';
import {AiOutlineEdit} from 'react-icons/ai'

export default function profile() {
  return (
    <>
          <NavBar/>

    <div className="bg-white justify-center h-screen w-full flex items-center">
      <Head>
        <title className="cairo_black_title">حسابك الشخصي</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <section dir='rtl' className='bg-white py-full' id='animate33'>
       
      </section>
    </div>
    </>
  )
}
