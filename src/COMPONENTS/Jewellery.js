import React from 'react'
import DataComponent from '../DataComponent'
import { fetchJewelleryData } from '../api'
// import Axios from 'axios';
// import React from 'react';
// import '../Product.css';
// import { SERVER_ACCESS_URL } from '../constant';
// function Jewellery() {
//     const [fetchJewellery, setFetchedJewellery] = React.useState([]);
//     React.useEffect(() => {
//         Axios.get("https://fakestoreapi.com/products/category/jewelery")
//             .then(function (output) {
//                 setFetchedJewellery(output.data);
//                 console.log("hi")
//                 // console.log(output.data)
//             })
//             .catch(function (error) {
//                 console.log(error);
//             });
//     }, []);
//     // console.log(fetchProduct)
//     async function addToCart(info) {
//         try {
//             const response = await Axios.get(`${SERVER_ACCESS_URL}/cartProducts`)
//             const cartItems = response.data;
//             const existingItemIndex = cartItems.findIndex(item => item.id === info.id)
//             // console.log(existingItemIndex)
//             let updatedCartItems = {}
//             if (existingItemIndex !== -1) {

//                 cartItems.map((item, index) => {
//                     if (index === existingItemIndex) {
//                         let newQuantity = item.quantity + 1
//                         let newPrice = Math.floor(item.price * newQuantity)
//                         // console.log(newPrice)
//                         updatedCartItems = { ...item, price: newPrice, quantity: newQuantity };
//                         return updatedCartItems
//                     }

//                     return item;
//                 });

//                 //  console.log(updatedCartItems)
//                 await Axios.put(`${SERVER_ACCESS_URL}/cartProducts`, updatedCartItems)
//             }
//             else {
//                 const newCartItem = {
//                     id: info.id,
//                     title: info.title,
//                     image: info.image,
//                     price: Math.floor(info.price * 85),
//                     quantity: info.quantity
//                 };

//                 try {
//                     await Axios.post(`${SERVER_ACCESS_URL}/cartProducts`, newCartItem);
//                     console.log('Product added successfully');
//                     // setCart(updatedCart); // Update the cart state with the new item
//                 } catch (error) {
//                     console.log(error);
//                 }
               
//                 window.location.reload()
//             }
//         } catch (error) {
//             console.error('Error checking cart:', error)
//         }

//     }
//   return (
//     <div className="outer">
        
//     {fetchJewellery.map(function (i) {
//         return (
            
//             <div key={i.id} className="card">
//                 <h6>{i.id}</h6>
//                 <img id="images" className="card-img-top" src={i.image} alt="" />
//                 <div className="card-body">
//                     <h5 className="card-title" style={{ fontSize: "20px", fontWeight: 700 }}>{i.title.substring(0, 20)}</h5>
//                     <h6 style={{ fontWeight: 800 }}>INR.{Math.floor(i.price * 85)}</h6>
//                     <p className="card-text">{i.description.substring(0, 80)}</p>
//                     <button onClick={() => addToCart(i)} className="btn btn-primary">ADD TO CART</button>
                    
//                 </div>
//             </div>
//         );
//     })}
// </div>
//   )
// }

// export default Jewellery

const Jewellery=()=>{
    
    return  <DataComponent fetchData={fetchJewelleryData}/>
}
export default Jewellery