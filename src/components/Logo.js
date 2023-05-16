import Link from 'next/link'
import React from 'react'
import {motion} from 'framer-motion'
import { GithubIcon, LogoSVG } from './Icons';

const MotionLink = motion(Link);
const Logo = () => {
  return (
    <div className='flex items-center justify-center mt-2 '>
        <MotionLink href="/" className='w-12 h-12 flex items-center justify-center mt-4 '
        whileHover={{scale: 1.2}}> <LogoSVG/></MotionLink>
    </div>
  )
}

export default Logo