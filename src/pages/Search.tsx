import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { ProductProps } from '@/type';
import Image from 'next/image';
import { HiHeart, HiShoppingCart } from 'react-icons/hi';
import { useDispatch } from 'react-redux';
import { addToCart, addToFavorites } from '@/Store/nextSlice';
import Formatted from '@/Components/Formatted';

const Search = () => {
  const router = useRouter();
  const { query } = router.query;
  const [searchResults, setSearchResults] = useState<ProductProps[]>([]);
  const dispatch = useDispatch();

  const handleAddToCart = (product: ProductProps) => {
    dispatch(addToCart({ ...product, quantity: 1 }));
  };

  const handleAddToFavorites = (product: ProductProps) => {
    dispatch(addToFavorites({ ...product, quantity: 1 }));
  };

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const res = await fetch(`https://fakestoreapiserver.reactbd.com/tech`);
        if (!res.ok) {
          throw new Error(`Error fetching data: ${res.statusText}`);
        }
        const data = await res.json();
        console.log('Fetched Data:', data); // Debug log
        if (query) {
          const filteredResults = data.filter((product: ProductProps) =>
            product.title.toLowerCase().includes((query as string).toLowerCase())
          );
          setSearchResults(filteredResults);
        } else {
          setSearchResults(data);
        }
      } catch (error) {
        console.error('Failed to fetch search results:', error);
      }
    };

    fetchSearchResults();
  }, [query]);

  return (
    <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-8'>
      {searchResults.map(({ brand, category, description, image, isNew, oldPrice, price, title, _id }: ProductProps) => (
        <div key={_id} className='w-full text-black flex flex-col bg-white rounded-lg overflow-hidden group'>
          {/* Image */}
          <div className='w-full h-[300px] relative'>
            <Image
              width={300}
              height={300}
              alt={title}
              src={image}
              className='rounded-lg mb-4 scale-90 hover:scale-105 object-cover transition-all'
            />
            {/* Icons */}
            <div className='absolute w-12 h-24 top-32 right-2 flex flex-col justify-center rounded-lg items-center translate-x-14 group-hover:translate-x-0 transition-all duration-700'>
              <span onClick={() => handleAddToCart({ _id, brand, category, image, description, isNew, oldPrice, price, title })} className='flex justify-center items-center text-3xl rounded-lg w-full h-full hover:bg-amber-400'><HiShoppingCart /></span>
              <span onClick={() => handleAddToFavorites({ _id, brand, category, image, description, isNew, oldPrice, price, title })} className='flex justify-center items-center text-3xl rounded-lg w-full h-full hover:bg-amber-400'><HiHeart /></span>
            </div>
            {/* Offer */}
            {isNew && (
              <p className='absolute top-2 right-1 text-sm text-purple-600 group-hover:animate-bounce'>
                Save: <Formatted amount={oldPrice - price} />
              </p>
            )}
          </div>
          <hr />
          {/* Product Details */}
          <div className='flex flex-col'>
            <p className='text-sm p-2 tracking-wide text-slate-400'>{category}</p>
            <p className='pb-2 px-2'>{title}</p>
            <div className='flex justify-between px-2'>
              <p className='text-sm line-through'><Formatted amount={oldPrice} /></p>
              <p className='font-bold'><Formatted amount={price} /></p>
            </div>
            <p className='text-xs px-2 mb-2'>{description.substring(0, 120)}</p>
            {/* Add to Cart Button */}
            <button onClick={() => handleAddToCart({ _id, brand, category, image, description, isNew, oldPrice, price, title })} className='bg-orange-500 hover:bg-orange-600 p-1'>Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Search;
