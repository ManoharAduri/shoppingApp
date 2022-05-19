import React from 'react'
import { Link } from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import classes from './ProductComponent.module.css'
import {addItemToCart} from '../redux/actions/cartActions'

const ProductComponent = React.memo((props)=> {
    console.log("Product Component")
    const dispatch = useDispatch()
    const {products} = useSelector(state=>state.allProducts)
    const addItemHandler = () =>{
        const itemCart = products.filter(item=>item.id === props.item.id)
        dispatch(addItemToCart({cartItem:props.item,itemPrice:itemCart[0].price}))
    }
    return (
        <div className={classes.product_container} key={props.item.id}>
            <Link to={`/product/${props.item.id}`}>
                <div className={classes.product_image}>
                    <img src={props.item.image} alt="product" />
                </div>
                <div className={classes.product_title}>
                    <p>{props.item.title}</p>
                </div>
                <div className={classes.product_price}>
                    <p>{`${props.item.price}$`}</p>
                </div>
                </Link>
                <div className={classes.add_to_cart}>
                    <button onClick={addItemHandler}>ADD TO CART</button>
                </div>
            
        </div>
    )
})

export default ProductComponent