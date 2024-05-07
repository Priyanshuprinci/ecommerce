import React from 'react'
import DataComponent from '../DataComponent'
import { fetchMenClothesData } from '../api'
const MensClothing=()=>{
    return <DataComponent fetchData={fetchMenClothesData}/>
}
export default MensClothing