import React from 'react';
import ProductCard from '../../components/productCard/ProductCard';

const Products = ({ products}) => {
    console.log(products);  
    console.log('products');
    return (
        <div>
            products
            {
                products.slice(0,4).map(product => <ProductCard key={product.id} product={product}/>)
            }
        </div>
    );
};

export default Products;