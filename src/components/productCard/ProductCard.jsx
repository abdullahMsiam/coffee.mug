import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const ProductCard = ({ product }) => {
    return (
        <div className='bg-white shadow-md rounded-lg p-4 flex flex-col justify-between md:w-72 transition duration-300 hover:-translate-y-2 ease-out h-fit'>
            <div>
                <div className='overflow-hidden rounded-lg'>
                    <img className='h-36 md:h-80 w-full object-fit rounded-lg hover:scale-105 duration-300 ease-out hover:overflow-hidden' src={product?.media?.thumbnail} alt={product?.name} />
                </div>
                <div className='mt-4'>
                    <div>
                        <h3 className='text-amber-900 font-semibold text-md'>{product?.name}</h3>
                        <p className='text-gray-600'>{product?.short_description}</p>
                    </div>
                    <div className='flex flex-col md:flex-row items-center justify-between mt-2'>
                        <p className='w-full text-amber-900 font-bold text-lg'>{product?.price?.base?.toFixed(2)} BDT</p>
                        <button className='w-full md:w-auto bg-amber-900 text-white hover:bg-amber-700 text-sm font-bold py-2 px-4 rounded'> <span className='flex justify-around items-center gap-1'><span className='md:hidden'>Cart</span><FaShoppingCart/></span> </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;