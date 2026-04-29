import React from 'react';
import ProductCard from '../../components/productCard/ProductCard';
import { Link } from 'react-router';
import { FaArrowRightLong } from 'react-icons/fa6';

const Products = ({ products }) => {
    console.log(products);
    console.log('products');
    return (
        <div className='container mx-auto mb-10'>
            <div className='flex items-center justify-between mb-4 px-4'>
                <div>
                    <h2 className='text-amber-900 font-bold text-xl'>Fan Favourite</h2>
                    <p className='hidden md:block'>Check out our most popular products!</p>
                </div>
                <div>
                    <Link to="/shop" className='text-amber-900 hover:bg-amber-900 hover:text-white hover:transition duration-400 ease-in-out text-md font-bold btn btn-outline'>See All <FaArrowRightLong /> </Link>
                </div>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-5 items-center justify-items-center gap-2 p-2 md:px-4 '>
                {
                    products.slice(0, 5).map(product => <ProductCard key={product.id} product={product} />)
                }
            </div>
        </div>
    );
};

export default Products;