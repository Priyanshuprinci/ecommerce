import React from 'react'
import DataComponent from '../DataComponent'
import { fetchWomenClothesData } from '../api'
const WomensClothing=()=>{
    return <DataComponent fetchData={fetchWomenClothesData}/>
}
export default WomensClothing