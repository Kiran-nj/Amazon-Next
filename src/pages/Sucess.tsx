import { resetCart } from '@/Store/nextSlice';
import Link from 'next/link'
import React from 'react'
import { useDispatch } from 'react-redux'

const Sucess = () => {
    const dispatch =useDispatch();
  return (
    <div className='flex flex-col items-center p-4 justify-center h-[80vh]'>
         <h1> Thank you for shopping!!</h1>
         <Link href="/" onClick={()=> dispatch(resetCart())} >
         <button className='bg-orange-300 p-2  hover:bg-orange-600 rounded-lg m-4' >Continue shopping</button>
         </Link>
    </div>
  )
}

export default Sucess
