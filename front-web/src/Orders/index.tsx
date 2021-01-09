import React, { useEffect, useState } from 'react';
import './styles.css';
import StepsHearder from './StepsHearder';
import ProductList from './ProductsList';
import { Product, OrderLocationdata } from './types';
import { fetchProducts } from '../api';
import OrderLocation from './OrderLocation';


function Orders(){
    const [products,setProducts] = useState<Product[]>([]);
    const [orderLocation, setOrderLocation] =useState<OrderLocationdata>();
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
            <OrderLocation onChangeLocation={location => setOrderLocation(location)} />
        </div>
    )
}

export default Orders;