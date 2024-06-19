import Image from 'next/image'
import React from 'react'
import Logo from '../../images/logo.png'

const Footer = () => {
  return (
    <div className='flex items-center w-full h-16 justify-center gap-5'>
        <Image src={Logo} alt='logo' className='h-10 w-20'/>
       <p>Copyright 2024</p>
    </div>
  )
}

export default Footer
