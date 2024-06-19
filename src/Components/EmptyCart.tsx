import Link from 'next/link'
import React from 'react'

const EmptyCart = () => {
  return (
    <div className=' bg-slate-300 flex text-slate-950 flex-col h-[80vh] max-w-screen-2xl justify-center items-center'>
          
             <h1> Cart is empty </h1>
             <Link href={"/"}>
             <button className='bg-black text-gray-50 mt-5 rounded-lg p-2 hover:bg-orange-600'>Go back to Shopping!!</button>
             </Link>
    </div>
  )
}

export default EmptyCart
