import React, { createContext, useEffect, useState } from 'react';
import { fetchAllDocuments } from './apiDocument';
export const DocumentsContext = createContext();
export const DocumentProvider = ({ children }) => {
    const [documents, setDocuments] = useState([])
    const [documentsLength,setDocumentsLength]=useState(0)
    const updateDocuments=(newDocuments)=>{
        setDocuments(newDocuments)
        setDocumentsLength(newDocuments.length)
    }
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchAllDocuments()
                setDocuments(data)
                setDocumentsLength(data.length)
            } catch (error) {
                console.error('Error in fetching the Documents', error)
            }
        }
        fetchData();
    },[])
  
    return(
        <DocumentsContext.Provider value={{documents,documentsLength,updateDocuments}}>
            {children}
        </DocumentsContext.Provider>
    )
}   