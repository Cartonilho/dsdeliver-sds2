import React, { useEffect, useState } from 'react';
import './styles.css';
import StepsHearder from './StepsHearder';
import ProductList from './ProductsList';
import { Product } from './types';
import { fetchProducts } from '../api';


function Orders(){
    const [products,setProducts] = useState<Product[]>([]);
    console.log(products);
    useEffect(() =>{
        fetchProducts()
        .then(response => setProducts(response.data))
        .catch(error => console.log(error))
    },[])

    return(
        <div className="orders-container">
            <StepsHearder />
            <ProductList products={products} />
        </div>
    )
}

export default Orders;