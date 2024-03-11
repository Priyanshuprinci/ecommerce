import React from 'react'
import { useSelector } from "react-redux"
import "./CartModal.css"

function CartModal() 
{

    //Read the data from the redux store

    const output = useSelector(function(i)
    {
        return i.product.cart
    })  


    

  return (
    
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Product details</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          
        {
             output.map(function(i)
             {
                return <div style={{border: "1px dotted black", marginTop:"10px"}}>
                 
                <img src={i.image} width="40px" height="80px"/>
                <h5><b>Name : </b>{i.title}</h5>
                <h6><b>Price : </b>{Math.floor(i.final * 85)}</h6>
                <h6><b>Quantity : </b>{i.quantity}</h6>
                

                </div>
             })
             
        }


        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          
        </div>
      </div>
    </div>
  </div>
  )
}

export default CartModal
