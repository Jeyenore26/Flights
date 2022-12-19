import React from 'react'
import Image from 'next/image'
import Head from "next/head";
import {GiRamProfile} from 'react-icons/gi'
import Link from 'next/link'
import GroupInput from '../components/Inputs/GroupInput';
import { FcCameraIdentification } from 'react-icons/fc';
import { BsCameraVideo } from 'react-icons/bs';
import { IoCameraOutline } from 'react-icons/io5';
import MultiStep from '../components/CreateGroup/MultiStep';
export default function creategroup() {
  return (
    <>
      <Head>
        <title className="cairo_black_title">انضم لنا</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <MultiStep/>
      </>
  )
}
  

  