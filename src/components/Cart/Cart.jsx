import "./Cart.scss";
import CartItem from "./CartItem/CartItem";
import {MdClose} from "react-icons/md";
import {BsCartX} from "react-icons/bs";
import { useContext } from "react";
import { Context } from "../../utils/context";
import { useNavigate } from "react-router-dom";
const Cart = ({setShowCart}) => { 
    const handlePayment=async()=>{

    }
    const navigate=useNavigate();
    const {cartItems,cartSubTotal}=useContext(Context)
    return <div className="cart-panel">
    <div className="opac-layer"></div>
    <div className="cart-content">
       <div className="cart-header">
        <span className="heading">Shopping Cart</span>
        <span className="close-btn" onClick={()=>setShowCart(false)}>
            <MdClose/>
            <span className="text">close</span>
        </span>
       </div>
       {!cartItems?.length &&<div className="empty-cart">
        <BsCartX/>
        <span>Cart is Empty</span>
        <button className="return-cta" onClick={()=>{navigate('/');setShowCart(false)}}>Continue Shopping</button>
       </div>}
       {!!cartItems?.length &&<>
        <CartItem/>
        <div className="cart-footer">
            <div className="subtotal">
                <span className="text">Subtotal:</span>
                <span className="text total">&#8377; {cartSubTotal}</span>
            </div>
            <div className="button">
                <button className="checkout-cta" onClick={handlePayment}>Checkout</button>
            </div>
        </div>
       </>}
    </div>
    </div>;
};

export default Cart;