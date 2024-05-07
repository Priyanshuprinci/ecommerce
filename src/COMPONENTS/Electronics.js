import React from 'react'
import DataComponent from '../DataComponent'
import { fetchElectronicsData } from '../api'
const Electronics=()=>{
    return <DataComponent fetchData={fetchElectronicsData}/>
}
export default Electronics