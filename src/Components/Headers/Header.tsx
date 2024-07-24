import React, { useEffect, useState } from 'react'
import Logo from '../../images/logo.png'
import Cart from '../../images/cartIcon.png'
import { FaLocationDot } from "react-icons/fa6";
import { HiSearch } from 'react-icons/hi';
import { BiCaretDown } from 'react-icons/bi';
import Image  from 'next/image';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import { StateProps } from '@/type';
import { useSession , signIn , signOut } from 'next-auth/react';
import { addUser } from '@/Store/nextSlice';
import { useRouter } from 'next/router';

const Header = () => {
  const { data: session } = useSession()
  const {productData,favoriteData ,userInfo} =useSelector((state:StateProps)=>state.next)
  console.log( "data:",productData);
  const [searchQuery, setSearchQuery] = useState('');
  const dispatch=useDispatch()
  const router = useRouter();

  const handleSearch = () => {
    router.push(`/Search?query=${searchQuery.trim()}`);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  useEffect(()=>{
    if(session){
      dispatch(addUser({
        name:session?.user?.name,
        email:session?.user?.email,
        image:session?.user?.image
      }))
    }
  },[session])

  return (
    <div className='w-full h-20 bg-gray-950 sticky top-0 z-50 items-center'>
        
       <div className='h-full w-full inline-flex  justify-between items-center gap-1 mdl:gap-3 px-4' >
        {/* logo */}
        <Link href={"/"} className='hover:scale-110  cursor-pointer transition-all mt-2'>
        <Image src={Logo} alt="logo" className=" w-28   "  width={112} />
       </Link>
       {/* delevery */}
       <div className='hidden md:inline-flex items-center hover:border-gray-400 duration-300 p-2
        cursor-pointer border border-transparent rounded-md '>
        <FaLocationDot />
        <h1>USA</h1>
       </div>
        {/* search */}
        <div className='flex-1 hidden md:flex items-center'>
          <input
            className='text-black w-full h-full outline-none p-2 rounded-l-md border focus-visible:border-orange-300 focus-visible:border-[1px]'
            type='text'
            placeholder='Search products'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button
            className='bg-orange-300 rounded-r-md text-slate-950 hover:scale-105 p-2 transition-all hover:bg-orange-500 hover:text-white'
            onClick={handleSearch}
          >
            <HiSearch className='text-2xl' />
          </button>
        </div>
       {/* signin */}
       { userInfo ? (
       <div className='text-slate-300 text-xs flex flex-col items-center border border-transparent
        hover:border-amber-600 p-1 transition-all cursor-pointer rounded-full' >
        <img src={userInfo.image} alt="" className='h-14 w-14 rounded-full object-cover' />

       </div>) : (
       <div onClick={()=>signIn()} className='text-slate-300 text-xs flex flex-col items-center border border-transparent
        hover:border-gray-600 p-1 rounded-md transition-all cursor-pointer' >
        <p >Hello Signin</p>
        <p className='text-white'>Account</p>
        <BiCaretDown />
       </div>)

        }

       {/* favorite */}
       <div className='text-slate-300 text-sm flex flex-col items-center border 
       border-transparent hover:border-gray-600 p-2 rounded-md transition-all cursor-pointer' >
        {favoriteData.length>0 && 
        <span className='text-amber-500 text-xl'>{favoriteData.length}</span>
        }
        <p className='text-white'>Favorites</p>

       </div>
   
       {/* cart */}
       <Link href={"/Cart"} className='flex flex-col items-center'>
        <Image src={Cart} alt='cart' className='w-14 h-8 hover:scale-125 transition-all relative cursor-pointer' />
        <p className='text-xs ml-2'>cart</p>
        <span className='absolute top-1 text-yellow-500 right-9'>{productData? productData.length : 0}</span>
       </Link>
       </div>
    </div>
  )
}

export default Header
