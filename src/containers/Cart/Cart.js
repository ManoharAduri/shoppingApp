import React from 'react'
import Modal from '../UI/Modal'
import classes from './Cart.module.css'
import { useSelector } from 'react-redux'
import CartElement from './CartElement'

// const cart_elements = [{ id: 1, name: 'Cart' }, { id: 2, name: 'Cart' }, { id: 3, name: 'Cart' }, { id: 4, name: 'Cart' }, { id: 5, name: 'Cart' }, { id: 6, name: 'Cart' }]

function Cart(props) {
    const cart = useSelector(state => state.cart)
    const cartPriceList = cart.cartItems.map(item=>+item.price);
    const calculateTotal = (initialValue,itemsArray) =>{
        return itemsArray.reduce((prevValue,currentValue)=>prevValue+currentValue,initialValue)
    }
    const cartTotal = calculateTotal(0,cartPriceList)
    const cartDisplay = <>
        <div className={classes.cart_elements}>
            {cart.cartItems.map(item => <CartElement key={item.id} cartItem={item}/>)}

        </div>
        <hr/>
        <div className={classes.cart_total}>
            <div className={classes.sub_total}>Subtotal</div>
            <div className={classes.amount}>{`$${cartTotal.toFixed(2)}`}</div>
        </div>
        <div className={classes.cart_actions}>
            <button onClick={props.onClose}>Close</button>
            <button>Order</button>
        </div>
    </>
    const noCartDisplay = <>
    <div className={classes.no_cart_items}>
        <p>No Items in the Cart</p>
        <div className={classes.cart_actions}>
            <button onClick={props.onClose}>Close</button>
        </div>

    </div>
    </>
    return (
        <Modal>
            <div className={classes.cart_container}>

                {cart.cartItems.length > 0 && cartDisplay}
                {cart.cartItems.length <=0 && noCartDisplay}

            </div>


        </Modal>
    )
}

export default Cart