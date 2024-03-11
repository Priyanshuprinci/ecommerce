
import { useSelector } from 'react-redux'
import { useState } from 'react'
import CartModal from './CartModal'
import './CartModal.css'

function Navbar() 
{

  const output = useSelector(function(i)
  {
    return i.product.cart
  })

  
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark" style={{height: "70px"}}>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Add Products</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Signup</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Login</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Logout</a>
            </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" style={{width: "600px", marginTop:"-5px",marginLeft:"30px"}}/>
            {/* <button style={{marginLeft: "680px",marginTop:"-200px"}} class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>         */}
              
            <h1 style={{color:"red"}}>I am changing today</h1>
            <img src='https://content.tupaki.com/en/feeds/2023/08/04/139826-syzdh3mx.jpg' width="150px" height="150px"/>            
            <img style = {{marginLeft:'750px', marginTop:"-80px"}}data-target="#exampleModal" data-toggle="modal" width="50px" src="https://d1nhio0ox7pgb.cloudfront.net/_img/g_collection_png/standard/512x512/shopping_cart.png"/> 
            
            <div id="cartCount">{output.length}
            
              
            </div>
            </form>
        </div>
        </nav>
        <CartModal/>
    </div>
  )
}



export default Navbar
