import React from 'react';

const Offer = () => {
    return (
        <div className='container mx-auto mt-8 mb-8'>
            <div className='flex justify-between px-4 py-2 items-center bg-amber-900 md:h-24'>
                <div>
                    <h2 className='text-2xl font-bold text-gray-100'>Special Offer</h2>
                    <p className=' text-amber-100'>Get 20% off on your first purchase! </p>
                </div>
                <div className='flex flex-col md:flex-row justify-center items-center gap-2'>
                    <button className=' w-full text-white rounded-lg hover:bg-amber-800 transition-colors duration-300 border border-amber-100 px-6 py-1'>
                        WELLCOM20
                    </button>
                    <button className='w-full text-white px-6 py-2 rounded-lg bg-amber-950 hover:bg-amber-700 transition-colors duration-300'>Shop Now</button>
                </div>
            </div>
            
        </div>
    );
};

export default Offer;