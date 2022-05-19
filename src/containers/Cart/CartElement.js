import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import classes from './CartElement.module.css'
import {addItemToCart,removeItemFromCart} from '../../redux/actions/cartActions'

function CartElement(props) {
    const dispatch = useDispatch()
    const {products} = useSelector(state=>state.allProducts)
    const addItemHandler = () =>{
        const itemCart = products.filter(item=>item.id === props.cartItem.id)
        dispatch(addItemToCart({cartItem:props.cartItem,itemPrice:itemCart[0].price}))
    }
    const removeItemHandler = () =>{
        const itemCart = products.filter(item=>item.id === props.cartItem.id)
        dispatch(removeItemFromCart({cartItem:props.cartItem,itemPrice:itemCart[0].price}))
    }
  return (
    <div className={classes.cart_element_container}>
        <div className={classes.cart_image}>
            <img src={props.cartItem.image} alt="cart"/>
        </div>
        <div className={classes.cart_title}>
            <p>{props.cartItem.title}</p>
        </div>
        <div className={classes.cart_count}>
            <button onClick={addItemHandler}>+</button>
            <p>{props.cartItem.quantity}</p>
            <button onClick={removeItemHandler}>-</button>
        </div>
        <div className={classes.cart_price}>
            <p>{`$${props.cartItem.price}`}</p>
        </div>
    </div>
  )
}

export default CartElement