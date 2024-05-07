import axios from 'axios'
const fetchData=async(url)=>{
    try{
        const response=await axios.get(url)
        return response.data
    }catch(error){
        console.error('Error fetching Data',error)
        return null
    }
}
export const fetchMenClothesData=()=>fetchData(`https://fakestoreapi.com/products/category/men's%20clothing`)
export const fetchJewelleryData=()=>fetchData('https://fakestoreapi.com/products/category/jewelery')
export const fetchElectronicsData=()=>fetchData('https://fakestoreapi.com/products/category/electronics')
export const fetchWomenClothesData=()=>fetchData(`https://fakestoreapi.com/products/category/women's%20clothing`)
export const fetchProductsData=()=>fetchData('https://fakestoreapi.com/products')
