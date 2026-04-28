import React from 'react';
import img1 from '../../assets/hero-1.png';
import img2 from '../../assets/hero-2.png';
import img3 from '../../assets/hero-3.png';
import img4 from '../../assets/hero-4.png';

const HeroCom = () => {
    return (
        <div>
            <div className="p-4 container mx-auto">
                <h2 className="text-center mb-8 uppercase text-sm">Curated Collections</h2>

                {/* The Grid Container */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">

                    {/* Item 1*/}
                    <div className="flex-1 relative group overflow-hidden rounded-xl bg-zinc-900 col-span-2 h-[150px] md:h-[300px]">
                        <img src={img4} className="absolute inset-0 h-full object-fit transition-transform duration-500 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-black/20 p-6 flex flex-col justify-end">
                            <h3 className="font-bold text-white">The Signature Series</h3>
                            <p className="text-gray-200 text-sm">Timeless shapes for every roast.</p>
                        </div>
                    </div>

                    {/* Item 2 */}
                    <div className=" relative group row-span-2 md:row-span-1 overflow-hidden rounded-xl bg-[#2a1f1a] h-full md:h-[300px]">
                        <img src={img3} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        <div className="absolute inset-0 p-6 flex flex-col justify-end">
                            <h3 className="font-bold text-white">Custom Builder</h3>
                            <p className="text-gray-200 text-sm">Your vision, our hands.</p>
                        </div>
                    </div>

                    {/* Item 3 */}
                    <div className="relative group overflow-hidden row-span-1 rounded-xl bg-[#2a1f1a] h-[150px] md:h-[300px]">
                        <img src={img2} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        <div className="absolute inset-0 p-6 flex flex-col justify-end">
                            <h3 className="font-bold text-white">Custom Builder</h3>
                            <p className="text-gray-200 text-sm">Your vision, our hands.</p>
                        </div>
                    </div>

                    {/* Item 4 */}
                    <div className="relative group overflow-hidden rounded-xl bg-zinc-900 md:col-span-2 h-[150px] md:h-[300px]">
                        <img src={img1} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        <div className="absolute inset-0 p-6 flex flex-col justify-end items-end text-right">
                            <h3 className="font-bold text-white">Brewing Tools</h3>
                            <p className="text-gray-200 text-sm">Elevate your home barista kit.</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default HeroCom;