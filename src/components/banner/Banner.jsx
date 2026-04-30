import React, { useState } from 'react';
import ImageSkeleton from '../utility/ImageSkeleton';

const Banner = () => {
    const [loaded, setLoaded] = useState(false);
    return (
        <div className='container mx-auto'>
            <div className="
            relative 
            md:flex 
            md:flex-row-reverse 
            md:items-center 
            md:justify-between 
            w-full
            h-700px 
            md:h-550px
            overflow-hidden
            bg-gray-100
            pt-40
            md:pt-20">
                <div className=" p-4 md:p-8">
                    {/* {
                        !loaded && (<ImageSkeleton />)
                    } */}
                    <img

                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3StjK4K15fWENykPFrniCqIvTBvZ-xq3e8XLKt-lDpVjiYrzLsREJfWPRVSk7Yt3H52fW1sIXvnqySRWS7z2HTbUKlv2xm92fbS3h63Yfk3LjyOs2pZmsKRy1aDXnZ8f5nyW39ixgaXOzyzK65aK5RhGwE93vrkWtvuSUTSXMxm_9iHBOfmrsODuQTKjO6uUmxv71AlnaVIq4aM6lWmjzkVjWTVeQ0lfVxFZ5L3AKTQKPydna6EsJ_5GyEjl1xy61psLLEdZIgAs"
                        alt="Background"
                        onLoad={() => setLoaded(true)}
                        className={`w-400px h-400px object-contain rounded-2xl ${loaded ? 'opacity-100 ' : 'opacity-0 skeleton h-400px w-400px'} transition-opacity duration-500 ease-in-out`}
                    />
                </div>

                <div className="absolute inset-0 flex flex-col justify-center bg-gray-300/30
              md:static md:w-1/2 md:bg-transparent text-black p-8">
                    <p className='text-amber-900 text-3xl font-bold'>NEW ARRIVAL</p>
                    <p className="mt-2 text-justify md:text-left">
                        Experience the warmth of handcrafted stoneware designed for the modern connoisseur. Each mug is a unique vessel for your most cherished moments.
                    </p>
                    <div className='flex flex-col md:flex-row'>
                        <button className="flex-1 mt-4 px-6 py-2 bg-amber-900 text-white rounded-lg hover:bg-amber-700 transition duration-300">Shop Now</button>
                        <button className="flex-1 mt-4 md:ml-4 px-6 py-2 bg-gray-300 text-amber-900 rounded-lg hover:bg-amber-900/10 transition duration-300">Learn More</button>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Banner;