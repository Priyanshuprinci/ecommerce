// import Axios from 'axios';
import Axios from 'axios';
import React, { useContext } from 'react';
import '../CartModal.css';
import { DocumentsContext } from '../DocumentsContext';
import { SERVER_ACCESS_URL } from '../constant';

import { loadStripe } from '@stripe/stripe-js';
function CartModal() {


  const [cartItems, setCartItems] = React.useState([])
  const { documents, updateDocuments } = useContext(DocumentsContext)
  React.useEffect(() => {
    setCartItems(documents);
  }, [documents]);

  // const [showPayment, setShowPayment] = React.useState(false);
  const handlePaymentButtonClick = async () => {
          // setShowPayment(true);
          // console.log(cartItems)
          const stripe=await loadStripe("pk_test_51PBcHOSHekcWlW0r1tDBchWcz3LbE7A5BsBqd4LfCEt0x1vmhuDDPie5t3NfnDnZXirHgJLdXm75Du5oSnT3IIxu006wwsj0OO")
          const body={
            products:cartItems
          }
          const headers={
            "Content-Type":"application/json"
          }
          const response=await fetch("https://ecommerce-backend-2r67.onrender.com/api/create-checkout-session",{
            method:"POST",
            headers:headers,
            body:JSON.stringify(body)
          })
          const session=await response.json()
          const result=stripe.redirectToCheckout({
            sessionId:session.id
          })
          if(result.error){
            console.log( result.error)
          }
  };

  const handleDelete = (id) => {
    Axios.delete(`${SERVER_ACCESS_URL}/delete/${id}`)
      .then(function (output) {
        // console.log(output.data)
      })
      .catch(function (error) {
        console.log(error)
      })
    const newCartItems = cartItems.filter((item) => item.id !== id)
    setCartItems(newCartItems)

    updateDocuments(newCartItems)

    // window.location.reload()

  }
  async function handleChange(event, id) {
    const qnt = parseInt(event.target.value)
    let updatedCartItem = {}
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === id) {
        const singleQuantityPrice = Math.floor(item.price / item.quantity)
        const newPrice = Math.floor(singleQuantityPrice * qnt)
        updatedCartItem = { ...item, quantity: qnt, price: newPrice }
        return updatedCartItem
      }
      return item
    })
    // console.log("hi")
    //  console.log(updatedCartItems)
    setCartItems(updatedCartItems)
    updateDocuments(updatedCartItems)
    try {
      await Axios.put(`${SERVER_ACCESS_URL}/cartProducts`, updatedCartItem)
    } catch (error) {
      console.error('Error in updating the documents', error)
    }


  }
  // console.log(cartItems)
  return (

    <div className="modal fade" id="cartModal" tabIndex="-1" role="dialog" aria-labelledby="cartModalLabel" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="cartModalLabel">Product details</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body" >
            {
              cartItems.map(function (i) {
                // console.log("hi")
                return <div key={i.id} style={{ border: "1px dotted black", marginTop: "10px" }}>
                  <h6 id="id" >{i.id}</h6>
                  <img src={i.image} width="100px" height="80px" alt="" />
                  <h5><b>Name : </b>{i.title}</h5>
                  <h6><b>Price : </b>{i.price}</h6>
                  <h6><b>Quantity : </b>{i.quantity}</h6>
                  <button onClick={() => handleDelete(i.id)}>Delete</button>
                  <select name="quantity" value={i.quantity} onChange={(event) => handleChange(event, i.id)}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>

                </div>

              }
              )
            }
          </div>
          <div className="modal-footer">
            <button className="btn btn-warning" type= "button" onClick={handlePaymentButtonClick}>
              Proceed to Payment
            </button>
           

            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>

    </div>
  );
}

export default CartModal;

