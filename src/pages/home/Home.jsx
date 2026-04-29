import React from 'react';
import Banner from '../../components/banner/Banner';
import HeroCom from '../../components/heroCom/HeroCom';
import Offer from '../../components/offer/Offer';
import { useData } from '../../context/DataContext';
import ProductCard from '../../components/productCard/ProductCard';
import Products from './Products';
import Comments from './Comments';

const Home = () => {
    const {products, loading} = useData();

    console.log( loading); 
    return (
        <div>
            <Banner/>
            <HeroCom/>
            <Offer/>
            <Products products={products} loading={loading}/>
            <Comments/>
        </div>
    );
};

export default Home;