import React, { useEffect, useState } from 'react';
import { useData } from '../../context/DataContext';
import ProductCard from '../../components/productCard/ProductCard';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';


const Shop = () => {
    const { products } = useData();
    // 1. Setup State
    const [currentPage, setCurrentPage] = useState(1);
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
    const totalPages = Math.ceil(products.length / itemsPerPage);

    // 5. Change page function
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    return (
        <div className='container mx-auto mt-20'>
            <div className='flex flex-col md:flex-row items-start gap-4'>
                <div className='bg-gray-100 w-full md:w-80 md:h-screen md:sticky top-20 p-4 rounded-lg shadow-md'>
                    filter and sort
                </div>
                <div className='flex flex-col min-h-screen'>
                    <div className='grid grid-cols-4 justify-items-center gap-4 min-h-[600px]'>
                        {
                            currentProducts.map(product => <ProductCard key={product.id} product={product} />)
                        }
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