import React, { useEffect, useState } from 'react';
import { useData } from '../../context/DataContext';
import ProductCard from '../../components/productCard/ProductCard';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';


const Shop = () => {
    const { products } = useData();
    // 1. Setup State
    const [currentPage, setCurrentPage] = useState(1);
    const [filters, setFilters] = useState({
        color: '',
        size: '',
        isStock: false,
    });
    // 1. Filter the products first
    const filteredProducts = products.filter((product) => {
        const matchColor = filters.color ? product?.variants?.[0]?.color === filters.color : true;
        const matchSize = filters.size ? product?.variants?.[0]?.size === filters.size : true;
        const matchStock = filters.isStock ? product?.variants?.[0]?.is_in_stock === true : true;

        return matchColor && matchSize && matchStock;
    });
    const itemsPerPage = 8;

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }, [currentPage]);

    // 2. Calculate indices
    const indexOfLastProduct = currentPage * itemsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;

    // 3. Slice the data
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    // 4. Determine total pages
    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

    // 5. Change page function
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    const handleFilterChange = (key, value) => {
        setFilters(prev => ({ ...prev, [key]: value }));
        setCurrentPage(1);
    };
    return (
        <div className='container mx-auto pt-20'>
            <div className='flex flex-col md:flex-row items-start gap-4'>
                <div className='bg-gray-100 w-full md:w-80 md:min-h-[600px] md:sticky top-20 p-4 rounded-lg shadow-md'>
                    <h3 className="font-bold border-b pb-2 text-xl text-amber-900">Filters</h3>

                    {/* Color Filter */}
                    <div className='overflow-hidden'>
                        <label className="block text-md font-bold mt-4 text-amber-900">Colors</label>
                        <select
                            onChange={(e) => handleFilterChange('color', e.target.value)}
                            className="w-11/12 mt-1 p-2 border text-black border-amber-900 rounded "
                        >
                            <option className='hover:bg-amber-900 hover:text-white' value="">All Colors</option>
                            <option value="Red">Red</option>
                            <option value="Blue">Blue</option>
                            <option value="Black">Black</option>
                        </select>
                    </div>

                    {/* Size Filter */}
                    <div>
                        <label className="block text-md font-bold mt-4 text-amber-900">Size</label>
                        <div className="flex gap-2 mt-1">
                            {['Small', 'Large'].map(s => (
                                <button
                                    key={s}
                                    onClick={() => handleFilterChange('size', s === filters.size ? '' : s)}
                                    className={`px-3 py-1 border border-amber-900 text-black hover:bg-amber-900 hover:text-white rounded w-full ${filters.size === s ? 'bg-amber-900 text-white' : 'bg-white'}`}
                                >
                                    {s}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Stock Toggle */}
                    <label className=" btn w-full space-x-2 mt-4 border-none bg-transparent">
                        <input
                            type="checkbox"
                            checked={filters.isStock}
                            onChange={(e) => handleFilterChange('isStock', e.target.checked)}
                            className="w-5 h-5 mb-1 border border-amber-900 rounded focus:ring-amber-900 text-amber-900"
                        />
                        <span className="text-lg font-bold w-full text-amber-900 text-start">In Stock Only</span>
                    </label>

                    <button
                        onClick={() => { setFilters({ color: '', size: '', isStock: false }); setCurrentPage(1); }}
                        className="text-lg font-semibold btn bg-amber-900 text-white border border-amber-900 w-full mt-6
                        hover:bg-amber-950 hover:text-white transition duration-500
                        "
                    >
                        Clear All Filters
                    </button>
                </div>
                <div className='flex flex-col min-h-screen'>
                    <h3 className="text-2xl font-bold text-amber-900 mt-1 ml-1">CoffeeMug Features</h3>
                    <p className='text-gray-600 ml-1 mt-1 mb-4'>{currentProducts.length} products found</p>
                    <div className=' min-h-[600px]'>
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentPage}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.2 }}
                                className="grid grid-cols-2 md:grid-cols-4 gap-6 justify-items-center"
                            >
                                {   currentProducts.length > 0 ?(currentProducts.map(product => <ProductCard key={product.id} product={product} />)) : (
                                    <div className="col-span-full text-center text-gray-500">
                                        No products found with the selected filters.
                                    </div>
                                )
                                    
                                }
                            </motion.div>
                        </AnimatePresence>

                    </div>
                    <div className="mt-auto py-10 flex justify-center border-t border-gray-100 gap-2">
                        <button
                            disabled={currentPage === 1}
                            onClick={() => setCurrentPage(prev => prev - 1)}
                            className="px-3 py-1 bg-amber-900 text-white rounded-full disabled:opacity-50"
                        >
                            <FaChevronLeft />
                        </button>
                        {Array.from({ length: totalPages }, (_, index) => (
                            <button
                                key={index + 1}
                                onClick={() => paginate(index + 1)}
                                className={`px-4 py-2 border rounded-full transition-colors ${currentPage === index + 1
                                    ? 'bg-amber-900 text-white border-amber-900'
                                    : 'bg-white text-gray-700 hover:bg-amber-900 hover:text-white border-amber-900'
                                    }`}
                            >
                                {index + 1}
                            </button>
                        ))}
                        <button
                            disabled={currentPage === totalPages}
                            onClick={() => setCurrentPage(prev => prev + 1)}
                            className="px-3 py-1 hover:bg-amber-900  hover:text-white rounded-full disabled:opacity-50 border border-amber-900"
                        >
                            <FaChevronRight />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;