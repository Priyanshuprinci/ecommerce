import { loadStripe } from '@stripe/stripe-js'
import Axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { DocumentsContext } from './DocumentsContext'
import { SERVER_ACCESS_URL } from './constant'
const DataComponent = ({ fetchData }) => {
    const { updateDocuments } = useContext(DocumentsContext)
    const [data, setData] = useState([])
    useEffect(() => {
        const fetchDatafromAPI = async () => {
            try {
                const responseData = await fetchData()
                setData(responseData)
            }
            catch (error) {
                console.error('Error fetching data', error)
            }
        }
        fetchDatafromAPI()
    }, [fetchData])
    // const handlePaymentButtonClick = async (info) => {
    //     // setShowPayment(true);
    //     console.log(info)
    //     const stripe = await loadStripe("pk_test_51PBcHOSHekcWlW0r1tDBchWcz3LbE7A5BsBqd4LfCEt0x1vmhuDDPie5t3NfnDnZXirHgJLdXm75Du5oSnT3IIxu006wwsj0OO")
    //     const body = {
    //         products: [info]
    //     }
    //     const headers = {
    //         "Content-Type": "application/json"
    //     }
    //     const response = await fetch("http://localhost:9000/api/create-checkout-session", {
    //         method: "POST",
    //         headers: headers,
    //         body: JSON.stringify(body)
    //     })
    //     const session = await response.json()
    //     const result = stripe.redirectToCheckout({
    //         sessionId: session.id
    //     })
    //     if (result.error) {
    //         console.log(result.error)
    //     }
    // };

    async function addToCart(info) {
        try {
            const response = await Axios.get(`${SERVER_ACCESS_URL}/cartProducts`)
            const cartItems = response.data;
            const existingItemIndex = cartItems.findIndex(item => item.id === info.id)
            // console.log(existingItemIndex)
            let updatedCart = []
            let updatedCartItems = {}
            if (existingItemIndex !== -1) {

                updatedCart = cartItems.map((item, index) => {
                    if (index === existingItemIndex) {
                        const singleQuantityPrice = Math.floor(item.price / item.quantity)
                        let newQuantity = item.quantity + 1
                        let newPrice = Math.floor(singleQuantityPrice * newQuantity)
                        // console.log(newPrice)
                        updatedCartItems = { ...item, price: newPrice, quantity: newQuantity };
                        return updatedCartItems
                    }

                    return item;
                });
                updateDocuments(updatedCart)
                // console.log(updatedCartItems)
                await Axios.put(`${SERVER_ACCESS_URL}/cartProducts`, updatedCartItems)
            }
            else {
                const newCartItem = {
                    id: info.id,
                    title: info.title,
                    image: info.image,
                    price: Math.floor(info.price * 85),
                    quantity: info.quantity
                };
                // console.log(singleQuantityPrice)
                try {
                    await Axios.post(`${SERVER_ACCESS_URL}/cartProducts`, newCartItem);
                    console.log('Product added successfully');
                    const response = await Axios.get(`${SERVER_ACCESS_URL}/cartproducts`)
                    updatedCart = response.data
                    // setCart(updatedCart); // Update the cart state with the new item
                } catch (error) {
                    console.log(error);
                }

            }
            updateDocuments(updatedCart)
            // window.location.reload()
        } catch (error) {
            console.error('Error checking cart:', error)
        }

    }
    return (
        <div className="outer">
            {data.map(function (i) {
                return (
                    <div key={i.id} className="card">
                        <h6>{i.id}</h6>
                        <img id="images" className="card-img-top" src={i.image} alt="" />
                        <div className="card-body">
                            <h5 className="card-title" style={{ fontSize: "20px", fontWeight: 700 }}>{i.title.substring(0, 20)}</h5>
                            <h6 style={{ fontWeight: 800 }}>INR.{Math.floor(i.price * 85)}</h6>
                            <p className="card-text">{i.description.substring(0, 80)}</p>
                            <button onClick={() => addToCart(i)} className="btn btn-primary">ADD TO CART</button>
                            <button style={{ margin: "5px" }} className="btn btn-success">BUY NOW</button>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
export default DataComponent