
import React from 'react';
import '../Product.css';
import DataComponent from '../DataComponent'
import { fetchProductsData } from '../api'
const Products=()=>{
    return <DataComponent fetchData={fetchProductsData}/>
}
export default Products
