import React, { useContext, useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import '../CartModal.css';
import { DocumentsContext } from '../DocumentsContext';
import '../Navbar.css';
import Download from '../download.png';
import Cancel from './Cancel';
import CartModal from './CartModal';
import Electronics from './Electronics';
import Jewellery from './Jewellery';
import MensClothing from './MensClothing';
import SigninModal from './SigninModal';
import SignupModal from './SignupModal';
import Success from './Success';
import WomensClothing from './WomensClothing';
function Navbar() {
    const { documentsLength } = useContext(DocumentsContext);
    const [showSignupModal, setShowSignupModal] = useState(false);
    const [showSigninModal, setShowSigninModal] = useState(false);
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" style={{ height: "70px"}}>
                <img width="150px" height="70px" src={Download} alt="Amazon" />
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="#navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Home <span className="sr-only"></span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/mensclothing">Men's Clothing</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/Womensclothing">Women's Clothing</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/electronics">Electronics</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/jewellery">Jewellery</a>
                        </li>

                        <li className="nav-item">
                            <button id="signin" className="nav-link" onClick={() => setShowSigninModal(true)}>Sign in</button>
                        </li>
                        <li className="nav-item">
                            <button id="signup" className="nav-link" onClick={() => setShowSignupModal(true)}>Signup</button>
                        </li>
                    </ul>
                  
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" style={{ width: "330px"}} />
                        <button className="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
                        <img style={{ marginLeft: '10px' }} data-target="#cartModal" data-toggle="modal"  width="30px" src="https://d1nhio0ox7pgb.cloudfront.net/_img/g_collection_png/standard/512x512/shopping_cart.png" alt="" />
                        <div id="cartCount" style={{ color: 'white', marginLeft: '5px', marginTop: '-30px' }}>{documentsLength}</div>
                    </div>
                </div>
            </nav>
            <CartModal />
            <SigninModal show={showSigninModal} onClose={() => setShowSigninModal(false)} />
            <SignupModal show={showSignupModal} onClose={() => setShowSignupModal(false)} />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Navigate to="/products" />} />
                    <Route path="/jewellery" element={<Jewellery />} />
                    <Route path="/mensclothing" element={<MensClothing />} />
                    <Route path="/womensclothing" element={<WomensClothing />} />
                    <Route path="/electronics" element={<Electronics />} />
                    <Route path="/success" element={<Success/>}/>
                    <Route path="/cancel" element={<Cancel/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default Navbar;
