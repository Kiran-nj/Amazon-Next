import { removeUser } from '@/Store/nextSlice'
import { StateProps } from '@/type'
import { signOut } from 'next-auth/react'
import React from 'react'
import { DiVim } from 'react-icons/di'
import { LuMenu } from 'react-icons/lu'
import { RiH1 } from 'react-icons/ri'
import { useDispatch, useSelector } from 'react-redux'

const BottomHeader = () => {
const dispatch =useDispatch();
const {userInfo} =useSelector((state:StateProps)=>state.next)
const handleSignOut = () =>{
      signOut();
      dispatch(removeUser());
};

  return (
    <div className='bg-slate-900 h-10 w-full items-center flex'>
      <p className='flex items-center text-sm gap-1 m-3 border border-transparent transition-all
       hover:border-gray-600 p-1 rounded-lg cursor-pointer' ><LuMenu/> All</p>

<p className=' hidden md:inline-flex  text-sm gap-1 m-3 border border-transparent
       hover:border-gray-600 p-1 rounded-lg transition-all cursor-pointer' > Todays Deals</p>

<p className='hidden md:inline-flex    text-sm gap-1 m-3 border border-transparent
       hover:border-gray-600 p-1 rounded-lg transition-all cursor-pointer' > Customer Service</p>

<p className='hidden md:inline-flex    text-sm gap-1 m-3 border border-transparent
       hover:border-gray-600 p-1 rounded-lg transition-all cursor-pointer' > Registry</p>

<p className=' hidden md:inline-flex   text-sm gap-1 m-3 border border-transparent
       hover:border-gray-600 p-1 rounded-lg transition-all cursor-pointer' > GiftCard</p>

<p className='hidden md:inline-flex    text-sm gap-1 m-3 border border-transparent
       hover:border-gray-600 p-1 rounded-lg transition-all cursor-pointer' > Sell</p>
{userInfo? 
(<button onClick={handleSignOut} className=' hidden md:inline-flex   text-sm gap-1 m-3 border border-transparent
       hover:border-gray-600 p-1 rounded-lg transition-all cursor-pointer text-red-600' >
               SignOut</button>): ("")
}

</div> 

  )
}

export default BottomHeader
