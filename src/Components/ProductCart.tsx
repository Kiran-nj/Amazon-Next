import { increaseQuantity, decreaseQuantity, deleteProduct } from '@/Store/nextSlice';
import Image from 'next/image';
import React from 'react'
import { useDispatch } from 'react-redux';
import Formatted from './Formatted';



interface Item{
    brand: string;
    category: string;
    description: string;
    image: string;
    isNew: boolean;
    oldPrice: number;
    price: number;
    title: string;
    _id: number;
    quantity: number;
}
interface cartProductProps{
    item:Item;
}
const ProductCart = ({item}:cartProductProps) => {

    const dispatch = useDispatch(); // Get dispatch function


    const handleIncreaseQuantity = () => {
        dispatch(increaseQuantity({ ...item, quantity: 1 }));
    };

    const handleDecreaseQuantity = () => {
        dispatch(decreaseQuantity({ ...item, quantity: 1 }));
    };

    const handleRemoveProduct = () => {
        dispatch(deleteProduct(item._id));

    };
  
      
  return (
    <div className='flex items-center bg-slate-300 rounded-lg overflow-hidden'>
        <Image alt='img' className='scale-95 hover:scale-105 transition-all cursor-pointer object-cover' 
        width={150} height={150} src={item.image} />
        <div className='flex flex-col justify-between pl-4 py-3 w-full'>
            <h2 className='text-lg'>{item.title}</h2>
            <p className='text-sm hidden lg:flex'>{item.description}</p>
            <p className='text-lg font-bold'>${item.price}</p>
            <p className='text-sm'>Quantity: {item.quantity}</p>
            <div className='w-10 flex flex-col  md:flex-row   gap-2 '>
            <button onClick={handleDecreaseQuantity}
             className='bg-slate-700 hover:bg-black text-white font-bold py-
            2 px-4 my-1 rounded'>-</button>
            <button  onClick={handleIncreaseQuantity} 
             className='bg-slate-700 hover:bg-black text-white font-bold py-
            2 px-4 my-1 rounded'>+</button>
            <button  onClick={handleRemoveProduct}
            className='bg-slate-700 hover:bg-black text-white font-bold py-
            2 px-4 rounded my-1'>Remove</button>
            </div>

        </div>
        <div className='mt-14 mr-8 '>
            <p className='text-xl mr-5 w-16'> <Formatted amount={item.price * item.quantity}/></p>
        </div>
        
    </div>
  )
}

export default ProductCart
