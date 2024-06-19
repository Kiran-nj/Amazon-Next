import React from 'react'
import { useSelector } from 'react-redux'
import { StateProps, StoreProduct } from './../type.d';
import ProductCart from '@/Components/ProductCart';
import ResetButton from '@/Components/ResetButton';
import EmptyCart from '@/Components/EmptyCart';
import CartPayment from '@/Components/CartPayment';

const Cart = () => {
  const { productData } = useSelector((state: StateProps) => state.next);

  return (
    <div>
      {productData.length === 0 ? (
        <div>
          <EmptyCart />
        </div>
      ) : (
        <>
          <div className='max-w-screen-2xl px-6 mx-auto grid grid-cols-5 bg-white text-slate-950'>
            <div className='bg-slate-200 text-black col-span-4 p-4 rounded-lg m-2'>
              <div className='flex justify-between items-center border-b-[1px] border-gray-400'>
                <p className='py-2 font-bold'>Shopping Cart</p>
                <p className=''>Subtotal</p>
              </div>
              <div>
                {productData.map((item: StoreProduct) => (
                  <div key={item._id} className='flex flex-col pt-2'>
                    <ProductCart item={item} />
                  </div>
                ))}
                <div>
                  <ResetButton />
                </div>
              </div>
            </div>
            {/* Payment totals */}
            <div className='col-span-1 items-center justify-center flex bg-slate-200 m-1 my-3
             h-[60vh] rounded-lg sticky top-20'>
              <CartPayment />
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default Cart;
