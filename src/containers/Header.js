import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import classes from './Header.module.css'
import {logout} from '../redux/actions/authenticationActions'
import {useNavigate} from 'react-router-dom'
import {Link} from 'react-router-dom'

const Header = React.memo((props)=> {
  const cart = useSelector(state=>state.cart)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const login = useSelector(state=>state.authentication)
  const cartQuantity = cart.cartItems.map(item=>item.quantity);
  const initialValue = 0;
  const cartCount = cartQuantity.reduce((previousValue,currentValue)=>previousValue+currentValue,initialValue)
  const searchProductHandler = (e) =>{
    props.onProductSearch(e.target.value)
  }
  const logoutHandler = () =>{
    dispatch(logout(false))
    navigate('/')

  }
  return (
    <div className={classes.navbar_container}>
        <div className={classes.navbar_title}>
            <p>ShoppingStore</p>
        </div>
        {login.isLoggedIn && <div className={classes.product_search}>
          <input type="text" onChange={searchProductHandler} placeholder='Search Product'/>
        </div>}
        {!login.isLoggedIn && <div className={classes.navbar_buttons}>
            <Link to="/"><button>Login</button></Link>
            <Link to="/register"><button>Register</button></Link>
        </div>}
        {login.isLoggedIn && <div className={classes.cart_button}>
            <button onClick={props.onOpen}>Cart <span className={classes.cart_count}>{cartCount}</span></button>
            <button onClick={logoutHandler}>Logout</button>
        </div>}
    
    </div>
  )
})

export default Header