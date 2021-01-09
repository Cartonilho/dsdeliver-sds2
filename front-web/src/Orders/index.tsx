import React, { useEffect, useState } from 'react';
import './styles.css';
import StepsHearder from './StepsHearder';
import ProductList from './ProductsList';
import { Product, OrderLocationdata } from './types';
import { fetchProducts } from '../api';
import OrderLocation from './OrderLocation';
import OrderSummary from './OrderSummary';
import Footer from '../Footer';


function Orders(){
    const [products,setProducts] = useState<Product[]>([]);
    const [selectedProducts,setSelectedProducts] = useState<Product[]>([]);
    const [orderLocation, setOrderLocation] =useState<OrderLocationdata>();
    console.log(products);
    useEffect(() =>{
        fetchProducts()
        .then(response => setProducts(response.data))
        .catch(error => console.log(error))
    },[])

    const handleSelectProduct = (product: Product) => {
        const isAlreadySelected = selectedProducts.some(item => item.id === product.id);
      
        if (isAlreadySelected) {
          const selected = selectedProducts.filter(item => item.id !== product.id);
          setSelectedProducts(selected);
        } else {
          setSelectedProducts(previous => [...previous, product]);
        }
      }

    return(
       <>
        <div className="orders-container">
            <StepsHearder />
            <ProductList 
                products={products}
                onSelectProduct={handleSelectProduct} />
            <OrderLocation onChangeLocation={location => setOrderLocation(location)} />
            <OrderSummary />
        </div>
        <Footer />
       </>
    )
}

export default Orders;