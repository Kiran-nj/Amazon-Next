import { resetCart } from '@/Store/nextSlice';
import React from 'react'
import { useDispatch } from 'react-redux';

const ResetButton = () => {
    const dispatch = useDispatch();
   
    const handleReset = () => {
        const confirmReset = window.confirm("Are you sure that you want to reset the cart");
        if (confirmReset) {
       dispatch(resetCart());
    }}

  return (
    <div 
     onClick={handleReset}
     className='p-2 bg-slate-400 w-20 mt-2 ml-1 rounded-lg text-white text-center
     hover:bg-red-600 transition-all cursor-pointer'>
      <button>Reset</button>
    </div>
  )
}


export default ResetButton;
