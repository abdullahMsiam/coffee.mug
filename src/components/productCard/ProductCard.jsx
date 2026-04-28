import React from 'react';

const ProductCard = ({ product }) => {
    return (
        <div>
            <div>
                <div>
                    <img src={product?.media?.thumbnail} alt={product?.name} />
                </div>
            </div>
        </div>
    );
};

export default ProductCard;