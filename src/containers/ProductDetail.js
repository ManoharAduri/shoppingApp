import React,{useEffect} from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import {selectedProduct} from '../redux/actions/productActions'

function ProductDetail() {
    const {productId} = useParams()
    const productDetail = useSelector(state=>state.product);
    const dispatch = useDispatch();
    const fetchProductDetails = async() =>{
        const productDetails = await axios.get(`https://fakestoreapi.com/products/${productId}`).catch(err=>console.log(err))
        dispatch(selectedProduct(productDetails.data))
    }

    useEffect(()=>{
        fetchProductDetails();
    },[productId])

    console.log(productDetail);
    
  return (
    <div>ProductDetail</div>
  )
}

export default ProductDetail