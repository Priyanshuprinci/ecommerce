import Axios from 'axios';
import { SERVER_ACCESS_URL } from './constant';
export const fetchAllDocuments=async()=>{
    try{
        const response=await Axios.get(`${SERVER_ACCESS_URL}/cartProducts`)
        return response.data;
    }catch(error){
        console.error('Error fetching documents:',error)
        throw error
    }
}