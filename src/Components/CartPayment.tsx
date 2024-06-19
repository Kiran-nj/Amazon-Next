import React, { useEffect, useState } from 'react'
import { IoBagCheckOutline } from "react-icons/io5";
import Formatted from './Formatted';
import { useSelector } from 'react-redux';
import { StateProps, StoreProduct } from '@/type';
import { loadStripe } from '@stripe/stripe-js';
import { useSession } from 'next-auth/react';




const CartPayment = () => {

    const {productData,userInfo} =useSelector((state:StateProps)=>state.next)
   const [totalAmount,setTotalAmount] =useState(0);
   useEffect(()=> {
       let amount=0;
       productData.forEach((item :StoreProduct)=>{
        amount+=item.price*item.quantity
        setTotalAmount(amount);
        })
       
    },[productData])

        //stripePayment

    const stripePromice = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

    const {data:session} =useSession()
    const handleCheckOut = async () => { 
     const  stripe = await stripePromice;
     const responce = await fetch("/api/checkOut",{
      method: "post",
      headers: {
        "content-Type":"application/json",
      },
      body: JSON.stringify({ items: productData ,email: session?.user?.email}) ,

     })
      const checkOutSession = await responce.json()
      //redirecting user to stripe check out
      const result:any = await stripe?.redirectToCheckout
      ({sessionId:checkOutSession.id})

      if(result.error){
        alert(result.error.message)
        }

    }

  return (
    <div className='flex flex-col items-center bg-slate-50 h-[90%] rounded-lg w-full m-5 '>
        
         <IoBagCheckOutline className='text-2xl m-2' />        
         <h1>Proceed to Checkout</h1>

            <h1 className='m-4'>Review your order and proceed to payment</h1>
            <p className=''>Total Amount</p>
            <p className='text-orange-500'><Formatted amount={totalAmount}/></p>
          {userInfo?     
             (<button onClick={handleCheckOut} className='bg-slate-950 text-white p-2 rounded-lg mt-2 hover:bg-orange-600'>
            Proceed to Buy</button>) : (<div className='text-rose-500 m-3 cursor-pointer'>Login to continue</div>)
            
            }



    </div>
  )
}

export default CartPayment
